import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        API_URL: 'https://api.schoology.com/v1/',})
    })