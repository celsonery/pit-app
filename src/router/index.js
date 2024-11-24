import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView'
import IndexView from '@/views/IndexView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        { path: '', name: 'index', component: IndexView },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "ProfileView" */ '@/views/ProfileView'),
          meta: { auth: true }
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import(/* webpackChunkName: "FavoritesView" */ '@/views/FavoritesView'),
          meta: { auth: true }
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import(/* webpackChunkName: "CartView" */ '@/views/CartView'),
          meta: { auth: true }
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import(/* webpackChunkName: "CheckoutView" */ '@/views/CheckoutView'),
          meta: { auth: true }
        },
        {
          path: '/details/:id',
          name: 'details',
          component: () =>
            import(/* webpackChunkName: "ProductDetails" */ '@/views/ProductDetailsView')
        },
        {
          path: '/orders/:id',
          name: 'orders',
          component: () =>
            import(/* webpackChunkName: "OrderDetails" */ '@/views/OrderDetailsView')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "LoginView" */ '@/views/auth/LoginView')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "RegisterView" */ '@/views/auth/RegisterView')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () =>
        import(/* webpackChunkName: "ForgotView" */ '@/views/auth/ForgotPasswordView')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () =>
        import(/* webpackChunkName: "VerifyView" */ '@/views/auth/ForgotPasswordVerify.vue')
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import(/* webpackChunkName: "ResetView" */ '@/views/auth/ResetPasswordView')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'default',
      component: () => import(/* webpackChunkName: "ErrorNotFound" */ '@/views/ErrorNotFound')
    }
  ]
})

export default router
