<template>
  <div>
    
    <p>
      <h3>
        {{ label }}
      </h3>
      <!-- <a :href="slideViewLink" target="_blank">
        <img
          src="https://www.gstatic.com/images/icons/material/product/2x/slides_48dp.png"
          alt="Google Slides"
          class="h-8 w-8"
        />
      </a> -->
      
      <div class="responsive">
        <iframe 
          frameborder="0" 
          :aria-label="label" 
          :src="slideEmbedLink" 
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
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
    slideViewLink() {
      return `https://docs.google.com/presentation/d/${this.gslide_id}/view`;
    },
    slideEmbedLink() {
      return `https://docs.google.com/presentation/d/${this.gslide_id}/embed?start=false&loop=false&delayms=3000`;
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