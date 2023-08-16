<script setup>
import { Spinner, Tooltip, Button } from 'flowbite-vue';
import { useRoute } from 'vue-router';
import { useTeacherStore } from '@/stores/teacher';
import { useCourseStore } from '@/stores/course';

const teacherStore = useTeacherStore();

const route = useRoute();
const sectionId = route.params.sectionId;
teacherStore.setCurrentSection(sectionId);

const courseStore = useCourseStore();
courseStore.fetch(sectionId);
</script>

<template>
  <spinner size="12" v-if="teacherStore.loading" />
  <p>
    {{ teacherStore.sections[sectionId] }}
  </p>

  <Button @click="console.log(courseStore.nestedFolders)">test</Button>

  <!-- {{ teacherStore.sections[sectionId] }}

  {{ teacherStore.sections[sectionId] }}

  {{ teacherStore.sections[sectionId] }}
 -->
</template>

<script>
// import { useCourseStore } from '@/stores/course';
// const courseStore = useCourseStore();

// export default {
//   data() {
//     return {
//       leafNode: null,
//     };
//   },
//   methods: {
//     toggle(page) {
//       page.available = !page.available;
//     },
//   },
//   watch: {
//     pages: {
//       deep: true,
//       immediate: true,
//       handler() {
//         this.findLeafNode();
//       }
//     },
//   },
//   methods: {
//     findLeafNode() {
//       for (let page of courseStore.nestedFolders) {
//         if (!page.children) {
//           this.leafNode = page;
//           return;
//         } else {
//           this.findLeafNode(leafNode.children);
//         }
//       }
//       this.leafNode = null;
//     },
//   },
// };
</script>

<style>
/* Add your custom styles here */
</style>
