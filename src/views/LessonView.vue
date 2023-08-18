<script setup>
import { Spinner, Tooltip, Button } from 'flowbite-vue';
import { useRoute } from 'vue-router';
import { useCourseStore } from '@/stores/course';

const route = useRoute();
const sectionId = route.params.sectionId;
const folderId = route.params.folderId;

const courseStore = useCourseStore();
if (courseStore.id != sectionId) {
  courseStore.fetch(sectionId);
}

const lesson = courseStore.getLesson(folderId);
console.log(lesson)

</script>

<template>
  <spinner size="12" v-if="courseStore.loading" />
  <template v-if="courseStore.folders.size && courseStore.pages.size">
    <div v-if="courseStore.folders.has(folderId)">
      <h1>{{ courseStore.getFolder(folderId).title }}</h1>
      <p>{{ courseStore.getFolder(folderId).children }}</p>
    </div>
    <div v-if="courseStore.pages.has(folderId)">
      <h1>{{ courseStore.getPage(folderId).title }}</h1>
      <div v-html="courseStore.getPage(folderId).body"></div>
    </div>
  </template>
  
</template>

<style>
</style>