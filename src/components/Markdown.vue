<template>
    <div v-html="markdown.render(source)" class="prose max-w-none whitespace-pre-wrap" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
// import MarkdownItSub from "markdown-it-sub";
// import MarkdownItSup from "markdown-it-sup";
// import MarkdownItTasklists from "markdown-it-task-lists";

const markdown = new MarkdownIt()
    // .use(MarkdownItSub)
    // .use(MarkdownItSup)
    // .use(MarkdownItTasklists)

defineProps({
    source: {
        type: String,
        default: ""
    }
});
</script>

<style>
.prose {
  /* font-size: 1.25rem;
  line-height: 1.75rem;
  color: #333; */
}

.prose ul {
  @apply list-disc;
  margin-left: 1.5rem;
}

.prose li {
  @apply list-inside;
}
</style>