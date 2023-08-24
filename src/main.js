import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import mitt from 'mitt';
import { useTeacherStore } from '@/stores/teacher';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import Chat from "vue3-beautiful-chat";
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(VueTailwindDatepicker)

const emitter = mitt();
app.provide('emitter', emitter);
app.use(Chat);
app.mount('#app')

const teacherStore = useTeacherStore();
if (!teacherStore.school) {
  teacherStore.fetch();
}
