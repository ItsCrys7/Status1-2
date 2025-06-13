import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../components/HomePage.vue')
    },
    {
      path: '/temp1',
      name: 'Temp 1',
      component: () => import('../components/Temp1.vue')
    },
    {
      path: '/temp2',
      name: 'Temp 2',
      component: () => import('../components/Temp2.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../components/About.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../components/Projects.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../components/Account.vue')
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../components/Help.vue')
    },
    {
      path: '/profil',
      name: 'Profile',
      component: () => import('../components/Profil.vue')
    },
    {
      path: '/AboutYou',
      name: 'About You',

      component: () => import('../components/AboutYou.vue')
    }
  ]
})

export default router
