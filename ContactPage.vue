<template>
  <div>
    <h1>Contact</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required>
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log(this.form);
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
