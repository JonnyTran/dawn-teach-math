<template>
  <div class="fixed z-20">
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="false"
      :showEdition="false"
      :showDeletion="true"
      :deletionConfirmation="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>

<script lang="ts">
import Chat from 'vue3-beautiful-chat'
import { mapState, mapActions } from 'pinia'
import { useTeacherStore } from '@/stores/teacher'
import { useCourseStore } from '@/stores/course'
import { axiosClient } from '../stores/general'

export default {
  name: 'Chatbox',
  components: {
    Chat
  },
  data() {
    return {
      sectionId: null,
      lessonId: null,
      unitTitle: null,
      participants: [
        {
          id: 'me',
          name: 'Dawn',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        },
        {
          id: 'loading',
          name: 'chatgpt'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        { type: 'text', author: `me`, data: { text: `Say yes!` } },
        { type: 'text', author: `loading`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  computed: {
    ...mapState(useTeacherStore, ['school', 'sections']),
  },
  methods: {
    sendMessage(text: string) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'me', type: 'text', data: { text } })
      }
    },
    onMessageWasSent(message: any) {
      // called when the user sends a message
      this.messageList.push(message)
      this.getChatGPTResponse(message)
    },
    async getChatGPTResponse(message: any) {
      // get response from chatgpt given context of site's lesson
      const config = {
        params: {
          author: message.author,
          sectionId: this.sectionId,
          lessonId: this.lessonId,
          school: this.school.title,
          course: (this.sections!=null && this.sections.hasOwnProperty(this.sectionId)) ? this.sections[this.sectionId].description: null,
          ...message.data
        }
      }
      this.messageList.push({ author: 'loading', type: 'text', data: { text: '...' } })
      try {
        if (!message.data.text) {
          return
        }
        const response: string = (await axiosClient.get('/chat/', config)).data

        if (response) {
          this.messageList[this.messageList.length -1] = { author: '', type: 'text', data: { text: response } }
        }
      } catch (e) {
        console.log(e)
        this.messageList.pop()
      }
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log('Emit typing event')
    },
    editMessage(message: any) {
      const m = this.messageList.find((m) => m.id === message.id)
      m.isEdited = true
      m.data.text = message.data.text
    }
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler(params) {
        this.sectionId = params.sectionId
        this.lessonId = params.pageId
      }
    }
  }
}
</script>

<style></style>
