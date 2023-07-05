<template>
  <div>
      <portrait>
      <img src="src/assets/Web_portrait.png" alt="teacher" width="250" height="300">
      </portrait>
  </div>
  <div>
      <bio>
      <biotitle><h1>Bio</h1></biotitle>
      <p>Name: {{ bio.name }}</p>
      <p>Qualifications: {{ bio.qualifications }}</p>
      <p>Teaching Experience: {{ bio.teachingExperience }}</p>
      <p>About me: {{ bio.about }}</p>
      </bio>
  </div>
  <div>
    <quote>
    <h1>“The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.”</h1>
    <author><h2>-Martin Luther King, Jr.</h2></author>
    </quote>
  </div>
</template>

<script>
export default {
  name: 'BioPage',
  data() {
    return {
      bio: {
        name: 'Dawn Tran',
        qualifications: 'B.S. in Mathematics at the University of Texas at Austin (2021)',
        teachingExperience: '2 years',
        about: 'I am originally from Vietnam and moved to the United States when I was very young. I probably can\'t teach you any Vietnamese, butI can teach math way better!',
      },
    };
  },
}; 
</script>

<style>
portrait {
  display: inline-flex;
  position: relative;
  background: #ffffff;
  margin: 60px;
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 10px;
  border-bottom: 6px solid #02150aa7;
  border-right: 4px solid #02150aa7;
}

biotitle {
  font-size: 1.8rem;
  font-weight: 450;
  color: #02150aa7;
}


bio {
  display: grid;
  position: relative;
  top: -400px;
  left: 500px;
  width: 600px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #000000;
  padding: 10px;
  border-bottom: 6px solid #02150aa7;
  border-right: 4px solid #02150aa7;
  line-height: 2;
}

quote {
  position: absolute;
  align-self: center;
  font-size: larger;
  width: 700px;
  top: 500px;
  left: 500px;
  font-style: oblique;
  line-height: 2;
}

author {
  line-height: 3;
}

</style>

