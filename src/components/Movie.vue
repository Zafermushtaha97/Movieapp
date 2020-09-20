<template>
    <div class="movie">
        <div class="overlay">
         <Navbar></Navbar>
        <v-container class="mt-16 white--text">
            <v-layout row wrap v-if="SingleMOvie">
                <v-flex xs8 md6 lg3 class="mr-8"  :class="{'mx-16': $vuetify.breakpoint.smAndDown}">
                    <v-img :src="SingleMOvie.Poster" min-height="425" class="rounded-lg"
                    ></v-img>
                    <transition name="slide-fade">
                    <div class="reviewcircle" v-if="true">
                        <div>{{SingleMOvie.imdbRating}}</div>
                    </div>
                      </transition>
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
         <particles></particles>
    </div>
    </div>
</template>

<script>
 import axios from 'axios'
//import Api from '@/services/Api'
export default {
    props:["id"],
    data(){
        return{
            SingleMOvie:null,
           
        }
    },
    computed:{
        movierating(){
            return this.SingleMOvie.imdbRating/2
        }
    },
    mounted() {
 axios.get(`https://www.omdbapi.com/?apikey=51b28eb&i=${this.id}&Content-Type=application/json`)
    // Api.fetchSingleMovie(this.id)
   .then(res =>{
       this.SingleMOvie = res.data
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
 
    position: relative;
    top:0;
}
@media (max-width: 550px) {
    .movie{
        height: 70em;
    }
}
@media (max-width: 760px) {
    .movie{
        height: 84em;
    }
}
@media (min-width: 761px){
    .movie{
        height: 95em;
    }
}
@media ( min-width: 992px) {
    .movie{
        height: 100em;
    }
}
@media (min-width: 1200px) {
    .movie{
        height: 720px;
    }
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

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media (max-width: 600px) {
    .reviewcircle{
    position: absolute;
    left: 35px;
    top: 100px;
    width: 60px;
    height: 60px;
    padding-top: 18px;
    border-radius: 100%;
    background-color: #f1b722;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    }
}
@media (min-width: 600px) {
      .reviewcircle{
    position: absolute;
    left: 35px;
    top: 100px;
    width: 60px;
    height: 60px;
    padding-top: 18px;
    border-radius: 100%;
    background-color: #f1b722;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    }
}@media  (min-width: 768px) {
.reviewcircle{
   position: absolute;
    left: 25px;
    top: 100px;
    width: 75px;
    height: 75px;
    padding-top: 23px;
    border-radius: 100%;
    background-color: #f1b722;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    }
}

@media  (min-width: 992px) {
.reviewcircle{
    position: absolute;
    left: 38px;
    top: 91px;
    width: 90px;
    height: 90px;
    padding-top: 35px;
    border-radius: 100%;
    background-color: #f1b722;
    font-size: 35px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;

}
}
@media (min-width: 1200px) {
.reviewcircle{
    position: absolute;
    left: 107px;
    top: 92px;
    width: 100px;
    height: 100px;
    padding-top: 35px;
    border-radius: 100%;
    background-color: #f1b722;
    font-size: 35px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    }
}
</style>