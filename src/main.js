import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useTeacherStore } from '@/stores/teacher';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(VueTailwindDatepicker)

app.mount('#app')

const teacherStore = useTeacherStore();
teacherStore.fetch();