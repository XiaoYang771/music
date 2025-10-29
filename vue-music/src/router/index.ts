import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LikeMusic from '@/components/LikeMusic.vue'
import AddMusics from '@/components/AddMusics.vue'
import MusicTalk from '@/components/MusicTalk.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/homemusic'
    },
    {
      path:'/homemusic',
      component:HomePage,
      children:[
        // {
        //   path: 'likemusic',
        //   component: LikeMusic
        // },
        {
          path: 'addmusic',
          component: AddMusics
        },
        {
          path: 'musictalk',
          component: MusicTalk
        }
      ]
    },
    {
      path: '/likemusic',
      component: LikeMusic
    },
    {
      path: '/addmusic',
      component: AddMusics
    },
    {
      path: '/musictalk',
      component: MusicTalk
    }
  ],
})

export default router
