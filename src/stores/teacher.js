import axios from 'axios';
import config from '../data/config';
import { defineStore } from 'pinia';
import addOAuthInterceptor from 'axios-oauth-1.0a'
import dotenv from 'dotenv';

dotenv.config();

const CONSUMERKEY = process.env.CONSUMER_KEY;
const CONSUMERSECRET = process.env.CONSUMER_SECRET;

export const axiosClient = axios.create({
  baseURL: 'https://api.schoology.com/v1/',
});

const options = {
  key: CONSUMERKEY,
  secret: CONSUMERSECRET,
  algorithm: "HMAC-SHA1",
};
addOAuthInterceptor(axiosClient, options);

// Print axios request and response to console
axiosClient.interceptors.request.use(request => {
  // console.log('Starting Request', request)
  return request
})

// Create a Pinia store in this Vue.js named useUserStore with OAuth 1.0 using axios
// and then store it so other components can use it to make a request to the API at https://api.schoology.com/v1/
export const useTeacherStore = defineStore('teacher', {
  state: () => ({
    id: config.id,
    user: null,
    school: null,
    sections: {},
    currentSection: null,
    highlightSections: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetch() {
      this.loading = true;
      try {
        const schools = (await axiosClient.get('/schools/')).data.school;
        this.school = schools[0];

        const user = (await axiosClient.get(`/users/${this.id}`)).data;
        this.user = user;

        const sections = (await axiosClient.get(`/users/${this.id}/sections`)).data.section;
        this.sections = sections.reduce((map, obj) => {
          map[obj.id.toString()] = obj;
          return map;
        }, {});

      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
      return this;
    },
    setCurrentSection(sectionId) {
      try {
        this.currentSection = this.sections[sectionId];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getSection: (state) => { return (sectionId) => state.sections[sectionId] },
    getNumCourses: (state) => {
      if (state.courses) {
        return state.courses.length;
      }
      return 0;
    },
    isAuthenticated: (state) => {
        return axiosClient.oauth_token && axiosClient.oauth_token_secret;
    },
    
  }
});
