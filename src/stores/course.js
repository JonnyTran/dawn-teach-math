import { defineStore } from 'pinia'
import { useTeacherStore, axiosClient } from './teacher'

function processFolders(objs, objMap = new Map(), parents = new Map()) {
  // Create a map of objs using their id as the key
  objs.forEach(obj => {
    obj.children = [];
    delete obj.completion_status;
    objMap.set(obj.id.toString(), obj);
  });

  // Iterate over the objs
  // objs.forEach(obj => {
  //   if (obj.hasOwnProperty('parent_id') && objMap.has(obj.parent_id)) {
  //     // Folder
  //     const parentFolder = objMap.get(obj.parent_id);
  //     parents.set(obj.id.toString(), parentFolder);
  //     parentFolder.children.push(obj.id.toString());

  //   } else if (obj.hasOwnProperty('folder_id') && objMap.has(obj.folder_id)) {
  //     // Page
  //     obj.type = 'page';
  //     const parentFolder = objMap.get(obj.folder_id);
  //     parents.set(obj.id.toString(), parentFolder);
  //     parentFolder.children.push(obj.id.toString());
  //   }
  // });
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
      const teacherStore = useTeacherStore();

      try {
        if (sectionId) {
          this.section = teacherStore.sections[sectionId];
        }

        // const folders = await axiosClient.get('/folders?start=0&limit=20');
        this.folders = new Map();
        this.parents = new Map();

        const folders = (await import('../data/section-folders.json')).default.folders;
        processFolders(folders, this.folders, this.parents);
  
        this.processLessons(this.folders);
        
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
        console.log('convertLessonDates', error);
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
    async loadLesson(id) {
      try {
        this.lesson = (await import('../data/section-lesson.json')).default;
        this.lesson.slide_title = null;
        this.lesson.gslide_id = null;
        delete this.lesson.self.completion_status;
        delete this.lesson.parent.completion_status;

        for (let i in this.lesson['folder-item']) {
          let child = this.lesson['folder-item'][i];
          delete child.completion_status;

          if (child.type === 'document' && child.document_type === 'link') {
            const documents = (await import('../data/section-document.json')).default;
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

          } else if (child.type === 'assignment' && child.assignment_type === 'basic') {
            const assignment = (await import('../data/section-assignments.json')).default;
            child = Object.assign({}, child, assignment)

          } else if (child.type === 'assessment_v2') {
            const assessment = (await import('../data/section-assignments.json')).default;
            child = Object.assign({}, child, assessment)
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