<template>
  <div>
    <h1>{{ course.title }}</h1>
    <h2>Course Info</h2>
    <p>{{ course.info }}</p>
    <h2>Syllabus</h2>
    <p>{{ course.syllabus }}</p>
    <h2>Units</h2>
    <ul>
      <li v-for="unit in course.units" :key="unit.id">
        <router-link :to="'/courses/' + course.id + '/units/' + unit.id">{{ unit.title }}</router-link>
      </li>
    </ul>
    <h2>Links</h2>
    <ul>
      <li v-for="link in course.links" :key="link.id">
        <a :href="link.url" target="_blank">{{ link.title }}</a>
      </li>
    </ul>
    <h2>FAQ</h2>
    <ul>
      <li v-for="faq in course.faq" :key="faq.id">
        <p><strong>{{ faq.question }}</strong></p>
        <p>{{ faq.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CoursePage',
  data() {
    return {
      course: {
        id: 1,
        title: 'Mathematics',
        info: 'This course covers various mathematical topics.',
        syllabus: '...',
        units: [
          { id: 1, title: 'Algebra' },
          { id: 2, title: 'Geometry' },
          // Add more units here
        ],
        links: [
          { id: 1, title: 'Math Resources', url: 'https://example.com/math-resources' },
          { id: 2, title: 'Online Calculator', url: 'https://example.com/calculator' },
          // Add more links here
        ],
        faq: [
          { id: 1, question: 'What is the grading policy?', answer: '...' },
          { id: 2, question: 'How can I contact the teacher?', answer: '...' },
          // Add more FAQs here
        ],
      },
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
