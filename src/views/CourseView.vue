<script setup>
import { useTeacherStore } from '@/stores/teacher'
const teacherStore = useTeacherStore();
</script>

<template>
  <div>
    <!-- <h1>{{ teacherStore.school.title }}</h1> -->
    <!-- <p>{{ teacherStore.school.id }}</p> -->

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

    <h2>Quick Links</h2>
    <ul>
      <li v-for="link in course.links" :key="link.id">
        <a :href="link.url" target="_blank">{{ link.title }}</a>
      </li>
    </ul>
    <br>
    <faqhead><h1>FAQ</h1></faqhead>
    <faq>
    <Accordion>
    <accordion-panel>
      <accordion-header>What are your tutoring hours?</accordion-header>
      <accordion-content>
        <div>
          <p>
            <li>After school Monday/Wednesday 4:20-5:00 PM</li>
            <li>Morning by teacher availability</li>
            <li>Flex self-schedule on Edficiency</li></p>
            Note that the above hours are subject to change. 
            Contact Ms. Tran for any scheduling inquiries.
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>How do I turn in assignments?</accordion-header>
      <accordion-content>
        <div>
          <p>All assignments will be posted and submitted on Schoology. 
            Students should see a list of assignments listed on the right side of the course page. 
            Click on each assignment for instructions, due dates, and turning in work. 
            <br>Students will not turn in any paper copies unless given notice otherwise. 
            Name and work must be clearly shown to be able to receive full credit. 
            Check Schoology or contact Ms. Tran for instructions on specific assignments.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>What is the late-work policy?</accordion-header>
      <accordion-content>
        <div>
          <p>Students are responsible for checking Schoology, making up missed assignments, and communicating with Ms. Tran about grade updates (see contact page). 
          Late work may be graded up to a 70 and can be submitted until the 9-week grading period is over.
          Late work may be eligible for full credit only if the student has been absent and has discussed with the teacher about making up missed assignments.</p>
          <br>In extenuating circumstances, please have a parent or guardian contact Ms. Tran.
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>How do I make up a missed test or quiz?</accordion-header>
      <accordion-content>
        <div>
          <p>Students are responsible for being up-to-date on upcoming quizzes and tests dates. 
          If a student is absent on the day of a quiz or test, they must contact Ms. Tran to schedule a make-up time and complete 
          Late work may be eligible for full credit only if the student has been absent and has discussed with the teacher about making up missed assignments.</p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>What is the retest policy?</accordion-header>
      <accordion-content>
        <div>
          <p>
            Students are responsible for making up any tests up to a 70 within the grading period. Contact Ms. Tran a day in advance to set up a retest:
            <li>After school Monday/Wednesday 4:20-5:45 PM</li>
            <li>Morning by teacher availability</li>
            <li>Flex self-schedule on Edficiency</li>
            Note that the above hours are subject to change and that a retest may not be guaranteed without prior notice. Contact Ms. Tran for any scheduling inquiries.</p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
  </faq>
  </div>
</template>

<script>
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue'
export default {
  name: 'CoursePage',
  data() {
    return {
      course: {
        id: 1,
        title: 'Algebra 1',
        info: 'This course covers various mathematical topics.',
        syllabus: '...',
        units: [
          { id: 1, title: '1-Step Equations' },
          { id: 2, title: '2-Step Equations' },
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

</style>
