<template>
   <v-dialog v-model="messageStore.showMessage" width="550">
    <v-card>
        <v-card-text>
            <p>{{ messageStore.message }}</p>
        </v-card-text>
    </v-card>
   </v-dialog>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/store/message';


const messageStore = useMessageStore();
</script>

<style lang="scss"></style>
