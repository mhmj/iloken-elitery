import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import PartnersPage from './pages/PartnersPage.vue'
import ElasticPartnerPage from './pages/ElasticPartnerPage.vue'
import AWSPartnerPage from './pages/AWSPartnerPage.vue'
import AboutPage from './pages/AboutPage.vue'
import CareersPage from './pages/CareersPage.vue'
import JobDetailPage from './pages/JobDetailPage.vue'
import CaseStudyPage from './pages/CaseStudyPage.vue'
import ITProjectManagementPage from './pages/ITProjectManagementPage.vue'
import ConsultationSystemIntegrationPage from './pages/ConsultationSystemIntegrationPage.vue'
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage.vue'
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage.vue'
import BigDataAnalyticsPage from './pages/BigDataAnalyticsPage.vue'
import ManagedSecurityServicePage from './pages/ManagedSecurityServicePage.vue'
import DisasterRecoveryServicePage from './pages/DisasterRecoveryServicePage.vue'
import GenerativeAIServicePage from './pages/GenerativeAIServicePage.vue'
import DBInsightsPage from './pages/DBInsightsPage.vue'
import MediaInsightsPage from './pages/MediaInsightsPage.vue'
import CloudManagedServicePage from './pages/CloudManagedServicePage.vue'
import EventsPage from './pages/EventsPage.vue'
import EBookPage from './pages/EBookPage.vue'
import EBookDetailPage from './pages/EBookDetailPage.vue'
import WhitepaperPage from './pages/WhitepaperPage.vue'
import ArticlesPage from './pages/ArticlesPage.vue'
import ArticleDetailPage from './pages/ArticleDetailPage.vue'
import EventDetailPage from './pages/EventDetailPage.vue'
import WhitepaperDetailPage from './pages/WhitepaperDetailPage.vue'
import ContactPage from './pages/ContactPage.vue'
import CaseStudyListPage from './pages/CaseStudyListPage.vue'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/partners', name: 'Partners', component: PartnersPage },
  { path: '/partners/elastic', name: 'ElasticPartner', component: ElasticPartnerPage },
  { path: '/partners/aws', name: 'AWSPartner', component: AWSPartnerPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/careers', name: 'Careers', component: CareersPage },
  { path: '/careers/:id', name: 'JobDetail', component: JobDetailPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/case-studies', name: 'CaseStudies', component: CaseStudyListPage },
  { path: '/case-studies/:id', name: 'CaseStudy', component: CaseStudyPage },
  { path: '/case-study/:id', name: 'CaseStudyDetail', component: CaseStudyDetailPage },
  { path: '/services/it-project-management', name: 'ITProjectManagement', component: ITProjectManagementPage },
  { path: '/services/consultation-system-integration', name: 'ConsultationSystemIntegration', component: ConsultationSystemIntegrationPage },
  { path: '/services/software-development', name: 'SoftwareDevelopment', component: SoftwareDevelopmentPage },
  { path: '/services/mobile-app-development', name: 'MobileAppDevelopment', component: MobileAppDevelopmentPage },
  { path: '/services/big-data-analytics', name: 'BigDataAnalytics', component: BigDataAnalyticsPage },
  { path: '/services/managed-security-service', name: 'ManagedSecurityService', component: ManagedSecurityServicePage },
  { path: '/services/disaster-recovery-service', name: 'DisasterRecoveryService', component: DisasterRecoveryServicePage },
  { path: '/services/generative-ai-service', name: 'GenerativeAIService', component: GenerativeAIServicePage },
  { path: '/services/dbinsights', name: 'DBInsights', component: DBInsightsPage },
  { path: '/services/mediainsights', name: 'MediaInsights', component: MediaInsightsPage },
  { path: '/services/cloud-managed-service', name: 'CloudManagedService', component: CloudManagedServicePage },
  { path: '/insights/events', name: 'Events', component: EventsPage },
  { path: '/insights/events/:id', name: 'EventDetail', component: EventDetailPage },
  { path: '/insights/ebooks', name: 'EBooks', component: EBookPage },
  { path: '/insights/ebooks/:id', name: 'EBookDetail', component: EBookDetailPage },
  { path: '/insights/whitepapers', name: 'Whitepapers', component: WhitepaperPage },
  { path: '/insights/whitepapers/:id', name: 'WhitepaperDetail', component: WhitepaperDetailPage },
  { path: '/insights/articles', name: 'Articles', component: ArticlesPage },
  { path: '/insights/articles/:id', name: 'ArticleDetail', component: ArticleDetailPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
