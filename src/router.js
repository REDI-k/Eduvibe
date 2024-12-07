import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/HomePage.vue';
import Store from '../src/StorePage.vue';
import LoginPage from './LoginPage.vue';
import SignUp from './SignUp.vue';
import NotFound from './NotFound.vue';
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Store', name: 'Store', component: Store },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/SignUp', name: 'SignUp', component: SignUp },
   {path: '/:pathMatch(.*)*',name:'not-found',component:NotFound},
    
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
