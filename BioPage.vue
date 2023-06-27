<template>
  <div>
    <h1>Bio</h1>
    <p>Name: {{ bio.name }}</p>
    <p>Qualifications: {{ bio.qualifications }}</p>
    <p>Teaching Experience: {{ bio.teachingExperience }}</p>
    <p>Introduction: {{ bio.introduction }}</p>
  </div>
</template>

<script>
export default {
  name: 'BioPage',
  data() {
    return {
      bio: {
        name: 'John Doe',
        qualifications: 'M.Sc. in Mathematics',
        teachingExperience: '10 years',
        introduction: 'I am passionate about teaching mathematics and helping students succeed.',
      },
    };
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
