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

</script>

<template>
  <spinner size="12" v-if="courseStore.loading" />
  <template v-if="courseStore.folders.length">
    <!-- {{ courseStore.folders }} -->
    <div v-if="courseStore.folders.has(pageId)">
      {{ courseStore.folders[pageId] }}
      <!-- <h1>{{ courseStore.folders[pageId].title }}</h1>
      <p>{{ courseStore.folders[pageId].body }}</p> -->
    </div>
    <div v-else-if="courseStore.pages.has(pageId)">
      <h1>{{ courseStore.pages[pageId].title }}</h1>
      <div v-html="courseStore.pages[pageId].body"></div>
    </div>
  </template>
  
</template>

<style>
</style>