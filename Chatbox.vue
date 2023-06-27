<template>
  <div>
    <button @click="toggleChatbox" v-show="!showChatbox">Chat</button>
    <div v-show="showChatbox">
      <div class="chatbox-header">
        <h2>Chat</h2>
        <button @click="toggleChatbox">Close</button>
      </div>
      <div class="chatbox-body">
        <!-- Chat messages go here -->
      </div>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="message" required>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatbox',
  data() {
    return {
      showChatbox: false,
      message: '',
    };
  },
  methods: {
    toggleChatbox() {
      this.showChatbox = !this.showChatbox;
    },
    sendMessage() {
      // Handle sending message logic here
      console.log(this.message);
      this.message = '';
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
