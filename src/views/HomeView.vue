<script setup>
// import { useTeacherStore } from '@/stores/teacher'
// const { sections } = storeToRefs(useTeacherStore());
// const activeTab = ref('6051987179')
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          Ms. Tran's Algebra Course Website
        </h1>
        <p
          class="max-w-2xl mb-6 font-bold italic text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          <br />"Trust the wait. Embrace the uncertainty. Enjoy the beauty of becoming. When nothing
          is certain, anything is possible."
          <span class="grid justify-items-end font-bold">&mdash;M. Hale</span>
        </p>
        <p></p>
        <a
          href="/courses"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Go to Courses
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img style="border-radius: 10px" src="/src/assets/hero-section-pic.jpg" alt="mockup" />
      </div>
    </div>
  </section>

  <hr class="h-px my-8 border-0" />
</template>

<style></style>
