import { defineStore } from 'pinia'
export const userStore = defineStore('user', {
    state(){
        return{
            info: null,
        }
    }
})
// export default userStore