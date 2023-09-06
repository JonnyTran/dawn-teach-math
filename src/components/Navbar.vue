<template>
  <Navbar solid>
    <template #logo>
      <!-- files in the public directory are served at the root path. Instead of /public/logo.svg, use /logo.svg. -->
      <NavbarLogo href="/" alt="logo" image-url="/logo.svg">
        <span class="text-xl font-bold">Doan K. Tran</span>
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
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
    </template>
  </Navbar>
  <!-- Add a second level navbar for Class here if current route starts with /courses -->
  <Navbar
    v-if="showCoursesSubmenu && sectionId && sections && sectionId in sections"
    class="bg-gray-50 dark:bg-gray-700 w-full sticky top-0 z-10"
  >
    <template #logo>
      <Breadcrumb>
        <BreadcrumbItem home href="'/courses/' + sectionId">
          <span class="text-lg font-medium">
            {{ sections[sectionId].course_title }} - {{ sections[sectionId].section_title }}
          </span>
        </BreadcrumbItem>
        <BreadcrumbItem v-if="unitTitle">
          <span class="text-lg font-medium">
            {{ unitTitle }}
          </span>
        </BreadcrumbItem>
        <!-- <BreadcrumbItem>
          {{ sections[sectionId].section_title }}
        </BreadcrumbItem> -->
      </Breadcrumb>
    </template>

    <div class="flex flex-row items-center md:order-1 md:w-auto">
      <div class="px-4">
        <vue-tailwind-datepicker
          as-single
          v-model="selectedDate"
          :disable-date="disabledDates"
          placeholder="Select date"
          @update:model-value="onSelectDate($event)"
          :formatter="dateFormatter"
          :options="dateOptions"
          style="text-lg font-medium"
        />
      </div>

      <div>
        <dropdown text="Quick Links">
          <template #trigger>
            <button class="hover:text-blue-600 dark:hover:text-white">Quick Links</button>
          </template>
          <list-group>
            <list-group-item>
              <template #prefix>
                <svg
                  class="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </template>
              Unit Review
            </list-group-item>
            <list-group-item>
              <template #prefix>
                <svg
                  class="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                  ></path>
                </svg>
              </template>
              Calendar
            </list-group-item>
            <list-group-item>
              <template #prefix>
                <svg
                  class="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </template>
              Syllabus
            </list-group-item>
            <list-group-item>
              <template #prefix>
                <svg
                  class="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </template>
              Grading Policy
            </list-group-item>
          </list-group>
        </dropdown>
      </div>
    </div>
  </Navbar>
</template>

<script lang="ts">
import {
  Navbar,
  NavbarLogo,
  NavbarCollapse,
  NavbarLink,
  Dropdown,
  ListGroup,
  ListGroupItem,
  Breadcrumb,
  BreadcrumbItem
} from 'flowbite-vue'
import { mapState, mapActions } from 'pinia'
import { useTeacherStore } from '@/stores/teacher'
import { useCourseStore } from '@/stores/course'
import { inject } from 'vue'

export default {
  components: {
    Navbar,
    NavbarLogo,
    NavbarCollapse,
    NavbarLink,
    Dropdown,
    ListGroup,
    ListGroupItem,
    Breadcrumb,
    BreadcrumbItem
  },
  data() {
    return {
      sectionId: null,
      lessonId: null,
      unitTitle: null,
      selectedDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      disabledDates: (date: Date) => {
        return false
        // return date < new Date();
      },
      dateFormatter: {
        date: 'MMM DD, YYYY',
        month: 'MMM',
        weekday: 'ddd'
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
      }
    }
  },
  computed: {
    ...mapState(useTeacherStore, ['sections']),
    ...mapState(useCourseStore, ['getLessonFromDate']),
    showCoursesSubmenu() {
      return this.sectionId != null
    }
  },
  // add a new function to check if current route starts with /courses
  methods: {
    ...mapActions(useCourseStore, ['loadLesson']),
    onSelectDate(dateStr: string) {
      const newDate = new Date(dateStr)

      if (this.selectedDate == newDate) {
        return
      }
      const lesson = this.getLessonFromDate(newDate)
      if (lesson != null && this.sectionId && lesson.hasOwnProperty('id') && lesson.id) {
        this.$router.push(`/courses/${this.sectionId}/lesson/${lesson.id}`)
        this.loadLesson(lesson.id, this.sectionId)
      }
    }
  },
  created() {
    const emitter: any = inject('emitter')

    emitter.on('update-selected-date', (evt: any) => {
      if (this.selectedDate >= evt.start_date && this.selectedDate <= evt.end_date) {
        return
      }

      this.selectedDate = evt.start_date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    })

    emitter.on('update-disabled-dates', (evt: any) => {
      this.disabledDates = (date: Date) => {
        return date < new Date()
      }
    })

    emitter.on('update-unit-title', (evt: any) => {
      this.unitTitle = evt.unitTitle
    })
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler(params) {
        this.sectionId = params.sectionId
        this.lessonId = params.lessonId
      }
    }
  }
}
</script>

<style>
/* Set text to bold on active */
.is-active {
  font-weight: bold;
}
</style>
