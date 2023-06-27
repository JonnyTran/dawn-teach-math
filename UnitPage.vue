<template>
  <div>
    <h1>{{ unit.title }}</h1>
    <div v-html="unit.content"></div>
  </div>
</template>

<script>
export default {
  name: 'UnitPage',
  data() {
    return {
      unit: {
        id: 1,
        title: 'Algebra',
        content: '<p>Unit content fetched from Schoology API goes here...</p>',
      },
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
