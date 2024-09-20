import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "Main"*/ '../views/MainView.vue'),
      children: [
        { path: '', name: 'index', component: () => import(/* webpackChunkName: "IndexView" */ '../views/IndexView.vue')},
        { path: '/profile', component: () => import(/* webpackChunkName: "ProfileView" */ '../views/ProfileView.vue') },
        { path: '/favorites', component: () => import(/* webpackChunkName: "FavoritesView" */ '../views/FavoritesView.vue') },
        { path: '/cart', component: () => import(/* webpackChunkName: "CartView" */ '../views/CartView.vue') },
        { path: '/checkout', component: () => import(/* webpackChunkName: "CheckoutView" */ '../views/CheckoutView.vue') },
        { path: '/details/:id', component: () => import(/* webpackChunkName: "ProductDetails" */ '../views/ProductDetailsView.vue') },
      ]
    },
    { path: '/login', component: () => import(/* webpackChunkName: "LoginView" */ '../views/auth/LoginView.vue') },
    { path: '/register', component: () => import(/* webpackChunkName: "RegisterView" */ '../views/auth/RegisterView.vue') },
    { path: '/forgot', component: () => import(/* webpackChunkName: "ForgotView" */ '../views/auth/ForgotPasswordView.vue') },
    { path: '/reset', component: () => import(/* webpackChunkName: "ResetView" */ '../views/auth/ResetPasswordView.vue') },
    { path: '/:catchAll(.*)*', component: () => import(/* webpackChunkName: "ErrorNotFound" */ '../views/ErrorNotFound.vue') }
  ]
})

export default router
