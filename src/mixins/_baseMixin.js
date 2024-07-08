import router from '../router/index.js';
import {useAuthStore} from "../stores/auth.store.js";

export default {

    setup(){
        const authStore = useAuthStore()
      return {authStore}
    },

    mounted(){
        localStorage.setItem('current_link', this.$route.path)
    },
    created(){
        const credentials = localStorage.getItem('auth')
        if(!credentials){
            router.push('/login')
        }
    }
}