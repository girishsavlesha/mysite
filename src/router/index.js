import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../components/assignment/Users.vue'
import Posts from '../components/assignment/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/assignment',
    name: 'Assignment',
    component: () => import(/* webpackChunkName: "Api" */ '../components/assignment/Api.vue'),
  },
  {
    path: '/assignment/users',
    component: Users,
    children: [
      {path: '', component: Users},
      {path: ':id/posts', component: Posts}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
