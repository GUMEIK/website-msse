import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// import videoList from './views/videoList.vue'
import fistPage from './views/fistPage.vue'

// import headerContent from './components/theFirstPage/headerContent.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name:'Home',
      path:'/',
      component:fistPage
    },
    {
      name:'videoList',
      path:'/videoList',
      component:()=> import('./views/videoList.vue')
    },
    {
      name:'itemCentor',
      path:'/itemCentor',
      component:()=>import('./views/itemCentor.vue')
    },
    {
      name:'conclusion',
      path:'/conclusion',
      component:()=>import('./views/conclusion.vue')
    }

    
   
  ]
})
