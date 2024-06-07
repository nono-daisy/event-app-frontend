import {defineStore} from "pinia";
import axios from "axios";
import getAccessToken from "../utils/token.js";
export const useEventStore = defineStore('eventStore', {
    state: ()=> ({
        data: null,
        events: [],
        event: null,
        isLoading: false,
        error: null
    }),
    actions: {
        async getAllEvents(){
            this.isLoading = true
            this.error = null
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}events`
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                } );
                this.events =  [...response.data ]
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },
        async getSingleEvent(eventId){
            this.isLoading = true
            this.error = null
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}events/${eventId}`
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                } );
                this.event = {...response.data}
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },


    }
})