import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import PartnersPage from './pages/PartnersPage.vue'
import AboutPage from './pages/AboutPage.vue'
import CareersPage from './pages/CareersPage.vue'
import JobDetailPage from './pages/JobDetailPage.vue'
import CaseStudyPage from './pages/CaseStudyPage.vue'
import ITProjectManagementPage from './pages/ITProjectManagementPage.vue'
import ConsultationSystemIntegrationPage from './pages/ConsultationSystemIntegrationPage.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/partners', name: 'Partners', component: PartnersPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/careers', name: 'Careers', component: CareersPage },
  { path: '/careers/:id', name: 'JobDetail', component: JobDetailPage },
  { path: '/case-studies/:id', name: 'CaseStudy', component: CaseStudyPage },
  { path: '/services/it-project-management', name: 'ITProjectManagement', component: ITProjectManagementPage },
  { path: '/services/consultation-system-integration', name: 'ConsultationSystemIntegration', component: ConsultationSystemIntegrationPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
