<template>

  <div class="bg-gray-10 max-w-[100vw]">
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
          <a v-for="item in navigation" :key="item.name" :href="item.href" class=" text-sm font-semibold  leading-6 sm:block  dark:text-gray-100 text-blue-900 hover:text-blue-800 hover:font-bold" href="/">{{item.name}}</a>
          <!--      <button aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-900 dark:text-gray-100 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></button>-->
        </div>
        <div class="hidden lg:flex ">
          <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base text-blue-900 dark:text-gray-100 hover:text-gray-50 font-semibold leading-7"> Login <span></span><span class="aria-hidden">&rarr;</span></a>
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
                <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Login</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="container mx-auto max-w-[1500px]">
      <section class="  pb-24 relative z-30">
        <div class="mx-auto   ">
          <div class="relative z-40 container mx-auto h-full       lg:px-8">
            <div class="px-4 py-4      lg:px-8 lg:pt-20">
              <div class="grid gap-10 lg:grid-cols-2 mx-24">
                <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                  <div class=" lg:-mt-48 text-left">
                    <h1 class="text-3xl font-bold tracking-tight text-blue-800 sm:text-2xl">Welcome to BK-Arena Event</h1>
                    <p class="mt-6 text-md font-title leading-8 text-gray-800"> where we host the most exhilarating events and bring people together through the power of entertainment and sports. From electrifying music festivals to thrilling ball games, we create memories that last a lifetime..</p>
                    <div class="mt-10 flex items-center justify-left gap-x-6">
                      <a href="/about" class="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Ticket Now</a>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center w-full   -mx-4 lg:pl-10">
                  <div class="flex flex-col items-end px-3">
                    <img class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                         src="https://www.ktpress.rw/wp-content/uploads/2023/08/2-5.jpg"
                         alt="">
                    <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                         src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2024/03/22/thumbs/1200x700/43263.jpg"
                         alt="">
                  </div>
                  <div class="px-3">
                    <img class="object-cover w-40 h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80"
                         src="https://www.okayafrica.com/media-library/ehab-amin-c-of-al-ahly-and-jean-jacques-boissy-r-of-as-douanes-compete-during-the-2023-basketball-africa-league-championship.jpg?id=51678681&width=1200&height=600&coordinates=0%2C0%2C0%2C250"
                         alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
         <EventPage/>
        </div>
      </section>

      <hr class="my-6 border-gra dark:border-gray-700" />
      <footer class="container px-8 py-10 mx-auto">
        <div class="  flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="text-sm text-gray-500">© Right  2024. BK-Arena Event System .</p>

          <div class="flex mt-3 -mx-2 sm:mt-0">
            <a href="/about" class=" font-semibold mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-[#00A4E4 dark:hover:text-gray-200" aria-label="Reddit">Kubindi bisobanuro</a>

            <!--                   <a href="#" class=" font-semibold mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-[#00A4E4] dark:hover:text-gray-200" aria-label="Reddit"> Privacy </a>-->

          </div>
        </div>
      </footer>

    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import EventPage from "./EventPage.vue";

const navigation = [{
  name: 'Home', href: '/welcome'
},
  {
    name: 'About', href: '/about'
  },
]
const mobileMenuOpen = ref(false)
</script>