<template>
  <v-container>
    <h2 class="mt-16 mb-6">Feature today</h2>
    <v-row dense v-if="moviesStore.loading">
      <v-col
        class="pa-1"
        v-for="n in 12"
        :key="n"
        cols="3"
      >
      <v-skeleton-loader
      class="skeleton-card"
      color="transparent"
      type="image"
      ></v-skeleton-loader>
    </v-col>
  </v-row>
  <CardMovie v-else />
    <v-pagination
      v-model="moviesStore.page"
      active-color="pink"
      :length="moviesStore.movies?.total_pages"
      @update:modelValue="onPageChange"
    >
    </v-pagination>
  </v-container>
</template>

<script lang="ts" setup>
import { useMoviesStore } from "@/store/movies";
import { onBeforeMount } from "vue";
const moviesStore = useMoviesStore();

onBeforeMount(() => {
  moviesStore.featureMovies();
});

const onPageChange = () => {
  if (moviesStore.searchString.trim() === "") {
    moviesStore.featureMovies();
  } else {
    moviesStore.searchMovies();
  }
};
</script>

<style lang="scss" scoped>
.skeleton-card:deep(.v-skeleton-loader__bone) {
  height: 411px !important;
  border-radius: 8px !important;
}
</style>
