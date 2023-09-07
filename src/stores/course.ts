import { defineStore } from 'pinia'
import { useTeacherStore } from './teacher'
import { axiosClient } from './general'

/**
 * Returns an array of two Date objects representing the start and end dates of a date range.
 * @param dateStr - A string representing the date range in the format "MMM DD-DD".
 * @param year - An optional number representing the year to use for the date range. Defaults to the current year.
 * @returns An array of two Date objects representing the start and end dates of the date range.
 */
function getDateRange(dateStr: string, year = new Date().getFullYear()) {
  const startMonthDateStr = dateStr.split('-')[0].trim()
  const startDate = new Date(`${startMonthDateStr} ${year.toString()}`)

  const endMonthStr = dateStr.split(' ')[0].trim()
  const endDateStr = dateStr.split('-')[1].trim()
  const endDate = new Date(`${endMonthStr} ${endDateStr} ${year.toString()}`)

  return [startDate, endDate]
}

function decodeHtml(str: string) {
  const parser = new DOMParser()
  const decodedString = parser.parseFromString(str.replace(/&amp;amp;/g, '&'), 'text/html').body
    .textContent
  return decodedString
}

const config = {
  params: {
    start: 0,
    limit: 200
  }
}

export const useCourseStore = defineStore('course', {
  state: () => ({
    id: null,
    section: null,
    teacher: null,
    folders: null,
    lessons: [],
    lesson: null,
    gradingPeriods: [],
    loading: false,
    error: null,
    currentYear: new Date().getFullYear()
  }),
  actions: {
    /**
     * Fetches data for the course store.
     * @async
     * @param {string} sectionId - The ID of the section to fetch data for.
     * @returns {Promise<Course>} A Promise that resolves with the Course object.
     */
    async fetch(sectionId: string) {
      this.loading = true

      try {
        if (typeof sectionId !== 'string') {
          throw new Error('Course not loaded')
        }

        this.folders = new Map()
        this.parents = new Map()
        this.gradingPeriods = []
        this.section = null
        this.lessons = []

        let folders = (await axiosClient.get(`/schoology/sections/${sectionId}/folders`, config)).data.folders
        if (folders === undefined) {
          return this
        }
        folders
          .filter((folder: any) => {
            var isLessonDate =
              /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s\d{1,2}-\d{1,2}$/i
            return isLessonDate.test(folder.title)
          })
          .forEach((folder: any) => {
            this.folders.set(folder.id.toString(), folder)
          })

        if (this.folders !== null) {
          this.processLessons(this.folders)
        }
        const teacherStore = useTeacherStore()

        this.section = await teacherStore.sections[sectionId]
        this.id = sectionId
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
      return this
    },
    /**
     * Converts lesson dates from a string format to a Date object format.
     * Since only month and date is given, it uses the gradingPeriod's year if exists, otherwise the current year.
     * @async
     * @function
     * @returns {Promise<void>}
     */
    async processLessons(folders: Map<string, any>) {
      try {
        // const gradingPeriods = (await import('../data/gradingperiods.json')).default;
        // for (const period of gradingPeriods) {
        //   this.gradingPeriods.push({
        //     start: new Date(period.start),
        //     end: new Date(period.end),
        //   });
        //   this.currentYear = new Date(period.start).getFullYear();
        // }
      } catch (error) {
        this.error = error
      } finally {
        var isLessonDate = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s\d{1,2}-\d{1,2}$/i
        for (let [id, folder] of folders) {
          if (isLessonDate.test(folder.title)) {
            const [startDate, endDate] = getDateRange(folder.title, this.currentYear)
            delete folder.completion_status
            folder.start_date = startDate
            folder.end_date = endDate
            this.lessons.push(folder)
          }
        }
      }
    },
    async loadLesson(folderId: string, sectionId: string = this.id) {
      if (
        sectionId === null ||
        (typeof folderId !== 'string' && typeof folderId !== 'number') ||
        (typeof sectionId !== 'string' && typeof sectionId !== 'number')
      ) {
        throw new Error(`Invalid parameters: ${folderId}, ${sectionId}`)
      }

      try {
        this.lesson = (await axiosClient.get(`/schoology/courses/${sectionId}/folder/${folderId}`)).data
        this.lesson.slide_title = null
        this.lesson.gslide_id = null
        delete this.lesson.self.completion_status
        delete this.lesson.parent.completion_status

        const [startDate, endDate] = getDateRange(this.lesson.self.title, this.currentYear)
        this.lesson.self.start_date = startDate
        this.lesson.self.end_date = endDate

        for (let i in this.lesson['folder-item']) {
          let child = this.lesson['folder-item'][i]
          delete child.completion_status

          if (child.type === 'document' && child.document_type === 'link') {
            const documents = (
              await axiosClient.get(`/schoology/sections/${sectionId}/documents/${child.id}`)
            ).data
            const links = documents.attachments.links.link

            for (let link of links) {
              if (link.url.includes('presentation')) {
                this.lesson.slide_title = decodeHtml(link.title)
                const regex = /\/d\/([a-zA-Z0-9-_]+)/
                const gslide_id = link.url.match(regex)[1]
                // let embedurl = link.url.replace(/\/edit.*$/, "/embed");

                this.lesson.gslide_id = gslide_id
              }
            }

            child['links'] = links
          } else if (child.type === 'assignment' || child.type === 'assessment_v2') {
            const assignment = (
              await axiosClient.get(`/schoology/sections/${sectionId}/assignments/${child.id}`)
            ).data
            child = Object.assign({}, child, assignment)
          }

          this.lesson['folder-item'][i] = child
        }
      } catch (error) {
        this.error = error
      } finally {
        return this.lesson
      }
    }
  },
  getters: {
    isLoaded: (state): boolean => {
      return state.id !== null && state.folders.size !== 0
    },
    hasFolder: (state) => {
      return (pageId: string) => state.folders.has(pageId)
    },
    getFolder: (state) => {
      return (pageId: string) => state.folders.get(pageId)
    },
    hasLesson: (state) => {
      return (id: string) => state.lessons.find((lesson) => lesson.id.toString() === id)
    },
    getLessonFromDate: (state): any => {
      return (today: Date) =>
        state.lessons.find((lesson) => today >= lesson.start_date && today <= lesson.end_date)
    },
    getAllowedDateRange: (state) => () => {
      const today = new Date()
      const lesson = state.lessons.find((folder) => {
        const startDateString = folder.title.split('-')[0].trim()
        const startDate = new Date(`${startDateString} ${today.getFullYear().toString()}`)

        return today >= startDate
      })
    }
  }
})
