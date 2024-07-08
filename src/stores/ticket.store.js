import {defineStore} from "pinia";
import axios from "axios";
import getAccessToken from "../utils/token.js";
export const useTicketStore = defineStore('ticketStore', {
    state: ()=> ({
        createdTicket: null,
        isVisible:false,
        updatedTicket: null,
        tickets: [],
        scannedTicket: null,
        isLoading: false,
        error: null
    }),
    actions: {

        async createTicket(obj, event){
            this.isLoading = true
            this.error = null
            this.isVisible = false
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}tickets`
                const response = await axios.post(url, {...obj, event: event} ,{
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                } );
                this.isVisible = true
                this.createdTicket = {...response.data}
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },
        async getAllTickets(){
            this.isLoading = true
            this.error = null
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}tickets`
                console.log(getAccessToken())
                const response = await axios.get(url ,{
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                } );
                this.tickets = [...response.data]
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },

        async updateTicket(obj, ticket_id){
            this.isLoading = true
            this.error = null
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}tickets/${ticket_id}`
                console.log(getAccessToken())
                const response = await axios.patch(url ,obj,{
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                } );
                this.getAllTickets()
                this.updatedTicket = {...response.data}
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },

        async getSingleTicket(ticket_id){
            this.isLoading = true
            this.error = null
            try {
                const url =  `${import.meta.env.VITE_APP_BASE_URL}tickets/${ticket_id}`
                console.log(getAccessToken())
                const response = await axios.get(url,{
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                } );
                this.scannedTicket = {...response.data}
            }catch (e){
                this.error = e
            }
            this.isLoading = false
        },


    }
})