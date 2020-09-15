<template>

   <v-container class="mt-6" v-if="loader">
        <scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in movieResponse"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn rounded
              color="green"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
            <v-btn rounded color="green">Visit site</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios'
import Api from '@/services/Api'
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
    GetResultSearch (value) {
      // const url = 'http://www.omdbapi.com/?apikey=b76b385c&Content-Type=application/json' + '&s=' + value
      // axios
      //   .get(url)
      Api.fetchMovieCollection(value)
        .then(response => {
          this.movieResponse = response.Search
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