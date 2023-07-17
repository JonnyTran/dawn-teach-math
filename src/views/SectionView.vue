<script setup>
// Get the course ID from the URL
import { useRoute } from 'vue-router';
import { useTeacherStore } from '@/stores/teacher';

const teacherStore = useTeacherStore();

const route = useRoute();
const sectionId = route.params.sectionId;

console.log('sectionId: ', sectionId);
// console.log(devServer);

</script>

<template>
  <p>
    {{ teacherStore.sections[sectionId] }}
  </p>
</template>

<style>
/* Add your custom styles here */
</style>
