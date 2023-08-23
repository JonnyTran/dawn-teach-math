<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Chatbox from './components/Chatbox.vue';
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

