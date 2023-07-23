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
          <input name="sendcopy" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
        </div>
        <label for="sendcopy" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send me a copy of my response</label>
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
            });
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
