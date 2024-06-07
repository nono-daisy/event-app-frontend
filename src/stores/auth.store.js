import {defineStore} from "pinia";
import axios from "axios";
export const useAuthStore = defineStore('authStore', {
    state: ()=> ({
        data: null,
        isLoading: false,
        error: null
    }),
    actions: {
        async login(email, password){
            this.isLoading = true
            this.error = null
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}auth/login`
                const response = await axios.post(url,{email: email , password:password} );
                this.data = { ...response.data }
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },
        // async SignUp(credObj){
        //     this.isLoading = true
        //     this.error = null
        //     try {
        //         const url =  `${import.meta.env.VITE_APP_BASE_URL}auth/signup`
        //         const response = await axios.post(url,credObj)
        //         this.data = { ...response.data }
        //     }catch (e){
        //         this.error = e
        //     }
        //     this.isLoading = false
        // },
        // async logOut(){
        //     this.isLoading = true
        //     this.error = null
        //     const t = JSON.parse(localStorage.getItem('auth')).accessToken
        //     try {
        //         const url =  `${import.meta.env.VITE_APP_BASE_URL}auth/logOut`
        //         const response = await axios.post(url, {
        //             token: t
        //         })
        //         this.data = { ...response.data }
        //
        //     }catch (e){
        //         this.error = e
        //     }
        //     this.isLoading = false
        // },

    }
})