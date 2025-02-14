<template>
  <div class="circle">
    <v-progress-circular
      :model-value="score * 10"
      :color="color"
      :bg-color="bgColor"
      size="45"
      width="5"
    >
      <p class="text-black font-weight-bold">{{ score.toFixed(1) }}</p>
    </v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  score:{
    type:Number,
    required:true
  }
})

const color = computed(() => {
  return props.score >= 9 ? '#FFFF00' : props.score >= 7 ? 'green' : props.score >= 5 ? 'orange' : 'red'
})
const bgColor = computed(() => { 
  return  props.score >= 9 ? '#F9A825'  : props.score >= 7 ? '#2E7D32' : props.score >= 5 ? '#E65100' : '#D50000'
})
</script>

<style lang="scss">
    .circle {
      width: 48px;
      height: 48px;
      background-color: #fff;
      position: absolute;
      bottom: -20px;
      left: 8px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>
