<template>
  <div style="margin-block-start:5%" class="mx-auto p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
    <h1 class="text-xl font-medium text-gray-900 dark:text-white">Contact</h1>
    <form class="space-y-6" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="15362813-1203-485a-b258-4227d01d0bd6">
      <input type="hidden" name="subject" value="New Submission from Tran Teach Math">
      <input type="hidden" name="from_name" value="Tran Teach Math">
      <input type="hidden" name="redirect" value="https://web3forms.com/success">
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
      
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="name">Name:</label>
        <input type="text" name="name" v-model="form.name" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Email:</label>
        <input type="email" name="email" v-model="form.email" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
      <span v-if="emailError">{{ emailError }}</span>
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="subject">Subject:</label>
        <select name="subject " v-model="selectedSubject" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
          <option value="" disabled selected>Choose a subject</option>
          <option value="Grades">Grades</option>
          <option value="Assignments">Assignments</option>
          <option value="Retest">Retest/Missed test or quiz</option>
          <option value="Tutoring">Tutoring</option>
          <option value="Attendance">Attendance</option>
          <option value="Parent contact">Parent contact</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div> 
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message:</label>
        <textarea name="message" v-model="form.message" :placeholder="getPlaceholder()" rows="5" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></textarea>
      </div>

      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input name="sendcopy" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 hover:point focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
        </div>
        <label for="sendcopy" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send me a copy of my response</label>
        <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button">
          <svg class="ml-20 mt-0.5 w-4 h-4 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Show information</span>
        </button>
          <div data-popover id="popover-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
            <div class="p-3 space-y-2">
              <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <a href="#" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg class="w-2 h-2 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg></a>
            </div>
            <div data-popper-arrow></div>
          </div>
      </div> 

      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    
    </form>
  </div>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "15362813-1203-485a-b258-4227d01d0bd6";

export default {
    name: "ContactPage",
    data() {
        return {
            selectedSubject: "",
            form: {
                name: "",
                email: "",
                message: "",
            },
            emailError: "",
        };
    },
    methods: {
        getPlaceholder() {
            switch (this.selectedSubject) {
                case "Grades":
                    return "e.g., How can I make up this grade...\nPlease update this grade...\nWhen will grades be posted for...\n";
                case "Assignments":
                    return "e.g., Did you receive my work for...\nI need to make up this assignment...\nI won't be able to turn in this assignment... ";
                case "Retest":
                    return "Testing Hours:\n- After school Tues-Thu 4:30-5:45 PM\n- Morning by teacher availability\n- Flex self-schedule on Edficiency\ne.g., Can I make up...on this day...";
                case "Tutoring":
                    return "Tutoring Hours:\n- After school Mon/Wed 4:20-5:45 PM\n- Morning by teacher availability\n- Flex self-schedule on Edficiency\ne.g., Can I get help with...on this day...";
                case "Attendance":
                    return "e.g., I will be absent during...\nPlease fix my attendance for...\nWhat will I miss on this day...";
                case "Parent contact":
                    return "e.g., Hello, I am the parent of...\nI would like to schedule a call or meeting...\nPlease contact me at...";
                case "Other":
                    return "Enter your message...";
                default:
                    return "Enter your message...";
            }
        },

        async submitForm() {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                }),
            }
            );
            const result = await response.json();
            if (result.success) {
                console.log(result);
            }
        },
    },
}
</script>


<style>

</style>
