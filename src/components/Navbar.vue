
<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/bio">Bio</router-link>
      <router-link to="/contact">Contact</router-link>
    </ul>
    <div class="search-box">    
      <input class="search-txt" type="text" name="" placeholder="Search ">
      <a class="search-btn" href="#"
        ><i class="fas fa-search"></i
      ></a>
    </div>
  </nav>
</template>



<script>
export default {
  name: 'Navbar',
};
</script>

<style>
/* Style the NavBar */ 
nav {
  position: absolute;
  top: -5px;
  left: 15px;
  background-color: #a9c2b52f;
  border-radius: 15px;
}

nav ul {
  font-size: medium;
  list-style-type: none;
}

/* Style the search box */
.search-box {
  position: absolute;
  top: 10px;
  right: 50px;
  height: 35px;
  width: 280px;
  background: #ffffff;
  border-radius: 8px;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  top: 15px;
  left: 5px;
  font-size: 14px;
  padding: 10px;
  color: #02150aa7;
}
/*edit*/
</style>
