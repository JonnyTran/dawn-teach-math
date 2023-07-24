<template>
  <div class="container mx-auto my-5 p-5 mx-w-md">
        <div class="md:flex no-wrap md:-mx-2">
            <!-- Left Side -->
            <div class="w-full sm:4/12 md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="mx-auto bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="image overflow-hidden">
                        <img  class="mx-auto shadow" style="border-radius: 50%; height:150px; width:150px; object-fit: cover; object-position: 0px -12px;"
                            src= "src/assets/web_portrait.png"
                            alt="">
                    </div>
                    <h1 class="text-center text-gray-900 font-bold text-xl leading-8 my-1">Dawn Tran</h1>
                    <h3 class="text-center text-gray-600 font-lg text-semibold leading-6">Math Intructor</h3>
                    <p class="text-center text-sm text-gray-500 hover:text-gray-600 leading-5 my-2">
                      Westwood High School<br>Austin, TX 78750
                    </p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-2 mb-1">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-blue-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-2 mt-">
                            <span>Member since</span>
                            <span class="ml-auto">August 2022</span>
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
            <div class="my-4"></div>
                <!-- Contributors card -->
                <div class="bg-white p-3 mx-auto">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span class="text-green-500">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Website Contributors</span>
                    </div>
                    
                    <div class="grid grid-cols-3">
                        <!-- Jonny Start -->
                        <div class="text-center my-2">
                            <img class="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="">
                            <a href="#" class="text-main-color">Jonny</a> 
                        </div>
                        <!-- Jonny End -->

                        <!-- Dianne Start -->
                        <div class="text-center my-2">
                            <img class="h-16 w-16 rounded-full mx-auto"
                                src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                alt="">
                            <a href="#" class="text-main-color">Dianne</a>
                        </div>
                        <!-- Dianne End -->

                        <!-- Shivangi Start -->
                        <div class="text-center my-2">
                            <img class="h-16 w-16 rounded-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt="">
                            <a href="#" class="text-main-color">Shivangi</a>
                        </div>
                        <!-- Shivangi End -->
                    </div>
                </div>
                <!-- End of contributors card -->
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Title</div>
                                <div class="px-4 py-2">Ms.</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">Tran</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Pronouns</div>
                                <div class="px-4 py-2">She/Her</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Department</div>
                                <div class="px-4 py-2">Math</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Location</div>
                                <div class="px-4 py-2">Austin, Texas</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Languages</div>
                                <div class="px-4 py-2">English, Vietnamese</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="overflow-clip px-4 py-2">
                                    <a class="text-blue-800" href="mailto:dawn_tran@roundrockisd.org">dawn_tran@roundrockisd.org</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birth Place</div>
                                <div class="px-4 py-2">Da Nang, Vietnam</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div class="bg-white p-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-blue-600">Algebra 1 & 2 Teacher</div>
                                    <div class="text-gray-500 text-xs">Aug 2022 - Now</div>
                                </li>
                                <li>
                                    <div class="text-blue-600">Algebra 1 Teacher</div>
                                    <div class="text-gray-500 text-xs">Jan - May 2022</div>
                                </li>
                                <li>
                                    <div class="text-blue-600">Algebra 2 Apprentice Teacher</div>
                                    <div class="text-gray-500 text-xs">Aug - Dec 2021</div>
                                </li>
                                <li>
                                    <div class="text-blue-600">Program Assistant</div>
                                    <div class="text-gray-500 text-xs">Jun - Aug 2018</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Education</span>
                            </div>
                            <ul class="list-inside space-y-1">
                                <li>
                                    <div class="text-blue-600">B.S. Mathematics, Philosophy Minor, UTeach Cert.</div>
                                    <div class="text-gray-600">University of Texas at Austin</div>
                                    <div class="text-gray-500 text-xs">2017-2021</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
            </div>
        </div>
  </div>
</template>

<script>
</script>

<style>

</style>

