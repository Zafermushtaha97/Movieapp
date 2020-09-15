<template>
    <div>
    <v-card elevation="1" class="rounded-0">
    <v-toolbar  dark class="cyan lighten-1">
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Movie App
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
    
        <v-text-field
          label='Search Movie Name'
          v-model='searchtext'
          hide-details
        single-line
        prepend-icon="mdi-magnify">
        </v-text-field>
        </v-flex>
      <v-btn
        text
        href="#"
        @click="searchMovie"
      >
        <span class="mr-2">Search</span>
      </v-btn>
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
    
</style>