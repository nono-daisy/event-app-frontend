<template>
  <div>
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <div class="text-center font-bold text-blue-900 mb-5">Registration Form {{ $route.params.event }}</div>
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
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label for="gender" class="mb-3 block text-base font-medium text-[#07074D]">Gender</label>
                <select id="gender" v-model="selectedGender" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option v-for="option in genderOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label for="age" class="mb-3 block text-base font-medium text-[#07074D]">Age</label>
                <input id="age" type="text" v-model="age" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" @input="validateNumber">
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
                placeholder="+250"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
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

export  default {
  name: "RegistrationForm",
  data() {
    return {
      selectedGender: '',
      age: null,
      genderOptions: ['Male', 'Female'],
    };
  },
  methods: {
    validateNumber() {
      // Function to restrict non-numeric input for the age field
      this.age = parseInt(this.age) || null; // Parse as integer or set to null
    },
  },
}

</script>