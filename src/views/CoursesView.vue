<script setup>
import { TheCard, Accordion, AccordionHeader, AccordionPanel, AccordionContent } from 'flowbite-vue';
import { useTeacherStore } from '@/stores/teacher';
const teacherStore = useTeacherStore();
if (!teacherStore.school) {
  teacherStore.fetch();
}
</script>

<template>
  <section class="grid gap-1 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3 ">
    <div v-for="(section, id) in teacherStore.sections" :name="id">
      <div class="items-center sm:flex" style="display: flex; flex-direction: row; justify-content: center; margin-top:30px;">
        <router-link :to="'/courses/' + id" class="card" style="text-decoration: none;">
        <the-card variant="image" :img-src="section.profile_url" img-alt="desk" class="w-full rounded-lg">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ section.course_title }} - {{ section.section_title }} 
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ section.description }}
          </p>
        </the-card>
        </router-link>
      </div>
    </div>
  </section>

  <section>
    <h1 style="display: center; font-size: 2rem; margin:20px">
      General FAQ
    </h1>
    <Accordion>
      <accordion-panel>
        <accordion-header>What are Ms. Tran's tutoring hours?</accordion-header>
        <accordion-content>
          <div>
            <p>
              <li>After school Monday/Wednesday 4:20-5:00 PM</li>
              <li>Morning by teacher availability</li>
              <li>Flex self-schedule on Edficiency</li></p>
              <br>Note that the above hours are subject to change. 
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
              Click on each assignment for instructions, due dates, and submitting work. 
              Students will not turn in any paper copies unless given notice otherwise. 
              Name and work must be clearly shown to be able to receive full credit.</p>
              <p><br>Check Schoology or contact Ms. Tran for instructions on specific assignments.</p>
          </div>
        </accordion-content>
      </accordion-panel>

      <accordion-panel>
        <accordion-header>What is the late work policy?</accordion-header>
        <accordion-content>
          <div>
            <p>Late work only applies to homework assigned when a student is present in class. If a student is absent the day homework is assigned, please see the missed assignments policy below. <br> 
            <br>Students are responsible for making up missed assignments. 
            Late work may be graded up to a 70 and can be submitted until the 9-week grading period is over. 
            Late work cannot be made up after the grading period is over unless a student's average is below passing.</p>
            <p><br>It is possible to receive full credit for late work if a student has an excused absent between the assigned date and the due date. Please submit the assignment within 5 days of the absence and email Ms. Tran for a grade update.</p>
            <p><br>In extenuating circumstances that severely prevents a student from completing class work, please have a parent or guardian contact Ms. Tran.</p>
          </div>
        </accordion-content>
      </accordion-panel>

      <accordion-panel>
        <accordion-header>How do I make up a missed assignment, test, or quiz?</accordion-header>
        <accordion-content>
          <div>
            <p>Students are responsible for making up any missed assignments, tests, and quizzes within 5 days of the last absence. Contact Ms. Tran a day in advance to set up a time:</p>
              <br><li>After school Tuesday-Friday 4:30-5:45 PM</li>
              <li>Morning by teacher availability</li>
              <li>Flex self-schedule on Edficiency</li>
              <p><br>Note that the above hours are subject to change and that a retest may not be guaranteed without prior notice. Contact Ms. Tran for any scheduling inquiries.</p>
          </div>
        </accordion-content>
      </accordion-panel>

      <accordion-panel>
        <accordion-header>What is the retest policy?</accordion-header>
        <accordion-content>
          <div>
            <p>Students are responsible for making up any tests below passing for up to a 70 within the grading period. Contact Ms. Tran a day in advance to set up a retest:</p>
              <br><li>After school Tuesday-Friday 4:30-5:45 PM</li>
              <li>Morning by teacher availability</li>
              <li>Flex self-schedule on Edficiency</li>
            <p><br>Note that the above hours are subject to change and that a retest may not be guaranteed without prior notice. Contact Ms. Tran for any scheduling inquiries.</p>
          </div>
        </accordion-content>
      </accordion-panel>

      <accordion-panel>
        <accordion-header>Is there a curve?</accordion-header>
        <accordion-content>
          <div>
          <p>To keep the grading consistent with other courses, there will not be a curve on any assignments, tests, or quizzes.</p>
          </div>
        </accordion-content>
      </accordion-panel>

      <accordion-panel>
        <accordion-header>Is there extra credit?</accordion-header>
        <accordion-content>
          <div>
          <p>Yes! Please check the course calendar or wait in class for announcements on extra credit opportunities.</p>
          </div>
        </accordion-content>
      </accordion-panel>

      <accordion-panel>
        <accordion-header>What is the academic dishonesty policy?</accordion-header>
        <accordion-content>
          <div>
          <p>Please refer to the Westwood Student Handbook for policies over academic dishonesty.</p>
          <p><br>Cheating, plagiarizing, and copying any unoriginal work will result in disciplinary actions such as receiving a zero, losing make up opportunities, parent contact, and in serious or repeated cases, a referral with administrative involvement.</p>
          </div>
        </accordion-content>
      </accordion-panel>
    </Accordion>
  </section>
</template>

<script>
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
      faqs: [

      ]
    };
  },
};
</script>

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

section, .accordion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}


</style>
