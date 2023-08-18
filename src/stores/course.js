import { defineStore } from 'pinia'
import { useTeacherStore, axiosClient } from './teacher'

function createNestedTree(objs, objMap = new Map(), objTree = []) {
  // Create a map of objs using their id as the key
  objs.forEach(obj => {
    obj.children = [];
    objMap.set(obj.id.toString(), obj);
  });

  // Iterate over the objs to build the nested dictionary structure
  objs.forEach(obj => {
    if (obj.parent_id === '0') {
      // If the page is a root obj, add it to the objTree array
      objTree.push(obj);
    } else if (obj.hasOwnProperty('parent_id') && objMap.has(obj.parent_id)) {
      // If the page has a parent, add it as a child to the parent page
      const parentFolder = objMap.get(obj.parent_id);
      parentFolder.children.push(obj);
    } else if (obj.hasOwnProperty('folder_id') && objMap.has(obj.folder_id)) {
      const parentPage = objMap.get(obj.folder_id);
      parentPage.children.push(obj);
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
    folders: new Map(),
    pages: new Map(),
    lessons: [],
    nestedFolders: [],
    gradingPeriods: [],
    teacher: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetch(sectionId) {
      this.loading = true
      const teacherStore = useTeacherStore();

      try {
        // const folders = await axiosClient.get('/folders?start=0&limit=20');
        this.folders = new Map();
        this.nestedFolders = createNestedTree((await import ('../data/section-folders.json')).default.folders, this.folders)
  
        this.pages = new Map();
        this.nestedFolders = createNestedTree((await import ('../data/section-pages.json')).default.page, this.pages, this.nestedFolders)

        if (sectionId) {
          this.section = teacherStore.sections[sectionId];
        }

        var isLessonDate = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s\d{1,2}-\d{1,2}$/i;
        for (let [id, folder] of this.folders) {
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
    }
  },
  getters: {
    isLoaded: (state) => { return state.id != null && state.folders.size && state.pages.size },
    hasFolder: (state) => { return (folderId) => state.folders.has(folderId) },
    hasPage: (state) => { return (pageId) => state.pages.has(pageId) },
    getFolder: (state) => { return (folderId) => state.folders.get(folderId) },
    getPage: (state) => { return (pageId) => state.pages.get(pageId) },
    getLesson: (state) => { return (folderId) => state.lessons.find(lesson => lesson.id.toString() === folderId) },
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