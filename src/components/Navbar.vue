<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Input, Button, Toggle } from 'flowbite-vue'
</script>

<template>
  <Navbar solid>
    <template #logo>
      <NavbarLogo href="#" alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
        Tran Teach Math
      </NavbarLogo>  
    </template>
    <template #default="{isShowMenu}">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <!-- Set isActive to NavbarLink when in the currentRoute -->
        <NavbarLink :isActive="true">
          <router-link to="/">Home</router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="/courses">Courses</router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="/bio">Bio</router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="/contact">Contact</router-link>
        </NavbarLink>
      </NavbarCollapse>

      <Input size="lg" placeholder="">
        <template #prefix>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </template>
        <template #suffix>
          <Button size="md">Search</Button>
        </template>
      </Input>
    </template>
  </Navbar>
  <!-- Add a second level navbar for Class or Unit here -->

</template>


<script>
import { mapState, mapActions } from 'pinia';
// import { useGeneralStore } from '@/stores/general';

export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};

</script>

<style>

/* Style the NavBar */ 
.is-active {
  
}

/* nav {
  position: absolute;
  top: -5px;
  left: 15px;
  background-color: #a9c2b52f;
  border-radius: 15px;
}

nav ul {
  font-size: medium;
  list-style-type: none;
} */

/* Style the search box */
/* .search-box {
  position: absolute;
  top: 10px;
  right: 50px;
  height: 35px;
  width: 280px;
  background: #ffffff;
  border-radius: 8px;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  top: 15px;
  left: 5px;
  font-size: 14px;
  padding: 10px;
  color: #02150aa7;
} */
</style>
