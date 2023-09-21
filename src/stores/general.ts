import axios from 'axios'
import VueCookies from 'vue-cookies'

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
axiosClient.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['X-CSRFToken'] = VueCookies.get('csrftoken');
  config.headers['Authorization'] = `Bearer ${VueCookies.get('session')}`;
  return config;
});
