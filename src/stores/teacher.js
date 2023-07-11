import axios from 'axios';
import { defineStore } from 'pinia';
import addOAuthInterceptor from 'axios-oauth-1.0a'

const CONSUMERKEY = "8aa414b64bb6f107f22380c55d5d38c206498ecf1";
const CONSUMERSECRET = "ad767c4e1f3d070c1d01d0779f0833e9";
// axios.defaults.baseURL = 'https://api.schoology.com/v1/';

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
  console.log('Starting Request', request)
  return request
})

// Create a Pinia store in this Vue.js named useUserStore with OAuth 1.0 using axios
// and then store it so other components can use it to make a request to the API at https://api.schoology.com/v1/
export const useTeacherStore = defineStore('teacher', {
  state: () => ({
    user: null,
    school: null,
    sections: {},
    highlight_sections: [],
    folders: [],
    files: []
  }),
  actions: {
    async fill() {
      // const school = await axiosClient.get('/schools/');
      // this.school = school.data.school[0];
      this.school = (await import ('../data/schools.json')).default.school[0];

      // const user = await axiosClient.get('/user/{id}');
      // this.user = school.data;
      this.user = (await import ('../data/user.json')).default;

      // const sections = await axiosClient.get('/sections');
      const sections = (await import ('../data/sections.json')).default.sections;
      for (const section of sections) {
        this.sections[section.id] = section;
      }

      return this;
    },
  },
  getters: {
    num_courses: (state) => {
      if (state.courses) {
        return state.courses.length;
      }
    },
    isAuthenticated: (state) => {
        return axiosClient.oauth_token && axiosClient.oauth_token_secret;
    }   
  }
});
