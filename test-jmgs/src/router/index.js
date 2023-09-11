import { createRouter, createWebHistory } from 'vue-router'
//import Productos from '../views/ProductosView.vue';
//import Carrito from '../views/CarritoView.vue';
//import Contacto from '../views/ContactoView.vue';

const routes = [
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/ProductosView.vue'),
  },
  {
    path: '/productos',
    name:'Productos',
    component: () => import('../views/ProductosView.vue'),
  },
  {
    path: '/carrito',
    name:'Carrito',
    component: () => import('../views/CarritoView.vue'),
  },
  {
    path: '/login',
    name:'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/contacto',
    name:'Contacto',
    component: () => import('../views/ContactoView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
