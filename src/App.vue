<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// import Chatbox from './components/Chatbox.vue';

import { OpenAI } from "langchain/llms/openai";

try {
  const llm = new OpenAI({
    temperature: 0.9,
  });
} catch (error) {
  console.log('error', error)
}


// const result = await llm.predict("What would be a good company name for a company that makes colorful socks?");
// console.log('result', result)
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
    <!-- <Chatbox /> -->
    <Footer />
  </div>
</template>

<style>

</style>

