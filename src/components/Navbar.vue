
<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/bio">Bio</router-link>
      <router-link to="/contact">Contact</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
/* Use top-level NavBar style */

</style>