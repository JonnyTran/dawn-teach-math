<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Chatbox from './components/Chatbox.vue';
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
    <!-- <Chatbox /> -->
    <Footer />
  </div>
</template>

<style>

</style>

