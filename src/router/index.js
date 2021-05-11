import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Send from '../views/Send.vue'
import Received from '../views/ReceivedPage.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { isPublic: true}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/send',
    name: 'Send',
    component: Send
  },
  {
    path: '/received',
    name: 'Received',
    component: Received
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => !record.meta.isPublic) && !localStorage.getItem('access-token')) {
    next({ name: 'Login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
