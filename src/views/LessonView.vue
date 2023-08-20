<script setup>
import { Spinner, Tooltip, Button } from 'flowbite-vue';
import { defineAsyncComponent } from 'vue';

// import { GSlides } from '@/components/GSlides.vue';
const GSlides = defineAsyncComponent(() => import('@/components/GSlides.vue'));

import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCourseStore } from '@/stores/course';

const route = useRoute();
const sectionId = route.params.sectionId;
const folderId = route.params.pageId;

const courseStore = useCourseStore();
const { getFolder, lesson } = storeToRefs(courseStore);

if (courseStore.id != sectionId) {
  courseStore.fetch(sectionId);
}

courseStore.loadLesson(folderId);
// console.log(lesson)

</script>

<template>
  <spinner size="12" v-if="courseStore.loading" />
  <section class="bg-white dark:bg-gray-900" v-if="courseStore.isLoaded && lesson !== null">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          {{ lesson.parent.title }}
        </h2>

        <h3 class="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
          {{ lesson.self.title }}
        </h3>

        <GSlides :label="lesson.slide_title" :gslide_id="lesson.gslide_id" />

        <p class="mb-4 font-light">
          Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
        </p>
        <p class="mb-4 font-medium">
          Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
        </p>
        <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
          Learn more
          <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </section>
  
  <section class="bg-white dark:bg-gray-900" v-if="courseStore.isLoaded && lesson !== null">
    <div v-if="lesson !== null">
      <h1>{{ lesson.self.title }}</h1>
      <pre>lesson = {{ JSON.stringify(lesson, null, 4) }}</pre>
    </div>
  </section>
</template>

<style>
</style>