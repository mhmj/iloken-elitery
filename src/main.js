import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import PartnersPage from './pages/PartnersPage.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/partners', name: 'Partners', component: PartnersPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
