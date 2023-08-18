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
  <!-- Add a second level navbar for Class here if current route starts with /courses -->
  <nav 
  v-if="showCoursesSubmenu && sectionId && sections && sectionId in sections" class="bg-gray-50 dark:bg-gray-700 w-full sticky top-0">
    <div class="flex items-center justify-between max-w-screen-xl px-4 py-2 mx-auto">
      <div class="flex flex-row md:order-0">
        <Breadcrumb>
          <BreadcrumbItem home :href="'/courses/' + sectionId">
            {{ sections[sectionId].course_title }} - {{ sections[sectionId].section_title }}
          </BreadcrumbItem>
          <BreadcrumbItem :href="'/courses/' + sectionId">
            Home
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div class="flex flex-row items-center md:order-1 md:w-auto ">

        <div class="px-4">
          <vue-tailwind-datepicker as-single v-model="selectedDate" :disable-date="disabledDates" placeholder="Select date" @update:model-value="onSelectDate($event)" :formatter="dateFormatter" :options="dateOptions"/>
        </div>

        <div class="fill-current">
          <dropdown text="Quick Links">
            <list-group>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                </template>
                Unit Review
              </list-group-item>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                </template>
                Calendar
              </list-group-item>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                </template>
                Syllabus
              </list-group-item>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                </template>
                Grading Policy
              </list-group-item>
            </list-group>
          </dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Dropdown, ListGroup, ListGroupItem, Tooltip, Breadcrumb, BreadcrumbItem } from 'flowbite-vue';
import { mapState, mapActions } from 'pinia';
import { useTeacherStore } from '@/stores/teacher';
import { useCourseStore } from '@/stores/course';

export default {
  name: 'Navbar',
  data() {
    return {
      showCoursesSubmenu: false,
      sectionId: null,
      selectedDate: new Date().toLocaleDateString('en-US', {
        // year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      dateFormatter: {
        date: 'MMM DD',
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
        return false
        // return date < new Date();
      }
    };
  },
  computed: {
    ...mapState(useTeacherStore, ['sections']),
    ...mapState(useCourseStore, ['getLessonFromDate']),
    currentRoute() {
      return this.$route.path;
    }
  },
  // add a new function to check if current route starts with /courses
  methods: {
    // ...mapActions(useCourseStore, ['fetch']),
    checkRouteStartsWith(url) {
      return (this.currentRoute.startsWith(url) || url === '/') ? 'is-active' : null;
    },
    onSelectDate(dateStr) {
      const newDate = new Date(dateStr);
      const lesson = this.getLessonFromDate(newDate);
      if (lesson) {
        this.$router.push(`/courses/${this.sectionId}/lesson/${lesson.id}`);
      }
    },
  },
  created() {
    this.emitter.on('update-selected-date', (evt) => {
      this.selectedDate = new Date(evt.dateStr).toLocaleDateString('en-US', {
        // year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    });

    this.emitter.on('update-disabled-date', (evt) => {
      this.disabledDates = (date) => {
        return date < new Date();
      }
    });
  },
  watch: {
    $route(to) {
      this.showCoursesSubmenu = /^\/courses\/\d+.*$/.test(to.path);

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
