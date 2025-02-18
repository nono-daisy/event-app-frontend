<template>
  <div id="main-content" class="w-full relative">
    <main>
      <div class="pt-6 px-4">
        <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <!-- Total Participants Card -->
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  {{ ticketStore.tickets.length}}
                </span>
                <h3 class="text-base font-normal text-gray-500">Total Participants</h3>
              </div>
            </div>
          </div>

          <!-- Approved Participants Card -->
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-green-600">
                  {{ ticketStore.tickets.filter(elm=>elm.is_approved).length }}
                </span>
                <h3 class="text-base font-normal text-gray-500">
                  Approved Participants
                </h3>
              </div>
            </div>
          </div>

          <!-- Rejected Participants Card -->
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-red-600">
                  {{ ticketStore.tickets.filter(elm=>!elm.is_approved).length}}
                </span>
                <h3 class="text-base font-normal text-gray-500">Rejected Participants</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="ticketStore.isLoading"
             class="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <div class="text-gray-600">Loading...</div>
        </div>

        <!-- Error State -->
        <div v-if="ticketStore.error"
             class="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {{ ticketStore.error.message }}
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useTicketStore } from "../stores/ticket.store.js";
import { onMounted } from 'vue';

const ticketStore = useTicketStore();

// Fetch data when component mounts
onMounted(async () => {
  await ticketStore.getAllTickets();
});
</script>