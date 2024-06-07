<template>
  <div>
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <div class="text-center font-bold text-blue-900 mb-5">Buy ticket for "{{ eventStore.event?.name }}"</div>
        <div class="text-center text-lg text-blue-900 mb-5">{{ eventStore.event?.description }}</div>
        <div>
          <div class="mb-5">
            <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                v-model="ticketData.applicant_name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
                type="email"
                name="email"
                id="email"
                v-model="ticketData.email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label for="gender" class="mb-3 block text-base font-medium text-[#07074D]">Gender</label>
                <select id="gender" v-model="ticketData.gender" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option v-for="option in genderOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label for="age" class="mb-3 block text-base font-medium text-[#07074D]">Age</label>
                <input id="age" type="text" v-model="ticketData.age" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" @input="validateNumber">
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
              NID
            </label>
            <input
                type="text"
                name="subject"
                id="subject"
                v-model="ticketData.national_id"
                placeholder="Enter your subject"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
              PhoneNumber
            </label>
            <input
                type="text"
                name="subject"
                id="subject"
                v-model="ticketData.phone"
                placeholder="+250"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button @click="ticketStore.createTicket(ticketData, $route.params.event)"
                class="hover:shadow-form rounded-md bg-blue-900 py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {useEventStore} from "../stores/event.store.js";
import {useTicketStore} from "../stores/ticket.store.js";

export  default {
  name: "RegistrationForm",
  setup(){
    const eventStore = useEventStore()
    const ticketStore = useTicketStore()
    return { eventStore, ticketStore}
  },
  data() {
    return {
      genderOptions: ['male', 'female'],
      ticketData: {
        age: null,
        gender: 'male',
        applicant_name: null,
        national_id: null,
        email: null,
        phone: null,
      }
    };
  },
  methods: {
    validateNumber() {
      // Function to restrict non-numeric input for the age field
      this.age = parseInt(this.age) || null; // Parse as integer or set to null
    },

  },
  mounted() {
    this.eventStore.getSingleEvent(this.$route.params.event)
  }
}

</script>