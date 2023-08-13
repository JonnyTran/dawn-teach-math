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
  <Navbar v-if="showCoursesSubmenu && sectionId">
    <template #logo>
      <NavbarLogo v-if="sections[sectionId]" href="#" alt="Course logo" image-url="https://flowbite.com/docs/images/logo.svg" >
        <Tooltip trigger="hover" placement="bottom" theme="light">
          <template #trigger>
            <button>{{ sections[sectionId].course_title }} - {{ sections[sectionId].section_title }}</button>
          </template>
          <template #content>
            {{ sections[sectionId].description }}
          </template>
        </Tooltip>
      </NavbarLogo>
    </template>
    <template #default="{isShowMenu}">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <div class="relative max-w-sm">
          <!-- <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
          </div> -->
          <!-- <input v-model="selectedDate" ref="datepicker1" id="datepicker1" placeholder="Select date" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
          <vue-tailwind-datepicker as-single v-model="selectedDate" :disable-date="disabledDates" placeholder="Select date" @click:next="onSelectDate($event)" :formatter="dateFormatter" :options="dateOptions"/>
        </div>
        <Button size="sm" @click="console.log(selectedDate)">
          Test
        </Button>
      </NavbarCollapse> 
    </template>
  </Navbar>
</template>

<script>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Input, Button, Toggle, Tooltip } from 'flowbite-vue';
import { ref } from 'vue';
import { storeToRefs, mapState, mapActions } from 'pinia';
import { useTeacherStore } from '@/stores/teacher';

export default {
  data() {
    return {
      showCoursesSubmenu: false,
      sectionId: null,
      selectedDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      dateFormatter: {
        date: 'MMM DD, YYYY',
        month: 'MMM',
        weekday: 'ddd',
      },
      dateOptions: {
        shortcuts: {
          today: 'Today',
          yesterday: 'Yesterday',
          currentMonth: 'This month',
          pastMonth: 'Last month'
        },
        footer: {
          apply: 'Apply',
          cancel: 'Cancel'
        }
      },
      disabledDates: (date) => {
        return date < new Date();
      }
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
    checkRouteStartsWith(url) {
      return (this.currentRoute.startsWith(url) || url === '/') ? 'is-active' : null;
    },
    onSelectDate(newDate) {
      console.log(newDate) // newDate instanceof dayjs
    },
  },
  watch: {
    $route(to) {
      this.showCoursesSubmenu = /^\/courses\/\d+$/.test(to.path);
      // this.currentRoute = to.path;

      if (this.showCoursesSubmenu) {
        this.sectionId = this.currentRoute.split('/')[2];
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
