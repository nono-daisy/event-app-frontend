<template>
  <app-layout>
    <div class="w-full">
      <div class="  w-full px-4">
        <div class="flex flex-col w-full">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                      <div class="flex items-center gap-x-3">
                        <input type="checkbox" class="text-blue-500 border-gray-300 rounded">
                        <button class="flex items-center gap-x-2">
                          <span>Event</span>
                        </button>
                      </div>
                    </th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Date
                    </th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Status
                    </th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Name
                    </th>

                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Phone number
                    </th>
                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Age
                    </th>
                    <th scope="col" class="px-4 hover:bg-red-50 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      <span class="text-green-500 transition-colors">Actions</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="ticket in ticketStore.tickets" :key="ticket._id">
                    <td class="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <input type="checkbox" class="text-blue-500 border-gray-300 rounded">

                        <span>{{ ticket.code.toUpperCase() }}</span>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      <div class="flex items-center gap-x-2">
                        <!--                        <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">-->
                        <div>
                          <h2 class="text-sm font-medium text-gray-800">{{ ticket?.event.name }}</h2>
                          <p class="text-xs font-normal text-gray-600">{{ moment(ticket?.event.start_date ).calendar()}}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div :class="ticket.is_approved ? 'text-emerald-500 bg-emerald-100/60':'text-red-500 bg-red-100/60'" class="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h2 class="text-sm font-normal">{{ ticket.is_approved ? 'Approved' : 'Not Approved' }}</h2>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <div class="flex items-center gap-x-2">
<!--                        <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">-->
                        <div>
                          <h2 class="text-sm font-medium text-gray-800">{{ ticket?.applicant_name }}</h2>
                          <p class="text-xs font-normal text-gray-600">{{ ticket?.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{{ ticket?.phone }}</td>
                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{{ticket?.age}}</td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <div class="flex items-center gap-x-6">
<!--                        <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">-->
<!--                          {{ ticket.is_approved ? 'Reject' : 'Approved' }}-->
<!--                        </button>-->

                        <button   @click="ticketStore.updateTicket({is_approved: !ticket.is_approved}, ticket._id)"  class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                          {{ ticket.is_approved ? 'Reject' : 'Approve' }}
                        </button>
                      </div>
                    </td>
                  </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
          </a>

          <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
          </div>

          <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </app-layout>
</template>
<script setup>

import AppLayout from "../layout/AppLayout.vue";
import {useTicketStore} from "../stores/ticket.store.js";
import moment from "moment";
const ticketStore = useTicketStore()
ticketStore.getAllTickets()


</script>