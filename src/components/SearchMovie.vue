<template>
<div style="background:#081b27">
   <Navbar></Navbar>
   <v-container class="mt-12" v-if="loader">
        <scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
  </v-container>

  <v-container v-else grid-list-xl class="mt-16 ">
    <v-layout wrap class="mx-auto"
        v-for="(item, index) in movieResponse"
        :key="index"
        
        mb-2> 
          <v-flex xs3>
            <v-hover>
            <template v-slot="{ hover }">
            <v-img
              :src="item.Poster"
              aspect-ratio=".7"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              @click="singleMovie(item.imdbID)"
            ></v-img>
               </template>
          </v-hover>
          </v-flex>
          <v-flex xs7>
          <v-card-title primary-title>
            <div>
            <v-hover>
           <template v-slot="{ hover }">
            <h2 class="movietitle amber--text lighten-1--text" :class="{ 'on-hover-title': hover }"  
              @click="singleMovie(item.imdbID)">
              {{item.Title}}
              </h2>
              </template>
            </v-hover>
              <div class="movieyear mt-3 font-weight-regular">{{item.Year}}</div>
            </div>
          </v-card-title>

          <!-- <v-card-actions>
            <v-btn rounded
              color="green"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions> -->
        </v-flex>


  </v-layout>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios'
// import Api from '@/services/Api'
export default {
  props: ["moviename"],
  data () {
    return {
      movieResponse: [],
      loader: true
    }
  },

  // mounted () {
  //   const url =  'http://www.omdbapi.com/?apikey=51b28eb&Content-Type=application/json' + '&s=' + this.moviename
  //   axios.get(url).then(response => {
  //       this.movieResponse = response.data.Search
  //       this.loader = false
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  methods: {
    singleMovie (id) {
      this.$router.push('/movies/' + id)
    },
    GetResultSearch (moviename) {
      const url = 'https://www.omdbapi.com/?apikey=b76b385c&Content-Type=application/json' + '&s=' + moviename
      axios
        .get(url)
      // Api.fetchMovieCollection(value)
        .then(response => {
          this.movieResponse = response.data.Search
          this.loader = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
   mounted () {
    this.GetResultSearch(this.moviename)
  },
  watch:{
    moviename(value){
      this.GetResultSearch(value)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
  .movieyear{
     font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFFDE7;
  }
  .movietitle{
    font-size: 2em;
  }
  .on-hover{
    opacity: 0.6;
    cursor: pointer;
    transition: opacity .2s ease-in-out;
    }
      .on-hover-title{
         cursor: pointer;
         text-decoration: underline;
         transition: opacity .4s ease-in-out;
    }
</style>
