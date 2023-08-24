import { defineStore } from 'pinia'
import axios from 'axios';
import addOAuthInterceptor from 'axios-oauth-1.0a'

const CONSUMERKEY = import.meta.env.VITE_CONSUMERKEY;
const CONSUMERSECRET = import.meta.env.VITE_CONSUMERSECRET;

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

