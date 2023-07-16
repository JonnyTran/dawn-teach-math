<script setup>
import { useTeacherStore } from '@/stores/teacher';

const teacherStore = useTeacherStore();
teacherStore.fill();
</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    } -->
  </head>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Chatbox from './components/Chatbox.vue';

// What's this? It's a global mixin. It's a way to add functionality to all of your components.
export default {
  name: 'App',
  components: {
    Navbar,
    Chatbox
  },
};
</script>

<style>

</style>

