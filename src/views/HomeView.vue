<template>
  <div>
    <h1 class="font-bold">Welcome to the Teacher Profile Website</h1>
    <h2>Courses</h2>
    <h3>
      <text v-for="course in courses" :key="course.id">
        <router-link :to="'/courses/' + course.id">{{ course.title }}</router-link>
        <p>{{ course.description }}</p>
      </text>
    </h3>
  </div>
</template>

<script>
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

export default {
  name: 'HomePage',
  data() {
    return {
      courses: [
        { id: 1, title: 'Algebra 1'},
        { id: 2, title: 'Algebra 2'}
      ],
    };
  },
};
</script>

<style>




</style>

