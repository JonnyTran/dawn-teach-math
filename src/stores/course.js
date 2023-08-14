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

  return [objMap, objTree];
}


export const useCourseStore = defineStore('course', {
  state: () => ({
    id: null,
    section: null,
    folders: {},
    pages: {},
    nestedFolders: [],
    gradingPeriods: [],
    teacher: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetch(sectionId) {
      console.log("useCourseStore.fetch", sectionId)
      this.loading = true
      const teacherStore = useTeacherStore();

      try {
        // this.folders = (await import ('../data/section-folders.json')).default.folders.reduce((acc, obj) => {
        //   acc[obj.id] = obj;
        //   return acc;
        // }, {});

        [this.folders, this.nestedFolders] = createNestedTree((await import ('../data/section-folders.json')).default.folders)
  
        // this.pages = (await import ('../data/section-pages.json')).default.page.reduce((acc, obj) => {
        //   acc[obj.id] = obj;
        //   return acc;
        // }, {});

        [this.pages, this.nestedFolders] = createNestedTree((await import ('../data/section-pages.json')).default.page, new Map(), this.nestedFolders)

        console.log('nestedFolders', this.nestedFolders)
        console.log('folders', this.folders)
        console.log('pages', this.pages)

        if (sectionId) {
          this.section = teacherStore.sections[sectionId];
        }

        // for grading_period in this.section.grading_periods {
        //   this.gradingPeriods[grading_period.id] = grading_period;
        // }
        const gradingPeriods = (await import ('../data/gradingperiods.json')).default
        for (const gradingPeriod of gradingPeriods) {
          this.gradingPeriods.push({
            start: gradingPeriod.start, 
            end: gradingPeriod.end,
          });
        }
        console.log('gradingPeriods', this.gradingPeriods)
        
        this.id = sectionId;
      } catch (error) {
        console.log(error)
        this.error = error
      } finally {
        this.loading = false
      }
      return this;
    }
  },
  getters: {
    getPostAuthor: (state) => {
      const teacherStore = useTeacherStore()
      return state.teacher = teacherStore;
    }
  },
})