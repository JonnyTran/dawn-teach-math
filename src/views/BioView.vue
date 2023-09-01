<template>
  <div class="bg-gray-50 rounded-lg container mx-auto my-5 p-5 mx-w-md">
        <div class="md:flex no-wrap md:-mx-2">
            <!-- Left Side -->
            <div class="w-full sm:4/12 md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="mx-auto bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="image overflow-hidden">
                        <img  class="mx-auto shadow" style="border-radius: 50%; height:150px; width:150px; object-fit: cover; object-position: 0px -12px;"
                            src="/src/assets/web_portrait.png"
                            alt="">
                    </div>
                    <h1 class="text-center text-gray-900 font-bold text-xl leading-8 my-1 dark:text-white">Dawn Tran</h1>
                    <h3 class="text-center text-gray-600 font-lg text-semibold leading-6 dark:text-gray-300">Math Intructor</h3>
                    <p class="text-center text-sm text-gray-500 hover:text-gray-600 leading-5 my-2 dark:text-gray-400">
                      Westwood High School<br>Austin, TX 78750
                    </p>
                    <ul
                        class="mt-4 bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow dark:bg-gray-700 dark:text-gray-300 py-1 px-3 mt-1 divide-y rounded shadow-sm">
                        <li class="flex items-center py-2 mb-1">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-blue-500 py-1 px-2 rounded text-white text-sm dark:bg-blue-600">Active</span></span>
                        </li>
                        <li class="flex items-center py-2">
                            <span>Member since</span>
                            <span class="ml-auto">August 2022</span>
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
                <!-- Skills card -->
                <div class="w-full mx-auto my-3 bg-white p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span class="text-blue-500">
                            <svg class="h-5 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 -1 23 23"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7">
                                <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"/>
                                <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                        </span>
                        <span class="tracking-wide dark:text-gray-200">Skills</span>
                    </div>
                    <ul style="" class="flex flex-wrap my-2">
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">Lesson Planning</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">Math Content Design</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">Microsoft Office</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">LMS</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">Python</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">CSS</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">HTML5</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">Javascript</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">SQL</li>
                        <li class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-blue-900 dark:text-blue-200">Git</li>
                    </ul>
                </div>
                <!-- End of skills card -->
                <!-- Hobbies card -->
                <div class="w-full mx-auto my-3 bg-white p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span class="text-blue-500">
                            <svg class="h-4 overflow-visible dark:text-gray-400 mr-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="1 0 20 18"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                            </svg>
                        </span>
                        <span class="tracking-wide dark:text-gray-200">Interests</span>
                    </div>
                    <ul style="" class="flex flex-wrap my-2">
                        <li class="gradient bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">EdTech</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Coffee</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Baking</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Dance</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Guitar</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Movies</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Gaming</li>
                        <li class="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 mb-2 mr-2 rounded dark:bg-indigo-900 dark:text-indigo-200">Traveling</li>
                    </ul>
                </div>
                <!-- End of hobbies card -->
            <div class="my-4"></div>
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 dark:text-gray-400">
                        <span clas="text-blue-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide dark:text-gray-200">About</span>
                    </div>
                    <div class="text-gray-700 dark:text-white">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Title</div>
                                <div class="px-4 py-2 dark:text-gray-400">Ms.</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Last Name</div>
                                <div class="px-4 py-2 dark:text-gray-400">Tran</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Pronouns</div>
                                <div class="px-4 py-2 dark:text-gray-400">She/Her</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Department</div>
                                <div class="px-4 py-2 dark:text-gray-400">Math</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Location</div>
                                <div class="px-4 py-2 dark:text-gray-400">Austin, Texas</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Languages</div>
                                <div class="px-4 py-2 dark:text-gray-400">English, Vietnamese</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Email</div>
                                <div class="overflow-hidden px-4 py-2">
                                    <a class="text-blue-800 dark:text-blue-500" href="mailto:dawn_tran@roundrockisd.org">dawn_tran@roundrockisd.org</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold dark:text-gray-300">Birth Place</div>
                                <div class="px-4 py-2 dark:text-gray-400">Da Nang, Vietnam</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div class="bg-white p-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 dark:text-gray-400">
                                <span clas="text-blue-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide dark:text-gray-200">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-blue-600 dark:text-blue-500">Algebra 1 & 2 Teacher</div>
                                    <div class="text-gray-500 text-xs">Aug 2022 - Now</div>
                                </li>
                                <li>
                                    <div class="text-blue-600 dark:text-blue-500">Algebra 1 Teacher</div>
                                    <div class="text-gray-500 text-xs">Jan - May 2022</div>
                                </li>
                                <li>
                                    <div class="text-blue-600 dark:text-blue-500">Algebra 2 Apprentice Teacher</div>
                                    <div class="text-gray-500 text-xs">Aug - Dec 2021</div>
                                </li>
                                <li>
                                    <div class="text-blue-600 dark:text-blue-500">UTA Program Assistant</div>
                                    <div class="text-gray-500 text-xs">Jun - Aug 2018</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 dark:text-gray-400">
                                <span clas="text-blue-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide dark:text-gray-200">Education</span>
                            </div>
                            <ul class="list-inside space-y-1">
                                <li>
                                    <div class="text-blue-600 dark:text-blue-500">B.S. Mathematics, Minor Philosophy</div>
                                    <div class="text-gray-500">University of Texas at Austin</div>
                                    <div class="text-gray-500 text-xs">2017-2021</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
                <!-- Contributors card -->
                <div style="" class="grid mt-4 justify-items-center md:justify-items-end bg-white p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span class="text-blue-500 dark:text-gray-500">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span class="tracking-wide dark:text-gray-200">Website Contributors</span>
                    </div>
                    
                    <div class="flex">
                        <!-- Jonny Start -->
                        <div class="text-center mr-5 my-2">
                            <img class="h-12 rounded-full mx-auto"
                                src="#"
                                alt="">
                            <a href="#" class="text-main-color">Jonny</a> 
                        </div>
                        <!-- Jonny End -->

                        <!-- Dianne Start -->
                        <div class="text-center mr-5 my-2">
                            <img class="h-12 rounded-full mx-auto"
                                src="#"
                                alt="">
                            <a href="#" class="text-main-color">Dianne</a>
                        </div>
                        <!-- Dianne End -->

                        <!-- Shivangi Start -->
                        <div class="text-center mr-5 my-2">
                            <img class="h-12 rounded-full mx-auto"
                                src="#"
                                alt="">
                            <a href="#" class="text-main-color">Shivangi</a>
                        </div>
                        <!-- Shivangi End -->
                    </div>
                </div>
                <!-- End of contributors card -->
            </div>
        </div>
  </div>
</template>

<script>
import config from '../../data/config.json';
</script>

<style>

</style>

