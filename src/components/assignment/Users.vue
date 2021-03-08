<template>
    <div>
        <ul v-if="!$route.params.id" class="lg:text-center">
          <li class="font-bold text-5xl my-7">Users</li>
          <li v-for="val in data" :key="val.index" class="py-4">
              <router-link :to="{path: '/assignment/users/' + val.id +'/posts', query: {author: val.name}}">{{val.name}}</router-link>            
          </li>
      </ul>
    <router-view></router-view>
    </div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    name: 'Users',
    data(){
       return{
           'apiEndPoint': 'https://gorest.co.in/public-api/users',
           'data':''
       }
    },
    mounted(){
        axios.get(this.apiEndPoint).then((response) => {
            this.data = response.data.data;
        })
    }
}
</script>

<style>

</style>