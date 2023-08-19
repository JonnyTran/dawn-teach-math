<template>
  <div>
    <p>
      <a :href="slidePresentLink" target="_blank">
        <svg viewBox="0 0 24 24" focusable="false" class="fullscreen">
          <path d="m0 0h24v24h0z" fill="none"></path>
          <path d="m19 19h5v5h7v3h5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zm14 3v2h3.59l-9.83 9.83 1.41 1.41l19 6.41v10h2v3h-7z"></path>
        </svg>
      </a>
      <div class="responsive">
        <iframe frameborder="0" :aria-label="label" :src="slideEmbedLink"></iframe>
      </div>
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const GSlides = defineComponent({
  name: 'GSlides',
  props: {
    label: {
      type: String,
      required: true
    },
    gslide_id: {
      type: String,
      required: true
    }
  },
  computed: {
    slidePresentLink() {
      return `https://docs.google.com/presentation/d/${this.gslide_id}/present`;
    },
    slideEmbedLink() {
      return `https://docs.google.com/presentation/d/${this.gslide_id}/embed`;
    }
  },
});
export default GSlides;
</script>
  
<style scoped>
.fullscreen {
  position: absolute;
  z-index: 10;
  fill: white;
  height: 5%;
  right: 35px;
  opacity: 40%;
}

.responsive {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;
}

.responsive iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>