import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import('@/views/Login.vue')
const BackendSideBar = () => import('@/views/BackendSideBar.vue')
const Analysis = () => import('@/views/Analysis/Analysis.vue')

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/backend',
    name: 'BackendSideBar',
    component: BackendSideBar,
    children: [
      // 使用者分析
      {
        path: 'analysis',
        name: 'Analysis',
        component: Analysis,
        meta: {
          title: '使用者分析',
        },
      },
    ]

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
