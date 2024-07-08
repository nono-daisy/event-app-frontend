<template>
  <div class="fixed top-0 left-0 w-screen mx-auto" v-if="showPopup">
    <div class="w-screen h-screen bg-black opacity-50 absolute"></div>
    <div class="w-screen h-screen mx-auto absolute">
      <SuccessPage/>
    </div>
  </div>
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
                ref="nameInputRef"
                placeholder="Full Name"
                v-model="ticketData.applicant_name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <span v-if="isNameEmpty" class="text-red-500">Name is required</span>
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
                ref="emailInputRef"
                v-model="ticketData.email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <p  v-if="isEmailEmpty" class="text-red-500">your email is required</p>
            <p  v-if="isVisible" class="text-red-500">your email is invalid</p>
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
              <p  v-if="isAge" class="text-red-500">your age is required</p>
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
            <p  v-if="isNationalId" class="text-red-500">your NationalId is required</p>
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
            <p  v-if="isPhone" class="text-red-500">your PhoneNumber  is required</p>
          </div>

          <div>
            <button @click="createTicket"
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
import SuccessPage from "./SuccessPage.vue";


export  default {
  name: "RegistrationForm",
  components: {SuccessPage},
  setup(){
    const eventStore = useEventStore()
    const ticketStore = useTicketStore()
    return { eventStore, ticketStore}
  },
  data() {
    return {
      showPopup:false,
      genderOptions: ['male', 'female'],
      isPhone:false,
      isNationalId:false,
      isAge:false,
      isEmailEmpty: false,
      isNameEmpty:false,
      isVisible:false,

      ticketData: {
        age: null,
        gender: 'male',
        applicant_name: null,
        national_id: null,
        email: null,
        phone: null,
      },
      isSuccess: false
    };
  },
  methods: {
    validateNumber() {
      // Function to restrict non-numeric input for the age field
      this.age = parseInt(this.age) || null; // Parse as integer or set to null
    },
    isValidEmail(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    },
    isValidateticket (){
      this.isNameEmpty = false
      let result = true
      if(!this.ticketData.applicant_name){
        let inputName = this.$refs.nameInputRef
        console.log(inputName)
        inputName.classList.add(['border-red-500'])
        this.isNameEmpty = true
      }
      if (this.ticketData.email){

        if (!this.isValidEmail(this.ticketData.email) ){
          let inputEmail = this.$refs.emailInputRef
          console.log(inputEmail)
          inputEmail.classList.add(['border-red-500'])
          this.isVisible= true
          result = false
        }
        if (!this.ticketData.email){
          let inputEmail = this.$refs.emailInputRef
          inputEmail.classList.add(['border-red-500'])
          this.isEmailEmpty = true
          result = false
        }
      }
      return result
    },
    createTicket() {
      if(!this.isValidateticket()){
        console.log(!this.isValidateticket())
        console.log('not valid')
        return
      }
      this.ticketStore.createTicket(this.ticketData, this.$route.params.event)
      this.showPopup = true
      this.ticketData = {
        age: null,
            gender: 'male',
            applicant_name: null,
            national_id: null,
            email: null,
            phone: null,
      }
    }

  },
  mounted() {
    this.eventStore.getSingleEvent(this.$route.params.event)

  }
}

</script>