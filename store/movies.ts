import { defineStore } from "pinia";
import { useDateFormat } from "@vueuse/core";
import { useMessageStore } from "@/store/message";
import { type Ref, ref } from "vue";
import { useRuntimeConfig } from "nuxt/app";

interface Movies {
    id: number;
    original_title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
  }
  
  interface Results {
    total_pages: number;
    total_results: number;
    results: Movies[];
  }
  
export const useMoviesStore = defineStore('movies', () => {

    const searchString: Ref<string> = ref("");
    const page: Ref<number> = ref(1);
    const runtimeConfig = useRuntimeConfig();
    const movies: Ref<Results | null> = ref(null);
    const messageStore = useMessageStore();
    const loading: Ref<boolean> = ref(false);
    
    const featureMovies = async () => {
      try {
          loading.value = true;
          const response: Results = await $fetch(
            `https://api.themoviedb.org/3/discover/movie?page=${page.value}&api_key=${runtimeConfig.public.apiKey}`
          );
          console.log(response);
          movies.value = {
            ...response,
            total_pages: Math.min(response.total_pages, 500),
            results: response.results.slice(0, 12).map((movie: any) => {
              return {
                ...movie,
                release_date: useDateFormat(new Date(movie.release_date), "MMMM YYYY", {
                locales: "en-US",
              }),
              original_title: movie.original_title,
              vote_average: movie.vote_average,
            };
          })
        }
        loading.value = false;
      } catch (error) {
        messageStore.showMessage = true;
        loading.value = false;
        messageStore.message = error as string;
      }
    }

      const searchMovies = async () => {
        try {
          loading.value = true;
          const response: Results = await $fetch(
            `https://api.themoviedb.org/3/search/movie?page=${page.value}&query=${searchString.value}&api_key=${runtimeConfig.public.apiKey}`
          );
          console.log(response);
          movies.value = {
            ...response,
            total_pages: Math.min(response.total_pages, 500),
            results: response.results.map((movie: any) => {
              return {
                ...movie,
                release_date: useDateFormat(new Date(movie.release_date), "MMMM YYYY", {
                locales: "en-US",
              }),
              original_title: movie.original_title,
              vote_average: movie.vote_average,
            };
          })
        }
        loading.value = false;
      } catch (error) {
        messageStore.showMessage = true;
        loading.value = false;
        messageStore.message = error as string;
      }
    }
    

      
      return {
        searchMovies,
        featureMovies,
        movies,
        searchString,
        page,
        loading
      }
    
})
