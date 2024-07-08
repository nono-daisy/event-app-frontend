<template>
  <div>
    <header class=" inset-x-0 z-50 shadow">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex justify-between gap-4">
          <div class="flex">
            <span class="text-xl text-blue-900 font-bold text-justify mt-2 ">BK-Arena Event System</span>
          </div>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class=" hidden lg:flex items-center lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class=" text-blue-900 hover:text-blue-800 hover:font-bold" href="/">{{item.name}}</a>
          <!--      <button aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-900 dark:text-gray-100 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></button>-->
        </div>
        <div class="hidden lg:flex ">
          <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base text-blue-900  hover:text-blue-900 font-semibold leading-7"> Login <span></span><span class="aria-hidden">&rarr;</span></a>
        </div>

      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">BK-Arena Event System</span>

            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-900">Login</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <section class="blog text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Story</h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            BK-Arena has been at the forefront of entertainment and sports since its inception. our mission is to provide a world-class venue that brings joy and excitement to our community.</p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://i0.wp.com/panorama.rw/wp-content/uploads/2022/09/IMG-20220914-WA0245.jpg?resize=880%2C594&ssl=1)"></div>

            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm">Game</div>
              </div>
              <div class="title-post font-medium">We Offer</div>

              <div class="summary-post text-base text-justify">Step into a world of friendly competition and pure fun with our exhilarating game nights.
                <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span class="">Enjoy</span></button>
              </div>

            </div>
          </div>

          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://www.newtimes.co.rw/thenewtimes/uploads/images/2024/03/22/thumbs/1200x700/43263.jpg)"></div>

            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm"> Dance</div>
              </div>
              <div class="title-post font-medium">We offer</div>

              <div class="summary-post text-base text-justify">the rhythm move you as our talented dancers take the stage.it's a graceful Traditional dance.
                <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span class="">Enjoy</span></button>
              </div>

            </div>
          </div>

          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://www.ktpress.rw/wp-content/uploads/2023/08/2-5.jpg)"></div>

            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm">Concert</div>
              </div>
              <div class="title-post font-medium">We offer</div>

              <div class="summary-post text-base text-justify">Lose yourself in the music with our electrifying concert experiences,with Best performance.
                <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span class="">Enjoy</span></button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    <hr class="my-6 border-gra " />
    <footer class="container px-8 py-10 mx-auto">
      <div class="  flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-500">© Right  2024. BK-Arena Event System .</p>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a href="/about" class=" font-semibold mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-[#00A4E4 " aria-label="Reddit">For More Information</a>

          <!--                   <a href="#" class=" font-semibold mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-[#00A4E4] dark:hover:text-gray-200" aria-label="Reddit"> Privacy </a>-->

        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


const navigation = [{
  name: 'Home', href: '/welcome'
},
  {
    name: 'About', href: '/about'
  },
]
const mobileMenuOpen = ref(false)
</script>