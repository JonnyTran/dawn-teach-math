<script setup lang="ts">
import { TheCard, Accordion, AccordionHeader, AccordionPanel, AccordionContent } from 'flowbite-vue';
import { useTeacherStore } from '@/stores/teacher';
import { ref, inject, onMounted } from 'vue';
import Markdown from '@/components/Markdown.vue';
import yaml from 'js-yaml';

const teacherStore = useTeacherStore()
if (!teacherStore.school) {
  teacherStore.fetch()
}

const emitter = inject('emitter')
emitter.emit('update-unit-title', {
  unitTitle: null
})

let faqData = ref(null);

const componentId = ref('');
onMounted(() => {
  // Generate a unique ID for the component
  componentId.value = `component-${Math.floor(Math.random() * 1000000)}`;
  fetch('/data/content.yaml')
    .then(response => response.text())
    .then(yamlData => {
      faqData.value = yaml.load(yamlData).faq;
    });
});
</script>

<template>
  <section>
    <h3
      class="mt-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
    >
      Courses
    </h3>
    <spinner size="12" v-if="teacherStore.loading" />
    <div class="grid gap-1 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(section, id) in teacherStore.sections" :key="id">
        <div
          class="items-center"
          style="display: flex; flex-direction: row; justify-content: center; margin-top: 30px"
        >
          <router-link :to="'/courses/' + id" class="card" style="text-decoration: none">
            <the-card
              variant="image"
              :img-src="section.profile_url"
              img-alt="desk"
              class="col-span-1 overflow-hidden rounded-lg rounded-b-lg flex justify-center"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span>{{ section.course_title }}</span> - <span>{{ section.section_title }}</span>
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {{ section.description }}
              </p>
            </the-card>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h3 
      class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
      id="componentId"
    >
      General FAQ
    </h3>
    <Accordion class="w-full px-10 md:px-10 lg:px-20 mb-4 rounded-b-lg" v-if="faqData">
      <accordion-panel v-for="(item, index) in faqData" :key="index">
        <accordion-header>
          <div class="text-lg font-bold">
            {{ item.question }}
          </div>
        </accordion-header>
        <accordion-content>
          <Markdown :source="item.answer" />
        </accordion-content>
      </accordion-panel>
    </Accordion>
  </section>
</template>

<style>
.card {
  position: center;
  background-position-y: center;
  display: flex;
  margin: 1rem;
  min-width: 300px;
}

.card:hover {
  transform: scale(1.06);
  transition: transform 0.4s;
  shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card:not(:hover) {
  transform: scale(1);
  transition: transform 0.1s;
  box-shadow: none;
}

section,
.accordion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
</style>
