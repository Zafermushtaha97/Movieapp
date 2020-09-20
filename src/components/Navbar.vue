<template>
    <div >
    <v-card elevation="1" class="rounded-0">
  <v-toolbar  dark style="background: #0c2738;">
     <v-container class="d-flex align-center ">
       <v-flex>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        class="yellow--text darken-2--text"
        style='cursor: pointer'>
        <div class="d-flex align-center pt-4 logo ">
          <p class="logo-text"><v-icon class="yellow--text darken-3--text" style="font-size:1.3em">mdi-movie-open-outline</v-icon> Movies</p>
          <p class="logo-text-p2">App</p>
        </div>
        </router-link>
      </v-toolbar-title>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex  xs5 sm4 md3>
       <form class="d-flex" @submit.prevent="searchMovie">
        <v-text-field
          label='Search Movie ...'
          v-model='searchtext'
          hide-details
          solo
          light
          rounded
          color="yellow darken-1"
        single-line
        append-icon="mdi-magnify">
        </v-text-field>
        
      <!-- <v-btn
        text
        href="#"
        @click="searchMovie">
        <span class="mr-2">Search</span>
      </v-btn> -->
      </form>
      </v-flex>
       </v-container>
    </v-toolbar>
   
    </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchtext:'',
        }
    },
    methods:{
        searchMovie(){
            this.$router.push('/search/'+this.searchtext)
            this.searchtext=''
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Lobster&display=swap');
.logo-text{
  font-family: 'Lobster', cursive;
}
.logo-text-p2{
  font-family: 'Architects Daughter', cursive;
}
.logo{
  font-size: 1.3em;
  color: #FAFAFA;
}
</style>