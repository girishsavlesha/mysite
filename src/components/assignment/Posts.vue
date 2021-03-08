<template>
     <div class="lg:text-center px-20">
         <h1 class="text-6xl mt-28">{{author}}</h1>
         <div v-if="data==''" class="mt-20 text-3xl">No posts</div>
         <ul>
            <li v-for="val in data" :key="val.index" class="py-4">
              <h2 class="text-5xl font-bold py-20">{{val.title}}</h2>   
              <p>{{val.body}}</p> 
          </li>
         </ul>
     </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    name: 'Posts',
    data(){
       return{
           'apiEndPoint': 'https://gorest.co.in/public-api/users/',
           'data':'',
           'param': this.$route.params.id,
           'author': this.$route.query.author,
       }
    },
    mounted(){
        console.log(this.$route)
        axios.get(this.apiEndPoint + this.param + '/posts').then((response) => {
            this.data = response.data.data;     
        })
    }
}
</script>

<style>

</style>