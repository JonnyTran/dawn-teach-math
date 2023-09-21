import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'
import { nanoid } from 'nanoid'
import { useTeacherStore } from '@/stores/teacher'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import Chat from 'vue3-beautiful-chat'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(VueTailwindDatepicker)
app.use(Chat)

const emitter = mitt()
app.provide('emitter', emitter)

let sessionId = VueCookies.get('session')
if (!sessionId) {
  sessionId = nanoid()
  VueCookies.set('session', sessionId, {
    expires: 7, // Expires in 1 year
    secure: true, // Only send over HTTPS
    httpOnly: true // Prevent XSS attacks
  })
}
app.use(VueCookies, { expires: '1d'})

app.mount('#app')

const teacherStore = useTeacherStore()
if (!teacherStore.school) {
  teacherStore.fetch()
}
