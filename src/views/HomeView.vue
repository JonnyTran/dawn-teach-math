<template>
  <div>
    <h1>Welcome to the Teacher Profile Website</h1>
    <h2>Courses</h2>
    <ul>
      <li v-for="course in courses" :key="course.id">
        <router-link :to="'/courses/' + course.id">{{ course.title }}</router-link>
        <p>{{ course.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      courses: [
        { id: 1, title: 'Algebra 1', description: '(Sections TBD)' },
        { id: 2, title: 'Algebra 2', description: '(Sections TBD)' },
        // Add more courses here
      ],
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
