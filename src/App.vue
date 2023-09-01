<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Chatbox from './components/Chatbox.vue';
const isDev = process.env.NODE_ENV === 'development';
</script>

<template>
  <head>
    <meta charset="UTF-8">
  </head>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-1">
      <router-view />
    </div>
    <Chatbox />
    <Footer />
  </div>
</template>

<style>

</style>

