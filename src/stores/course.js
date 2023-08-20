import { defineStore } from 'pinia'
import { useTeacherStore, axiosClient } from './teacher'

function processFolders(objs, objMap = new Map(), parents = new Map()) {
  // Create a map of objs using their id as the key
  objs.forEach(obj => {
    delete obj.completion_status;
    objMap.set(obj.id.toString(), obj);
  });
}

function getDateRange(dateString, year = new Date().getFullYear()) {
  const startMonthDateStr = dateString.split('-')[0].trim();
  const startDate = new Date(`${startMonthDateStr} ${year.toString()}`); 
  
  const endMonthStr = dateString.split(' ')[0].trim();
  const endDateStr = dateString.split('-')[1].trim();
  const endDate = new Date(`${endMonthStr} ${endDateStr} ${year.toString()}`); 

  return [startDate, endDate]
}

export const useCourseStore = defineStore('course', {
  state: () => ({
    id: null,
    section: null,
    teacher: null,
    folders: null,
    parents: null,
    lessons: [],
    lesson: null,
    gradingPeriods: [],
    loading: false,
    error: null
  }),
  actions: {
    /**
     * Fetches data for the course store.
     * @async
     * @param {string} sectionId - The ID of the section to fetch data for.
     * @returns {Promise<Course>} A Promise that resolves with the Course object.
     */
    async fetch(sectionId) {
      this.loading = true

      try {
        this.folders = new Map();
        this.parents = new Map();
        this.gradingPeriods = [];
        this.section = null;
        this.lessons = [];
        
        const folders = (await axiosClient.get(`/sections/${sectionId}/folders?start=0&limit=200`)).data.folders;
        if (folders === undefined) {
          return this;
        }
        processFolders(folders, this.folders, this.parents);
  
        this.processLessons(this.folders);
        const teacherStore = useTeacherStore();
        
        this.section = await teacherStore.sections[sectionId];
        this.id = sectionId;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
      return this;
    },
    /**
     * Converts lesson dates from a string format to a Date object format. 
     * Since only month and date is given, it uses the gradingPeriod's year if exists, otherwise the current year.
     * @async
     * @function
     * @returns {Promise<void>}
     */
    async processLessons(folders) {
      let currentYear;
      try {
        const gradingPeriods = (await import('../data/gradingperiods.json')).default;
        for (const period of gradingPeriods) {
          this.gradingPeriods.push({
            start: new Date(period.start),
            end: new Date(period.end),
          });
          currentYear = new Date(period.start).getFullYear();
        }

      } catch (error) {
        this.error = error;

      } finally {
        var isLessonDate = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s\d{1,2}-\d{1,2}$/i;
        for (let [id, folder] of folders) {
          if (isLessonDate.test(folder.title)) {
            const [startDate, endDate] = getDateRange(folder.title, currentYear);
            folder.start_date = startDate;
            folder.end_date = endDate;
            this.lessons.push(folder);
          }
        }
      }
    },
    async loadLesson(folderId, sectionId = this.id) {
      if (sectionId === null) {
        throw new Error('Course not loaded');
      }
      try {
        this.lesson = (await axiosClient.get(`/courses/${sectionId}/folder/${folderId}`)).data;
        this.lesson.slide_title = null;
        this.lesson.gslide_id = null;
        delete this.lesson.self.completion_status;
        delete this.lesson.parent.completion_status;

        for (let i in this.lesson['folder-item']) {
          let child = this.lesson['folder-item'][i];
          delete child.completion_status;

          if (child.type === 'document' && child.document_type === 'link') {
            const documents = (await axiosClient.get(`/sections/${sectionId}/documents/${child.id}`)).data;
            const links = documents.attachments.links.link;
            
            for (let link of links) {
              if (link.url.includes('presentation')) {
                this.lesson.slide_title = link.title;
                const regex = /\/d\/([a-zA-Z0-9-_]+)/;
                const gslide_id = link.url.match(regex)[1];
                // let embedurl = link.url.replace(/\/edit.*$/, "/embed");

                this.lesson.gslide_id = gslide_id;
              }
            }

            child['links'] = links;

          } else if (child.type === 'assignment' || child.type === 'assessment_v2') {
            const assignment = (await axiosClient.get(`/sections/${sectionId}/assignments/${child.id}`)).data;
            child = Object.assign({}, child, assignment)
          }

          this.lesson['folder-item'][i] = child;
        }

      } catch (error) {
        this.error = error;
      } finally {
        return this.lesson;
      }
    },
  },
  getters: {
    isLoaded: (state) => { 
      return state.id !== null && state.folders.size !== 0 },
    hasFolder: (state) => { 
      return (pageId) => state.folders.has(pageId) },
    getFolder: (state) => { 
      return (pageId) => state.folders.get(pageId) },
    hasLesson: (state) => { 
      return (id) => state.lessons.find(lesson => lesson.id.toString() === id) },
    getLessonFromDate: (state) => {
      return (today) => state.lessons.find(lesson => lesson.start_date <= today && lesson.end_date >= today);
    },
    getAllowedDateRange: (state) => () => {
      const today = new Date();
      const lesson = state.lessons.find(folder => {
        const startDateString = folder.title.split('-')[0].trim();
        const startDate = new Date(`${startDateString} ${today.getFullYear().toString()}`); 

        return today >= startDate;
      });
    },
  },
})