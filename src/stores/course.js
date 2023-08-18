import { defineStore } from 'pinia'
import { useTeacherStore, axiosClient } from './teacher'

function createNestedTree(objs, objMap = new Map(), objTree = [], parents = new Map()) {
  // Create a map of objs using their id as the key
  objs.forEach(obj => {
    obj.children = [];
    objMap.set(obj.id.toString(), obj);
  });

  // Iterate over the objs to build the nested dictionary structure
  objs.forEach(obj => {
    if (obj.parent_id === '0') {
      // If the page is a root obj, add it to the objTree array
      obj.parent_id = null;
      objTree.push(obj);

    } else if (obj.hasOwnProperty('parent_id') && objMap.has(obj.parent_id)) {
      // Folder
      const parentFolder = objMap.get(obj.parent_id);
      parents.set(obj.id.toString(), parentFolder);
      parentFolder.children.push(obj.id.toString());

    } else if (obj.hasOwnProperty('folder_id') && objMap.has(obj.folder_id)) {
      // Page
      obj.type = 'page';
      const parentFolder = objMap.get(obj.folder_id);
      parents.set(obj.id.toString(), parentFolder);
      parentFolder.children.push(obj.id.toString());
    }
  });

  return objTree;
}

function getDateRange(dateString) {
  // const today = new Date();
  // ${today.getFullYear().toString()}
  const startMonthDateString = dateString.split('-')[0].trim();
  const startDate = new Date(`${startMonthDateString}`); 
  
  const monthString = dateString.split(' ')[0].trim();
  const endDateString = dateString.split('-')[1].trim();
  const endDate = new Date(`${monthString} ${endDateString}`); 

  return [startDate, endDate]
}


export const useCourseStore = defineStore('course', {
  state: () => ({
    id: null,
    section: null,
    pages: new Map(),
    lessons: [],
    nestedFolders: [],
    parents: new Map(),
    gradingPeriods: [],
    teacher: null,
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
        this.pages = new Map();

        const folders = (await import('../data/section-folders.json')).default.folders;
        this.nestedFolders = createNestedTree(folders, this.pages, this.nestedFolders, this.parents)
  
        const pages = (await import('../data/section-pages.json')).default.page;
        this.nestedFolders = createNestedTree(pages, this.pages, this.nestedFolders, this.parents)

        var isLessonDate = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s\d{1,2}-\d{1,2}$/i;
        for (let [id, folder] of this.pages) {
          if (isLessonDate.test(folder.title)) {
            const [startDate, endDate] = getDateRange(folder.title);
            folder.start_date = startDate;
            folder.end_date = endDate;
            this.lessons.push(folder);
          }
        }

        // const gradingPeriods = (await import ('../data/gradingperiods.json')).default
        // for (const gradingPeriod of gradingPeriods) {
        //   this.gradingPeriods.push({
        //     start: gradingPeriod.start, 
        //     end: gradingPeriod.end,
        //   });
        // }
        // console.log('gradingPeriods', this.gradingPeriods)
        
        this.id = sectionId;
      } catch (error) {
        console.log('courseStore', error)
        this.error = error
      } finally {
        this.loading = false
      }
      return this;
    },
    loadLesson(id) {
      const lesson = this.pages.get(id);
      if (lesson == null) {
        return;
      }

      const unit = this.parents.get(id);
      lesson.unit_title = unit.title;
      
      return lesson
    }
  },
  getters: {
    isLoaded: (state) => { return state.id != null && state.pages.size },
    hasPage: (state) => { return (pageId) => state.pages.has(pageId) },
    getPage: (state) => { return (pageId) => state.pages.get(pageId) },
    hasLesson: (state) => { return (id) => state.lessons.find(lesson => lesson.id.toString() === id) },
    getLessonFromDate: (state) => {
      return (today) => state.lessons.find(lesson => lesson.start_date <= today && lesson.end_date >= today);
    },
    getAllowedDateRange: (state) => () => {
      const today = new Date();
      const lesson = state.lessons.find(lesson => {
        const startDateString = lesson.title.split('-')[0].trim();
        const startDate = new Date(`${startDateString} ${today.getFullYear().toString()}`); 

        return today >= startDate;
      });
    },
  },
})