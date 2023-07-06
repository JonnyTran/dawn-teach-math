import axios from 'axios';
import { defineStore } from 'pinia';

axios.defaults.baseURL = 'https://api.schoology.com/v1/';

// Create a Pinia store in this Vue.js named useUserStore with OAuth 1.0 using axios
// and then store it so other components can use it to make a request to the API at https://api.schoology.com/v1/
export const useTeacherStore = defineStore('teacher', {
    state: () => ({
        oauth_token: null,
        oauth_token_secret: null,
        oauth_consumer_key: '8aa414b64bb6f107f22380c55d5d38c206498ecf1',
        oauth_consumer_secret: 'ad767c4e1f3d070c1d01d0779f0833e9',
        oauth_version: '1.0',
        oauth_signature_method: 'HMAC-SHA1',
        origin: 'http://localhost:5173',
        user: null,
        school: null,
        courses: [],
        units: [],
        folders: [],
        files: []
    }),
    actions: {
        async getSchool() {
            const school = await axios.get('/schools/');
            console.log(school.data)
            this.school = school.data;
            return school.data;
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
        isAuthenticated: (state) => {
            return state.oauth_token && state.oauth_token_secret;
        }   
    }
});
