<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Chatbox from './components/Chatbox.vue';
import { useTeacherStore } from '@/stores/teacher';

const teacherStore = useTeacherStore();
if (!teacherStore.school) {
  teacherStore.fetch();
}
</script>

<template>
  <head>
    <meta charset="UTF-8">
  </head>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- <Chatbox /> -->
    <Footer />
  </div>
</template>

<style>

</style>

