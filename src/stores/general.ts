import axios from 'axios'
// import Cookies from 'js-cookie'

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

// const csrftoken = Cookies.get('csrftoken')

// if (csrftoken) {
//   axios.defaults.headers.common['X-CSRFToken'] = csrftoken
// }

export const axiosClient = axios.create({
  baseURL: '/api'
})

// // Print axios request and response to console
// axiosClient.interceptors.request.use(config => {
//   const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//   config.headers['X-CSRF-TOKEN'] = csrfToken;
//   return config;
// });
