import { defineStore } from 'pinia'
import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const csrftoken = Cookies.get('csrftoken');

if (csrftoken) {
  axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
}

export const axiosClient = axios.create({
  baseURL: '/api',
});

// // Print axios request and response to console
// axiosClient.interceptors.request.use(request => {
//   return request
// })

