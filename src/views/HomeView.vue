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
/* Position tje heading & courses */
h1 {
  position: fixed;
  top: 80px;
  left: 30px;
  width: 100%;
  font-weight: 100;
  background-color: #ffffff28;
  color: #000000;
}

h2 {
  position: fixed;
  top: 145px;
  left: 30px;
  width: 100%;
  margin: 0;
  font-weight: 100;
  background-color: #ffffff28;
  color: #000000;
}

/* Position the list of courses */
h3 {
  position: fixed;
  display: flex;
  gap: 30px;
  top: 150px;
  left: 145px;
  font-size: 18px;
  background-color: #ffffff28;
  color: #000000;
}

</style>

