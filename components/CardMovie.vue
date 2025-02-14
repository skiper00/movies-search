<template>
  <v-row>
    <v-col v-for="(movie, index) in moviesStore.movies?.results" :key="index" cols="3">
      <v-card class="card-movie" color="transparent">
        <div class="image-wrapper">
          <v-img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            rounded="lg"
          >
          </v-img>
          <ScoreCircle :score="movie.vote_average" />
        </div>
        <v-card-text class="px-0 mt-1">
          <p class="text-h6">{{titleStrings(movie.original_title)  }}</p>
          <p class="mt-2 text-grey text-h6">{{ movie.release_date }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>


<script setup lang="ts">
import { useMoviesStore } from "@/store/movies";
const moviesStore = useMoviesStore();


const titleStrings = (title: string) => {
  return `${title.length > 25 ? title.slice(0, 25) + "..." : title}`;
};
</script>

<style lang="scss">
.image-wrapper {
  position: relative;
}</style>
