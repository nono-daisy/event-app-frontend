<template>
<div>
  <aside id="sidebar" class="h-screen hidden z-20 top-0 left-0 pt-16 lg:flex  flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
    <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 bg-white divide-y space-y-1">
          <div class=" pl-2 mb-8">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="text-blue-800 font-bold ">BK-Arena Event System</span>

            </a>
          </div>
          <ul class="space-y-2 pb-2">
            <li>
              <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/tickets" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3 flex-1 whitespace-nowrap">Registration List</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</div>
</template>
<script setup>

</script>