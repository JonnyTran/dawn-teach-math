
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
/* Position the NavBar on the top left */ 
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
}
</style>