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
        <div class="text-center font-bold text-blue-900 mb-5">Get ticket for "{{ eventStore.event?.name }}"</div>
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
                required
                aria-required="true"
                ref="nameInputRef"
                placeholder="Full Name"
                v-model="ticketData.applicant_name"
                :class="['w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md',
                        errors.name ? 'border-red-500' : 'border-[#e0e0e0] focus:border-[#6A64F1]']"
                @blur="validateField('name')"
            />
            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
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
                required
                aria-required="true"
                v-model="ticketData.email"
                placeholder="example@domain.com"
                :class="['w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md',
                        errors.email ? 'border-red-500' : 'border-[#e0e0e0] focus:border-[#6A64F1]']"
                @blur="validateField('email')"
            />
            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
          </div>

          <div class="mb-5">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label for="gender" class="mb-3 block text-base font-medium text-[#07074D]">Gender</label>
                <select id="gender"
                        v-model="ticketData.gender"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option v-for="option in genderOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label for="age" class="mb-3 block text-base font-medium text-[#07074D]">Age</label>
                <input id="age"
                       type="text"
                       v-model="ticketData.age"
                       :class="['w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md',
                               errors.age ? 'border-red-500' : 'border-[#e0e0e0] focus:border-[#6A64F1]']"
                       @input="validateNumber"
                       @blur="validateField('age')" />
                <span v-if="errors.age" class="text-red-500">{{ errors.age }}</span>
              </div>
            </div>
          </div>

          <div class="mb-5">
            <label
                for="national_id"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
              NID
            </label>
            <input
                type="text"
                name="national_id"
                id="national_id"
                required
                aria-required="true"
                v-model="ticketData.national_id"
                placeholder="Enter your nationalId"
                :class="['w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md',
                        errors.national_id ? 'border-red-500' : 'border-[#e0e0e0] focus:border-[#6A64F1]']"
                @blur="validateField('national_id')"
            />
            <span v-if="errors.national_id" class="text-red-500">{{ errors.national_id }}</span>
          </div>

          <div class="mb-5">
            <label
                for="phone"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
                type="text"
                name="phone"
                id="phone"
                required
                aria-required="true"
                v-model="ticketData.phone"
                placeholder="+250"
                :class="['w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md',
                        errors.phone ? 'border-red-500' : 'border-[#e0e0e0] focus:border-[#6A64F1]']"
                @blur="validateField('phone')"
            />
            <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
          </div>

          <div>
            <button
                type="button"
                @click="handleSubmit"
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
import { useEventStore } from "../stores/event.store.js";
import { useTicketStore } from "../stores/ticket.store.js";
import SuccessPage from "./SuccessPage.vue";

export default {
  name: "RegistrationForm",
  components: { SuccessPage },
  setup() {
    const eventStore = useEventStore();
    const ticketStore = useTicketStore();
    return { eventStore, ticketStore };
  },
  data() {
    return {
      showPopup: false,
      genderOptions: ['male', 'female'],
      errors: {
        name: '',
        email: '',
        age: '',
        national_id: '',
        phone: ''
      },
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
      this.ticketData.age = this.ticketData.age.replace(/[^0-9]/g, '');
    },
    validateField(field) {
      this.errors[field] = '';

      switch(field) {
        case 'name':
          if (!this.ticketData.applicant_name) {
            this.errors.name = 'Full name is required';
          }
          break;

        case 'email':
          if (!this.ticketData.email) {
            this.errors.email = 'Email is required';
          } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ticketData.email)) {
            this.errors.email = 'Please enter a valid email address';
          }
          break;

        case 'national_id':
          if (!this.ticketData.national_id) {
            this.errors.national_id = 'National ID is required';
          } else if (!/^\d{16}$/.test(this.ticketData.national_id)) {
            this.errors.national_id = 'National ID must be exactly 16 digits';
          }
          break;

        case 'phone':
          if (!this.ticketData.phone) {
            this.errors.phone = 'Phone number is required';
          } else if (!/^\d{10}$/.test(this.ticketData.phone)) {
            this.errors.phone = 'Phone number must be exactly 10 digits';
          }
          break;

        case 'age':
          if (!this.ticketData.age) {
            this.errors.age = 'Age is required';
          } else if (isNaN(this.ticketData.age) || this.ticketData.age < 0) {
            this.errors.age = 'Please enter a valid age';
          }
          break;
      }
    },
    validateAll() {
      ['name', 'email', 'national_id', 'phone', 'age'].forEach(field => {
        this.validateField(field);
      });

      return !Object.values(this.errors).some(error => error !== '');
    },
    handleSubmit() {
      if (this.validateAll()) {
        this.ticketStore.createTicket(this.ticketData, this.$route.params.event);
        this.showPopup = true;
        this.resetForm();
      }
    },
    resetForm() {
      this.ticketData = {
        age: null,
        gender: 'male',
        applicant_name: null,
        national_id: null,
        email: null,
        phone: null,
      };
      this.errors = {
        name: '',
        email: '',
        age: '',
        national_id: '',
        phone: ''
      };
    }
  },
  mounted() {
    this.eventStore.getSingleEvent(this.$route.params.event);
  }
};
</script>