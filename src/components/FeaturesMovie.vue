<template>
    <div class="mt-12" >
    <v-container  v-if="loader">
        <scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
  </v-container>

    <v-container v-else grid-list-xl>
    <v-layout wrap>
    <v-flex lg3 md4 sm12 xs12
        v-for="(item, index) in movies"
        :key="index"
        mb-2
        class="white--text"
         :class="{'mx-12': $vuetify.breakpoint.smAndDown}">
        
        <v-hover>
            <template v-slot="{ hover }">
               <v-img
            :src="item.Poster"
            aspect-ratio=".6"
            @click="SingleMOvie(item.imdbID)"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="rounded-lg"
        ></v-img>
            </template>
        </v-hover>
       <v-hover>
           <template v-slot="{ hover }">
            <v-card-title class="subtitle movietitle mt-6" :class="{ 'on-hover-title': hover }" @click="SingleMOvie(item.imdbID)">
            {{item.Title}} 
            </v-card-title>
           </template>
       </v-hover>
     
        <v-card-subtitle class="subtitle">
            <div>Year: {{item.Year}}</div>
        </v-card-subtitle>
    </v-flex>
    </v-layout>
</v-container>
    </div>
</template>
<script>
 import axios from 'axios'
// import Api from '@/services/Api'
export default {
    data(){
        return{
            movies:[],
            loader:true
        }
    },
    components:{
    },
    methods:{
        SingleMOvie(id){
            this.$router.push('/movies/' +id)
            
        }
    },
    mounted(){
        axios.get('https://www.omdbapi.com/?apikey=51b28eb&s=american&y=2018&Content-Type=application/json')
        // Api.fetchMovieCollection('american')
        .then(res =>{
            this.movies = res.data.Search
            this.loader = false
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@700&display=swap');
    .movietitle{
    font-family: 'Catamaran', sans-serif;
    font-size: 20px;
    }
    .on-hover{
        opacity: 0.6;
       cursor: pointer;
        transition: opacity .4s ease-in-out;
    }
    .on-hover-title{
         cursor: pointer;
         text-decoration: underline;
         transition: opacity .4s ease-in-out;
    }
</style>