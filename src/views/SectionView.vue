<script setup>
import { Spinner, Tooltip, Button } from 'flowbite-vue';
import { useRoute } from 'vue-router';
import { useTeacherStore } from '@/stores/teacher';
import { useCourseStore } from '@/stores/course';

const route = useRoute();
const sectionId = route.params.sectionId;

const teacherStore = useTeacherStore();
teacherStore.setCurrentSection(sectionId);

const courseStore = useCourseStore();
if (courseStore.id != sectionId) {
  courseStore.fetch(sectionId);
}
</script>

<template>
  <spinner size="12" v-if="teacherStore.loading" />
  <p>
    {{ teacherStore.sections[sectionId] }}
  </p>
</template>

<script>
</script> 

<style>
/* Add your custom styles here */
</style>
