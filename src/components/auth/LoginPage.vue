<template>
  <div class="bg-gray-200 w-full min-h-screen flex items-center justify-center">
    <div class="w-full py-8">
      <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
        <div class="flex items-center justify-center mb-4 gap-4">
          <h1 class="text-3xl font-bold text-blue-900 tracking-wider">Bk-Arena Event System</h1>
        </div>
        <h2 class="text-start text-sm -mb-4 font-medium tracking-wide text-gray-700">Sign in to your account</h2>

        <!-- Error Alert -->
        <div v-if="alerts.error.show" class="shadow bg-[#ffd8df] flex rounded items-center justify-between p-4 gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/>
          </svg>
          <p>{{ alerts.error.message }}</p>
          <div @click="closeAlert('error')" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
          </div>
        </div>

        <!-- Admin Contact Alert -->
        <div v-if="alerts.admin.show" class="shadow bg-blue-100 flex rounded items-center justify-between p-4 gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-blue-800">Please contact your administrator to reset your password</p>
          <div @click="closeAlert('admin')" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <div class="my-8 text-sm">
          <div class="flex flex-col my-4">
            <label for="email" class="text-gray-700">Email Address</label>
            <input
                type="email"
                name="email"
                v-model="formData.email"
                id="email"
                required
                ref="emailInputRef"
                @blur="validateField('email')"
                :class="['mt-2 p-2 border rounded text-sm text-gray-900 focus:outline-none focus:ring-0',
                      errors.email ? 'border-red-500' : 'border-gray-300 focus:border-gray-300']"
                placeholder="Enter your email"
            >
            <span v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</span>
          </div>

          <div class="flex flex-col my-4">
            <label for="password" class="text-gray-700">Password</label>
            <div class="relative flex items-center mt-2">
              <input
                  :type="visible ? 'text': 'password'"
                  v-model="formData.password"
                  name="password"
                  id="password"
                  ref="passwordInputRef"
                  @blur="validateField('password')"
                  :class="['flex-1 p-2 pr-10 border rounded text-sm text-gray-900 focus:outline-none focus:ring-0',
                        errors.password ? 'border-red-500' : 'border-gray-300 focus:border-gray-300']"
                  placeholder="Enter your password"
              >
              <button @click="visible = !visible" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg v-if="!visible" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
            <span v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</span>
          </div>

          <div class="flex justify-between">
            <a href="#" @click.prevent="handleForgotPassword" class="text-blue-900 hover:text-blue-900 hover:underline hover:-translate-y-1 duration-500 transition-all">
              Forgot Password?
            </a>
<!--            <a href="/signUp" class="text-blue-900 hover:text-blue-900 hover:underline hover:-translate-y-1 duration-500 transition-all">-->
<!--              Don't have an account yet?-->
<!--            </a>-->
          </div>

          <div class="my-4 flex items-center justify-end space-x-4">
            <button
                type="submit"
                @click="handleLogin"
                class="bg-blue-900 hover:bg-blue-900 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl uppercase hover:-translate-y-1 duration-500 transition-all"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/auth.store.js";
import { useRouter } from "vue-router";

export default {
  name: 'LoginForm',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    return { authStore, router };
  },
  data() {
    return {
      visible: false,
      formData: {
        email: null,
        password: null
      },
      errors: {
        email: '',
        password: ''
      },
      alerts: {
        error: {
          show: false,
          message: ''
        },
        admin: {
          show: false,
          message: 'Please contact your administrator to reset your password'
        }
      }
    };
  },
  methods: {
    validateEmail(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
    validateField(field) {
      this.errors[field] = '';

      switch(field) {
        case 'email':
          if (!this.formData.email) {
            this.errors.email = 'Email is required';
          } else if (!this.validateEmail(this.formData.email)) {
            this.errors.email = 'Please enter a valid email address';
          }
          break;
        case 'password':
          if (!this.formData.password) {
            this.errors.password = 'Password is required';
          }
          break;
      }
    },
    validateForm() {
      this.validateField('email');
      this.validateField('password');
      return !this.errors.email && !this.errors.password;
    },
    closeAlert(type) {
      this.alerts[type].show = false;
    },
    handleForgotPassword() {
      this.alerts.admin.show = true;
      // Hide the alert after 5 seconds
      setTimeout(() => {
        this.alerts.admin.show = false;
      }, 5000);
    },
    async handleLogin() {
      if (!this.validateForm()) {
        return;
      }

      try {
        await this.authStore.login(this.formData.email, this.formData.password);

        if (this.authStore.error) {
          this.alerts.error.show = true;
          this.alerts.error.message = 'Username or password is wrong';
          return;
        }

        localStorage.setItem('auth', JSON.stringify(this.authStore.data));
        const currentLink = localStorage.getItem('current_link');

        if (currentLink) {
          this.router.push(currentLink);
        } else {
          this.router.push('/tickets');
        }
      } catch (error) {
        this.alerts.error.show = true;
        this.alerts.error.message = 'An error occurred during login';
      }
    }
  }
};
</script>