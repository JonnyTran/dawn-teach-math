<script setup>
import { Spinner, Tooltip, Button } from 'flowbite-vue';
import { useRoute } from 'vue-router';
import { useCourseStore } from '@/stores/course';

const route = useRoute();
const sectionId = route.params.sectionId;
const pageId = route.params.pageId;

const courseStore = useCourseStore();
if (courseStore.id != sectionId) {
  courseStore.fetch(sectionId);
}

console.log('pageId', pageId)
</script>

<template>
  <spinner size="12" v-if="courseStore.loading" />
  <template v-if="courseStore.folders.size && courseStore.pages.size">
    {{ courseStore.getLesson(pageId) }}
    <!-- <div v-if="courseStore.folders.has(pageId)">
      <h1>{{ courseStore.folders[pageId].title }}</h1>
      <p>{{ courseStore.folders[pageId].body }}</p>
    </div>
    <div v-if="courseStore.pages.has(pageId)">
      <h1>{{ courseStore.pages[pageId].title }}</h1>
      <div v-html="courseStore.pages[pageId].body"></div>
    </div> -->
  </template>
  
</template>

<style>
</style>