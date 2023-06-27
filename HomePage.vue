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
        { id: 1, title: 'Mathematics', description: 'Learn math concepts and problem-solving techniques.' },
        { id: 2, title: 'Physics', description: 'Explore the fundamental principles of physics.' },
        // Add more courses here
      ],
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
