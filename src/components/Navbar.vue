<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Input, Button } from 'flowbite-vue'
</script>

<template>
  <Navbar solid> 
    <template #logo>
      <NavbarLogo href="#" alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
        Tran Teach Math
      </NavbarLogo>  
    </template>

    <template #default="{isShowMenu}">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink isActive>
          <router-link to="/">Home</router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="/courses">Courses</router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="/bio">Bio</router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="/contact">Contact</router-link>
        </NavbarLink>
      </NavbarCollapse>


      <Input size="lg" placeholder="">
        <template #prefix>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </template>
        <template #suffix>
          <Button>Search</Button>
        </template>
      </Input>
    </template>
  </Navbar>

  <!-- Add a second level navbar for Class or Unit here -->
  
  <!-- Old version -->
  <!-- <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <router-link to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</router-link>
                </li>
                <li>
                    <router-link to="/courses" class="text-gray-900 dark:text-white hover:underline">Courses</router-link>
                </li>
                <li>
                    <router-link to="/bio" class="text-gray-900 dark:text-white hover:underline">Bio</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="text-gray-900 dark:text-white hover:underline">Contact</router-link>
                </li>
            </ul>
        </div>
    </div>
  </nav> -->
  <!-- <nav>
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
  </nav> -->
</template>

<style>

/* Style the NavBar */ 
/* nav {
  position: absolute;
  top: -5px;
  left: 15px;
  background-color: #a9c2b52f;
  border-radius: 15px;
}

nav ul {
  font-size: medium;
  list-style-type: none;
} */

/* Style the search box */
/* .search-box {
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
} */
</style>
