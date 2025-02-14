<template>
  <v-app id="inspire">
    <v-app-bar color="#111827">
      <v-container class="d-flex align-center">
        <v-icon size="48">mdi-movie-open-play</v-icon>

<v-app-bar-title class="text-h5 ml-4">Movie Search</v-app-bar-title>

<v-text-field
v-model="moviesStore.searchString"
variant="outlined"
density="compact"
hide-details
append-inner-icon="mdi-magnify"
label="Search"
@keyup.enter="moviesStore.searchMovies"
>
</v-text-field>
      </v-container>
  
    </v-app-bar>
    <v-main>
      <slot />
      <Message />
    </v-main>
  </v-app>

</template>

<script lang="ts" setup>
import { useMoviesStore } from '@/store/movies';

const moviesStore = useMoviesStore();


</script>

<style lang="scss"></style>
