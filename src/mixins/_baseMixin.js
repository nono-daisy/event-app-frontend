import router from '../router/index.js';

export default {
    created(){
        const credentials = localStorage.getItem('auth')
        if(!credentials){
            router.push('/login')
        }
    }
}