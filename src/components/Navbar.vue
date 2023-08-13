<script setup>
// import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Input, Button, Toggle } from 'flowbite-vue';
// import { Datepicker } from 'flowbite-datepicker';

// import { useTeacherStore } from '@/stores/teacher';
// import { storeToRefs } from 'pinia';
// const { sections } = storeToRefs(useTeacherStore());
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
        <NavbarLink>
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
      <!-- <Input size="lg" placeholder="">
        <template #prefix>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </template>
        <template #suffix>
          <Button size="md">Search</Button>
        </template>
      </Input> -->
    </template>
  </Navbar>
  <!-- Add a second level navbar for Class or Unit here if current route starts with /courses -->
  <Navbar v-if="showCoursesSubmenu">
    <NavbarLogo v-if="showCoursesSubmenu && sectionId && sections[sectionId]" href="#" alt="Course logo" image-url="https://flowbite.com/docs/images/logo.svg" >
      {{ sections[sectionId].course_title }} - {{ sections[sectionId].section_title }}
    </NavbarLogo>  
    <template>
      <div class="relative max-w-sm">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <input datepicker datepicker-buttons id="lessonDatePicker" placeholder="Select date" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
    </template>
    <NavbarCollapse :isShowMenu="isShowMenu">
      <Button size="sm" @click="console.log(sections[sectionId])">
        Test
      </Button>
    </NavbarCollapse> 
  </Navbar>
</template>

<script>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Input, Button, Toggle } from 'flowbite-vue';
import Datepicker from 'flowbite-datepicker/Datepicker';
import { storeToRefs, mapState, mapActions } from 'pinia';
import { useTeacherStore } from '@/stores/teacher';

const datepickerEl = document.getElementById('lessonDatePicker');
new Datepicker(datepickerEl);

export default {
  data() {
    return {
      showCoursesSubmenu: false,
      sectionId: null,
    };
  },
  computed: {
    ...mapState(useTeacherStore, ['sections']),
    currentRoute() {
      return this.$route.path;
    }
  },
  // add a new function to check if current route starts with /courses
  methods: {
    // ...mapActions(useTeacherStore, [''],
    // checkRouteStartsWith(url) {
    //   return (this.currentRoute.startsWith(url) || url === '/') ? 'is-active' : null;
    // }
  },
  watch: {
    $route(to) {
      this.showCoursesSubmenu = /^\/courses\/\d+$/.test(to.path);
      // this.currentRoute = to.path;

      if (this.showCoursesSubmenu) {
        // get current section ID from URL
        this.sectionId = this.currentRoute.split('/')[2];
        // set current section in store
        console.log('NavBar this.sectionId', this.sectionId)
      }
    },
  },
};
</script>

<style>
/* Set text to bold on active */ 
.is-active {
  font-weight: bold;
}
</style>
