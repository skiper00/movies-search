import { defineStore } from "pinia";
import { type Ref, ref } from "vue";


export const useMessageStore = defineStore('message', () => {
    
const showMessage:Ref<boolean> = ref(false);
const message:Ref<string> = ref('');


return{
    showMessage,
    message
}
})
