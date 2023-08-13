import { defineStore } from 'pinia'
import { useTeacherStore } from './teacher'

export const useCourseStore = defineStore('course', {
  state: () => ({
    id: null,
    section: null,
    folders: [],
    pages: [],
    loading: false,
    error: null
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = useTeacherStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    }
  }
})