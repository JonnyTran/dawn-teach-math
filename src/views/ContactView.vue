<template>
  <div>
    <contact>
    <h1>Contact</h1>
    </contact>
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="15362813-1203-485a-b258-4227d01d0bd6">
      <input type="hidden" name="subject" value="New Submission from Tran Teach Math">
      <input type="hidden" name="from_name" value="Tran Teach Math">
      <input type="hidden" name="redirect" value="https://web3forms.com/success">
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
      <name>
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="form.name" required>
      </name>
      <email>
      <label for="email">Email:</label>
      <input type="email" name="email" v-model="form.email" required>
      <span v-if="emailError">{{ emailError }}</span>
      </email>
      <subject>
      <label for="subject">Subject:</label>
      <select name="subject " v-model="selectedSubject" class="bg-gray-50 border border-gray-300 text-gray-900 text-md lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        <option value="" disabled selected>Choose a subject</option>
        <option value="Grades">Grades</option>
        <option value="Assignments">Assignments</option>
        <option value="Retest">Retest/Missed test or quiz</option>
        <option value="Tutoring">Tutoring</option>
        <option value="Attendance">Attendance</option>
        <option value="Parent contact">Parent contact</option>
        <option value="Other">Other</option>
      </select>
      </subject>
      <message>
      <label for="message">Message:</label>
      <textarea name="message" v-model="form.message" class="input-style" :placeholder="getPlaceholder()" required></textarea>
      </message>
      <button type="submit">Submit</button>
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
contact {
  position: absolute;
  top: 15.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-weight: 450;
  color: #02150aa7;
}

form {
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:600px;
  width: 450px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 10px;
  border-bottom: 6px solid #02150aa7;
  border-right: 4px solid #02150aa7;
}

form label {
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

form name, textarea {
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 90px;
  width: 90%;
  margin-bottom: 8px;
}

form email, textarea {
  display: flex;
  align-self: center;  align-self: center;
  flex-direction: column;
  height: 90px;
  width: 90%;
  margin-bottom: 8px;
}

form subject, textarea {
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 90px;
  width: 90%;
  margin-bottom: 8px;
}

form message, textarea {
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 200px;
  width: 95%;
  border-radius: 6px;
  margin-bottom: 8px;
}

.input-style::placeholder {
  font-style: italic;
  line-height: 1.6;
}

form button {
  align-self: center;
  width: 50%;
  height: 50px;
  border: 2.5px solid rgba(37, 89, 211, 0.738);
  border-radius: 8px;
  color: rgb(37, 89, 211);
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
}

form button:hover {
  background: rgb(37, 89, 211);
  color: #ffffff;
  border: 2px solid #ffffff;
  font-size: 1.12rem;
}

form button:focus {
  outline: none;
}

form button:active {
  transform: scale(0.98);
}

</style>
