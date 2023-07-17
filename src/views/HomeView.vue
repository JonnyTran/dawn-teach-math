<script setup>
import { ref } from 'vue';
import { Tabs, Tab, Button } from 'flowbite-vue';
import { useTeacherStore } from '@/stores/teacher';

const teacherStore = useTeacherStore();
const activeTab = ref('6051987179')
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Hello, this is Ms. Tran website!
        </h1>
        <p class="max-w-2xl mb-6 font-bold italic text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.
          <br/>
          -Martin Luther King, Jr.
        </p>
        <p></p>
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Go to Courses
        </a> 
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../../src/assets/hero-section-splash.jpg" alt="mockup">
      </div>                
    </div>

  </section>

  <hr class="h-px my-8 border-0">

  <section class="flex justify-center bg-white dark:bg-gray-700 w-full">
    <tabs v-model="activeTab" class="p-5 flex-1"> 
      <tab v-for="(section, id) in teacherStore.sections" :name="id" :title="section.course_title">
        <p class="mb-3 text-gray-500 dark:text-gray-400">{{ section.course_title }}</p>
        <p class="text-gray-500 dark:text-gray-400">{{ section.section_title }}</p>
        <Button size="md">
          <router-link :to="'/courses/' + section.id">Go to Class</router-link>
        </Button>
      </tab>
    </tabs>
  </section>


  <!-- <div>
    <h1 class="font-bold">Welcome to the Teacher Profile Website</h1>
    <h2>Courses</h2>
    <h3>
      <text v-for="course in courses" :key="course.id">
        <router-link :to="'/courses/' + course.id">{{ course.title }}</router-link>
        <p>{{ course.description }}</p>
      </text>
    </h3>
  </div> -->
</template>

<script>
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

export default {
    name: "HomePage",
    data() {
        return {
            courses: [
                { id: 1, title: "Algebra 1" },
                { id: 2, title: "Algebra 2" }
            ],
        };
    },
    components: { Button }
};
</script>

<style>




</style>

