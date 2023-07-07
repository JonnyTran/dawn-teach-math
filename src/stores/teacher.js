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
// axiosClient.interceptors.request.use(request => {
//   console.log('Starting Request', request)
//   return request
// })

// Create a Pinia store in this Vue.js named useUserStore with OAuth 1.0 using axios
// and then store it so other components can use it to make a request to the API at https://api.schoology.com/v1/
export const useTeacherStore = defineStore('teacher', {
  state: () => ({
    user: null,
    school: null,
    courses: [],
    units: [],
    folders: [],
    files: []
  }),
  actions: {
    async getSchool() {
      const school = await axiosClient.get('/schools/');

      this.school = school.data.school[0];
      return this.school;
    },
    // async getUnits() {
    //     const units = await axios.get('/api/units');
    //     this.units = units.data;
    //     return units.data;
    // },
    // async getFolders() {
    //     const folders = await axios.get('/api/folders');
    //     this.folders = folders.data;
    //     return folders.data;
    // },
    // async getFiles() {
    //     const files = await axios.get('/api/files');
    //     this.files = files.data;
    //     return files.data;
    // },
  },
  getters: {
    get_school: (state) => {
      return state.school;
    },
    isAuthenticated: (state) => {
        return state.oauth_token && state.oauth_token_secret;
    }   
  }
});
