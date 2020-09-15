<template>

 
    <div class="movie">
        <div class="overlay">
         <Navbar></Navbar>
        <v-container class="mt-16 white--text">
            <v-layout row wrap v-if="SingleMOvie">
                <v-flex xs3 class="mr-8">
                    <v-img :src="SingleMOvie.Poster" max-height="425" class="rounded-lg"></v-img>
                </v-flex>
                <v-flex xs7 class="ml-12 mt-6">
                    <p class="heading movietitle">{{SingleMOvie.Title}} <span>{{SingleMOvie.Year}}</span></p>
                    <p><v-icon class="amber--text darken-1--text">mdi-clock</v-icon>{{SingleMOvie.Runtime}}</p>
                    <span class="mdi mdi-name"></span>
                    <div class="d-flex">
                        <div class="director">Director :</div>
                        <div class="ml-8 director-name">{{SingleMOvie.Director}}</div>
                    </div>
                    <div class="my-4">   
                        <star-rating  :rating="movierating" increment=0.01 read-only	star-size=35
                        round-start-rating=false :show-rating="false"  active-color="#FFCA28" border-color="transparent" inactive-color="#F5F5F5" border-width=0				></star-rating>
                    </div>
                    <div class="d-flex">
                        <div class="lang">Language:</div>
                        <div class="langs ml-8"> 
                          {{SingleMOvie.Language}}
                        </div>
                    </div>
                    <div class="my-4 plot">
                        {{SingleMOvie.Plot}}
                    </div>
                </v-flex>              
              
            </v-layout>
        </v-container>
    </div>
    </div>
</template>

<script>
// import axios from 'axios'
import Api from '@/services/Api'
export default {
    props:["id"],
    data(){
        return{
            SingleMOvie:null
        }
    },
    computed:{
        movierating(){
            return this.SingleMOvie.imdbRating/2
        }
    },
    mounted() {
//    axios.get(`http://www.omdbapi.com/?apikey=51b28eb&i=${this.id}&Content-Type=application/json`)
    Api.fetchSingleMovie(this.id)
   .then(res =>{
       this.SingleMOvie = res
   })
},
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
.movie{
    background-image: url(https://assets.website-files.com/59f5ae906a27c400013267f0/5d2d9d69b1d789deb64dbca7_Photo-2.jpg);
    background-position: center;
    background-size: cover;
    height: 720px;
      position: relative;
    top:0;
}
.movietitle{
    font-family: 'Catamaran', sans-serif;
    font-size: 3em;
}
 .overlay{
      position: absolute;
    background-color: #0e151db8;
    width: 100%;
    height: 100%;
    top: 0;
}
.director{
    font-family: 'Catamaran', sans-serif;
    font-size:1.1em !important;
}
.director-name{
    font-size: 17px;
}.lang{
     font-family: 'Catamaran', sans-serif;
    font-size:1.1em !important;
}
.langs{
    font-size: 17px;
}
.plot{
    font-family: 'Roboto', sans-serif;
    line-height: 1.8;
    font-size: 17px;


}
</style>