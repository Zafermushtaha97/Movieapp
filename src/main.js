import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Navbar from '@/components/Navbar'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import StarRating from 'vue-star-rating'
import particles from "./components/particles";
import * as firebase from "firebase"


// import axios from 'axios'
Vue.config.productionTip = false
Vue.component('Navbar',Navbar)
Vue.component('ScaleLoader',ScaleLoader)
Vue.component('star-rating', StarRating);
Vue.component('particles',particles)


// axios.defaults.baseURL = 'https://www.omdbapi.com/?apikey=51b28eb&y=2018&type=movie&Content-Type=application/json'
new Vue({
  router,
  store,
  vuetify,
  created(){
    firebase.initializeApp({
      piKey: "AIzaSyD8UQ9FKnIo4q5DI3UT0GhlZZeW1Fc5nwc",
    authDomain: "movie-app-v1.firebaseapp.com",
    databaseURL: "https://movie-app-v1.firebaseio.com",
    projectId: "movie-app-v1",
    storageBucket: "movie-app-v1.appspot.com",
    messagingSenderId: "447003787216",
    appId: "1:447003787216:web:2ee34d8e2db1a9d5d183d5",
    measurementId: "G-9XJ72ZBRR9"
    })
  },
  render: h => h(App)
}).$mount('#app')
