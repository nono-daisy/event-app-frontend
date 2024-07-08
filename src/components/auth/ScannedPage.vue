<template>
  <!-- component -->
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
        class="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200"
    >
      <div aria-label="header" class="flex space-x-4 items-center p-4">
        <div aria-label="avatar" class="flex mr-auto items-center space-x-4">
          <img
              src="https://yt3.googleusercontent.com/NLuMxt-ccfZngdfG8K2nG2X2YnQT2WBfmBi8cXHT7z2uYEzUC76JoNUwXInlsvVnEmNtcC7W=s900-c-k-c0x00ffffff-no-rj"
              alt="avatar Evan You"
              class="w-16 h-16 shrink-0 rounded-full"
          />
          <div class="space-y-2 flex flex-col flex-1 truncate">
            <div class="font-medium relative text-xl leading-tight text-gray-900">
            <span class="flex">
              <span class="truncate relative pr-8">
                Bk-Arena Event System
                <span
                    aria-label="verified"
                    class="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                >
                </span>
              </span>
            </span>
            </div>

          </div>
        </div>
      </div>
      <div aria-label="navigation" class="py-2">
        <nav class="grid gap-1">
          <a
              href="/"
              class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-7 h-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <span>{{ ticketStore.scannedTicket?.applicant_name }}</span>
          </a>
          <a
              href="/"
              class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-7 h-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                  d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
              ></path>
              <path d="M4 20l3.5 -3.5"></path>
              <path d="M15 4l-3.5 3.5"></path>
              <path d="M20 9l-3.5 3.5"></path>
            </svg>
            <span>{{ ticketStore.scannedTicket?.email }}</span>
          </a>
          <a
              href="/"
              class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <span>{{ ticketStore.scannedTicket?.phone }}</span>
          </a>
          <a
              href="/"
              class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-7 h-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path
                  d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
              ></path>
              <path d="M9 17h6"></path>
              <path d="M9 13h6"></path>
            </svg>
            <span>{{ ticketStore.scannedTicket?.gender }}</span>
          </a>
          <a
              href="/"
              class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-7 h-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                  d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
              ></path>
              <path d="M12 16v.01"></path>
              <path
                  d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
              ></path>
            </svg>
            <span>{{ ticketStore.scannedTicket?.national_id }}</span>
          </a>
        </nav>
      </div>
      <div aria-label="account-upgrade" class="px-4 py-6">
        <div class="flex items-center space-x-3">
          <router-link to="/welcome">
          <button
              type="button"
              class="inline-flex px-6 leading-6 py-3 rounded-md bg-blue-50 hover:bg-indigo-50/80 transition-colors duration-200 text-blue-900 font-medium text-lg"
          >
            Exit
          </button>
          </router-link>
        </div>
      </div>
      <div aria-label="footer" class="pt-2">
        <button
            type="button"
            class="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-7 h-7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            ></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
          </svg>
          <router-link to="/welcome">
            <span>Logout</span>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {useTicketStore} from "../../stores/ticket.store.js";

export default {
  setup() {
    const ticketStore = useTicketStore()
    return {ticketStore}
  },
  mounted() {
    this.ticketStore.getSingleTicket(this.$route.params.ticket)
    console.log(this.$route.params.ticket)
  }
}

</script>