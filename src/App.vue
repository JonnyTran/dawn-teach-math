<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Chatbox from './components/Chatbox.vue';

import { OpenAI } from "langchain/llms/openai";

try {
  const llm = new OpenAI({
    openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    temperature: 0.9,
  });
} catch (error) {
  console.log('error', error)
}

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

