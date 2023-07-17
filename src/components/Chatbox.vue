<template>
  <!-- Create a Chatbox that opens with a button on the NavBar. The Chatbox is a conversational AI that connects to OpenAI API and 
    injects the course content to the query -->
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
      showChatbox: true,
      message: "Hi, I'm David S. Pumpkins. Any questions?",
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

</style>
