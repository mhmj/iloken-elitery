<template>
  <div class="case-study-detail">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <nav class="breadcrumb">
              <router-link to="/case-studies" class="breadcrumb-link">Case Study</router-link>
              <svg class="breadcrumb-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.74167 13.2333L10.975 10L7.74167 6.76667C7.41667 6.44167 7.41667 5.91667 7.74167 5.59167C8.06667 5.26667 8.59167 5.26667 8.91667 5.59167L12.7417 9.41667C13.0667 9.74167 13.0667 10.2667 12.7417 10.5917L8.91667 14.4167C8.59167 14.7417 8.06667 14.7417 7.74167 14.4167C7.42501 14.0917 7.41667 13.5583 7.74167 13.2333Z" fill="#3AAE51"/>
              </svg>
              <span class="breadcrumb-current">CyberSecurity Malaysia Enhanced Threat Intelligence ...</span>
            </nav>
            
            <h1 class="page-title">CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies</h1>
            <div class="title-underline"></div>
            
            <button class="btn btn-primary cta-button">Talk to Our Expert</button>
          </div>
          
          <div class="hero-image">
            <div class="image-overlay"></div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d4e24ff99183cd53c81597dfd41a64bcecf4272a?width=2258" alt="CyberSecurity Malaysia Case Study">
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <div class="content-grid">
          <aside class="sidebar">
            <div class="overview-card">
              <div class="company-logo">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/887499719f77ae35dc70cb9f993bfc494efc9b7b?width=670" alt="CyberSecurity Malaysia">
              </div>
              
              <div class="overview-content">
                <h3 class="section-title">Overview</h3>
                <div class="title-underline small"></div>
                <p class="overview-text">
                  CyberSecurity Malaysia is the national technical agency under the Ministry of Digital Malaysia, focusing on cybersecurity services, technology solutions, training, and education. As a strategic organisation, CyberSecurity Malaysia addresses cybersecurity threats, drives international cooperation, and strengthens the nation's digital resilience.
                </p>
                <p class="overview-text">
                  Its core functions include:<br>
                  Operating The Malaysian Computer Emergency Response Team (MyCERT).<br>
                  Implementing the CyberSAFE Programme for public awareness and cybersecurity education.<br>
                  Developing incident detection systems, digital forensics, and threat analysis.<br>
                  Conducting cybersecurity risk assessments and policy advisory.<br>
                  Delivering professional cybersecurity training and certification.<br>
                  Conducting cybersecurity research and development (R&D).
                </p>
              </div>
            </div>
          </aside>

          <main class="main-content">
            <div class="content-sections">
              <section class="content-block">
                <h3 class="section-title">Highlights</h3>
                <div class="title-underline small"></div>
                <p class="section-text">
                  CyberSecurity Malaysia developed the Content Threat Profiling System to perform deep analysis of online content and cyber threats.<br>
                  The system leverages modern technologies such as Python, Neo4j, Elastic, Hortonworks, Java, and Angular for large-scale data processing.<br>
                  Capabilities include crawler robot development, natural language processing (NLP), sentiment analysis, topic modelling, and real-time data visualisation.
                </p>
              </section>

              <section class="content-block">
                <h3 class="section-title">Challenge</h3>
                <div class="title-underline small"></div>
                <p class="section-text">
                  CyberSecurity Malaysia needed to process massive volumes of cybersecurity data from multiple domestic and international sources. This data had to be indexed, analysed, and presented in an accessible format for decision-makers. The existing infrastructure faced challenges in processing efficiency, analysis speed, and seamless integration across different system components.
                </p>
              </section>

              <section class="content-block">
                <h3 class="section-title">Solution</h3>
                <div class="title-underline small"></div>
                <p class="section-text">
                  CyberSecurity Malaysia implemented the Content Threat Profiling System using a combination of open-source and modern data-processing technologies:<br>
                  Crawler Robot Development for automated data collection from various sources.<br>
                  Data Indexing & Graph Database with Neo4j to map relationships between threat entities.<br>
                  Natural Language Processing & Text Analytics using Python-based NLP libraries.<br>
                  Sentiment Analysis & Topic Modelling to understand content intent and context.<br>
                  Data Visualisation & Reporting through interactive web technologies (Angular) and intelligent search capabilities (Elastic).
                </p>
              </section>

              <section class="content-block">
                <h3 class="section-title">Benefits</h3>
                <div class="title-underline small"></div>
                <p class="section-text">
                  The implementation of this system provided significant value to CyberSecurity Malaysia:<br>
                  Accelerated data collection and threat analysis.<br>
                  Simplified visualisation of threat entity relationships for strategic insights.<br>
                  Improved incident response effectiveness through accurate and relevant intelligence.<br>
                  Reduced operational time and cost via automation of collection and analysis workflows.<br>
                  Strengthened national cybersecurity posture with up-to-date, reliable threat intelligence.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>

    <div class="related-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">More Case Study</h2>
          <div class="title-underline center"></div>
        </div>
        
        <div class="related-grid">
          <div 
            v-for="relatedCase in relatedCaseStudies" 
            :key="relatedCase.id" 
            class="case-study-card"
            @click="goToCaseStudy(relatedCase.id)"
          >
            <div class="card-image">
              <img :src="relatedCase.image" :alt="relatedCase.title">
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ relatedCase.title }}</h3>
              <p class="card-description">{{ relatedCase.description }}</p>
              <a href="#" class="read-more" @click.prevent="goToCaseStudy(relatedCase.id)">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyDetailPage',
  data() {
    return {
      relatedCaseStudies: [
        {
          id: 2,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575'
        },
        {
          id: 3,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575'
        },
        {
          id: 4,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575'
        },
        {
          id: 5,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575'
        }
      ]
    }
  },
  methods: {
    goToCaseStudy(id) {
      if (id !== this.$route.params.id) {
        this.$router.push(`/case-studies/${id}`);
      }
    }
  }
}
</script>

<style scoped>
.case-study-detail {
  min-height: 100vh;
}

.hero-section {
  background: #fff;
  padding: 132px 0 0;
  min-height: 500px;
  position: relative;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 400px;
}

.hero-text {
  max-width: 600px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 16px;
}

.breadcrumb-link {
  color: #B3B3B3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #3AAE51;
}

.breadcrumb-current {
  color: #3AAE51;
  font-weight: 700;
}

.breadcrumb-arrow {
  flex-shrink: 0;
}

.page-title {
  font-size: 36px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 8px;
  line-height: 1.3;
}

.title-underline {
  width: 40px;
  height: 4px;
  background: #3AAE51;
  margin-bottom: 30px;
}

.title-underline.small {
  margin-bottom: 20px;
}

.title-underline.center {
  margin: 8px auto 0;
}

.cta-button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #3AAE51;
  color: white;
  border: 1px solid #3AAE51;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}

.cta-button:hover {
  background: #2e8b41;
  border-color: #2e8b41;
}

.hero-image {
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(217, 217, 217, 0.00) 9.98%, rgba(115, 115, 115, 0.3) 99.99%);
  z-index: 1;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-section {
  padding: 100px 0;
  background: #fff;
}

.content-grid {
  display: grid;
  grid-template-columns: 530px 1fr;
  gap: 60px;
  align-items: flex-start;
}

.sidebar {
  position: sticky;
  top: 120px;
}

.overview-card {
  background: #fff;
  border: 1px solid #E7E7E7;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: 0 -1px 2px rgba(16, 24, 40, 0.02), 0 1px 3px rgba(16, 24, 40, 0.10), 0 1px 2px rgba(16, 24, 40, 0.06);
}

.company-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
  margin-bottom: 30px;
}

.company-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.overview-content {
  text-align: left;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #383838;
  margin-bottom: 8px;
}

.overview-text {
  font-size: 16px;
  color: #383838;
  line-height: 1.6;
  margin-bottom: 16px;
}

.overview-text:last-child {
  margin-bottom: 0;
}

.main-content {
  max-width: 630px;
}

.content-sections {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.content-block {
  background: transparent;
}

.section-text {
  font-size: 16px;
  color: #383838;
  line-height: 1.6;
}

.related-section {
  padding: 50px 0;
  background: #F7F7F7;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header .section-title {
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 8px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.case-study-card {
  background: #fff;
  border: 1px solid #E7E7E7;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 145px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.case-study-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: #383838;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-description {
  font-size: 12px;
  color: #848484;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  font-size: 14px;
  font-weight: 600;
  color: #3AAE51;
  text-decoration: none;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #2e8b41;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .sidebar {
    position: static;
    order: 2;
  }
  
  .main-content {
    order: 1;
    max-width: none;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-title {
    font-size: 28px;
  }
  
  .hero-image {
    height: 250px;
  }
  
  .content-section {
    padding: 60px 0;
  }
  
  .overview-card {
    padding: 24px 20px;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .breadcrumb {
    font-size: 14px;
    flex-wrap: wrap;
  }
  
  .breadcrumb-current {
    word-break: break-word;
  }
}
</style>
