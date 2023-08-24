import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import mitt from 'mitt';
import { useTeacherStore } from '@/stores/teacher';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(VueTailwindDatepicker)

const emitter = mitt();
// app.config.globalProperties.$emitter = emitter
app.provide('emitter', emitter);
app.mount('#app')

const teacherStore = useTeacherStore();
if (!teacherStore.school) {
  teacherStore.fetch();
}
