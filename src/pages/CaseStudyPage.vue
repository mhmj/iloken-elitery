<template>
  <div class="case-study-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <!-- Breadcrumb -->
            <nav class="breadcrumb">
              <span class="breadcrumb-link">Case Study</span>
              <span class="breadcrumb-separator">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.74167 13.2333L10.975 10L7.74167 6.76667C7.41667 6.44167 7.41667 5.91667 7.74167 5.59167C8.06667 5.26667 8.59167 5.26667 8.91667 5.59167L12.7417 9.41667C13.0667 9.74167 13.0667 10.2667 12.7417 10.5917L8.91667 14.4167C8.59167 14.7417 8.06667 14.7417 7.74167 14.4167C7.42501 14.0917 7.41667 13.5583 7.74167 13.2333Z" fill="#3AAE51"/>
                </svg>
              </span>
              <span class="breadcrumb-current">CyberSecurity Malaysia Enhanced Threat Intelligence...</span>
            </nav>
            
            <div class="hero-title">
              <h1>CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies</h1>
              <div class="section-underline"></div>
            </div>
            
            <button class="btn btn-primary">Talk to Our Expert</button>
          </div>
          
          <div class="hero-image">
            <div class="image-overlay"></div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/d4e24ff99183cd53c81597dfd41a64bcecf4272a?width=2258" alt="CyberSecurity project banner" />
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="container">
        <div class="content-layout">
          <!-- Sidebar -->
          <div class="sidebar">
            <div class="overview-card">
              <div class="company-logo">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/887499719f77ae35dc70cb9f993bfc494efc9b7b?width=670" alt="CyberSecurity Malaysia" />
              </div>
              
              <div class="overview-content">
                <div class="section-header">
                  <h3>Overview</h3>
                  <div class="section-underline"></div>
                </div>
                
                <p>
                  CyberSecurity Malaysia is the national technical agency under the Ministry of Digital Malaysia, focusing on cybersecurity services, technology solutions, training, and education. As a strategic organisation, CyberSecurity Malaysia addresses cybersecurity threats, drives international cooperation, and strengthens the nation's digital resilience.
                </p>
                
                <p><strong>Its core functions include:</strong></p>
                <ul>
                  <li>Operating The Malaysian Computer Emergency Response Team (MyCERT).</li>
                  <li>Implementing the CyberSAFE Programme for public awareness and cybersecurity education.</li>
                  <li>Developing incident detection systems, digital forensics, and threat analysis.</li>
                  <li>Conducting cybersecurity risk assessments and policy advisory.</li>
                  <li>Delivering professional cybersecurity training and certification.</li>
                  <li>Conducting cybersecurity research and development (R&D).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="main-content">
            <div class="content-section-item">
              <div class="section-header">
                <h3>Highlights</h3>
                <div class="section-underline"></div>
              </div>
              <p>
                CyberSecurity Malaysia developed the Content Threat Profiling System to perform deep analysis of online content and cyber threats.
                The system leverages modern technologies such as Python, Neo4j, Elastic, Hortonworks, Java, and Angular for large-scale data processing.
                Capabilities include crawler robot development, natural language processing (NLP), sentiment analysis, topic modelling, and real-time data visualisation.
              </p>
            </div>

            <div class="content-section-item">
              <div class="section-header">
                <h3>Challenge</h3>
                <div class="section-underline"></div>
              </div>
              <p>
                CyberSecurity Malaysia needed to process massive volumes of cybersecurity data from multiple domestic and international sources. This data had to be indexed, analysed, and presented in an accessible format for decision-makers. The existing infrastructure faced challenges in processing efficiency, analysis speed, and seamless integration across different system components.
              </p>
            </div>

            <div class="content-section-item">
              <div class="section-header">
                <h3>Solution</h3>
                <div class="section-underline"></div>
              </div>
              <p>CyberSecurity Malaysia implemented the Content Threat Profiling System using a combination of open-source and modern data-processing technologies:</p>
              <ul>
                <li>Crawler Robot Development for automated data collection from various sources.</li>
                <li>Data Indexing & Graph Database with Neo4j to map relationships between threat entities.</li>
                <li>Natural Language Processing & Text Analytics using Python-based NLP libraries.</li>
                <li>Sentiment Analysis & Topic Modelling to understand content intent and context.</li>
                <li>Data Visualisation & Reporting through interactive web technologies (Angular) and intelligent search capabilities (Elastic).</li>
              </ul>
            </div>

            <div class="content-section-item">
              <div class="section-header">
                <h3>Benefits</h3>
                <div class="section-underline"></div>
              </div>
              <p>The implementation of this system provided significant value to CyberSecurity Malaysia:</p>
              <ul>
                <li>Accelerated data collection and threat analysis.</li>
                <li>Simplified visualisation of threat entity relationships for strategic insights.</li>
                <li>Improved incident response effectiveness through accurate and relevant intelligence.</li>
                <li>Reduced operational time and cost via automation of collection and analysis workflows.</li>
                <li>Strengthened national cybersecurity posture with up-to-date, reliable threat intelligence.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More Case Studies Section -->
    <section class="more-studies">
      <div class="container">
        <div class="section-header">
          <h2>More Case Study</h2>
          <div class="section-underline"></div>
        </div>
        
        <div class="case-studies-grid">
          <div class="case-study-card" v-for="study in relatedStudies" :key="study.id">
            <div class="card-image">
              <img :src="study.image" :alt="study.title" />
            </div>
            <div class="card-content">
              <h4>{{ study.title }}</h4>
              <p>{{ study.excerpt }}</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyPage',
  data() {
    return {
      relatedStudies: [
        {
          id: 1,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575'
        },
        {
          id: 2,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575'
        },
        {
          id: 3,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575'
        },
        {
          id: 4,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575'
        }
      ]
    }
  }
}
</script>

<style scoped>
.case-study-page {
  min-height: 100vh;
}

.hero-section {
  min-height: 500px;
  background: #fff;
  position: relative;
}

.hero-content {
  display: flex;
  align-items: center;
  min-height: 500px;
}

.hero-text {
  flex: 1;
  max-width: 667px;
  z-index: 2;
  position: relative;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  border-radius: 6px;
}

.breadcrumb-link {
  color: #B3B3B3;
  font-size: 16px;
  font-weight: 500;
}

.breadcrumb-separator svg {
  width: 20px;
  height: 20px;
}

.breadcrumb-current {
  color: #3AAE51;
  font-size: 16px;
  font-weight: 700;
}

.hero-title h1 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  color: #383838;
  margin: 0 0 20px;
}

.section-underline {
  width: 40px;
  height: 4px;
  background: #3AAE51;
  margin-bottom: 30px;
}

.hero-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 1129px;
  height: 579px;
  z-index: 1;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(217, 217, 217, 0.00) 9.98%, #737373 99.99%);
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

.content-layout {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.sidebar {
  flex: 0 0 530px;
}

.overview-card {
  padding: 40px 30px;
  border: 1px solid #E7E7E7;
  border-radius: 10px;
  background: #fff;
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
  max-width: 335px;
  height: 46px;
}

.overview-content .section-header {
  margin-bottom: 20px;
}

.overview-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: #383838;
  margin: 0 0 4px;
}

.overview-content p {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
  margin-bottom: 16px;
}

.overview-content ul {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.overview-content li {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
  margin: 8px 0;
  position: relative;
  padding-left: 16px;
}

.overview-content li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3AAE51;
  font-weight: bold;
}

.main-content {
  flex: 1;
}

.content-section-item {
  margin-bottom: 40px;
}

.content-section-item .section-header {
  margin-bottom: 20px;
}

.content-section-item h3 {
  font-size: 18px;
  font-weight: 600;
  color: #383838;
  margin: 0 0 4px;
}

.content-section-item p {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
  margin-bottom: 16px;
}

.content-section-item ul {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.content-section-item li {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
  margin: 8px 0;
  position: relative;
  padding-left: 16px;
}

.content-section-item li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3AAE51;
  font-weight: bold;
}

.more-studies {
  padding: 50px 0;
  background: #F7F7F7;
}

.more-studies .section-header {
  text-align: center;
  margin-bottom: 30px;
}

.more-studies h2 {
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin: 0 0 4px;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.case-study-card {
  background: #fff;
  border: 1px solid #E7E7E7;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.card-image {
  height: 145px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-content h4 {
  font-size: 14px;
  font-weight: 600;
  color: #383838;
  line-height: 1.4;
  margin: 0 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-content p {
  font-size: 12px;
  line-height: 1.33;
  color: #848484;
  margin: 0 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  color: #3AAE51;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 400px;
  }
  
  .hero-content {
    flex-direction: column;
    min-height: auto;
    padding: 50px 0;
  }
  
  .hero-text {
    max-width: 100%;
    margin-bottom: 30px;
  }
  
  .hero-title h1 {
    font-size: 28px;
  }
  
  .hero-image {
    position: static;
    width: 100%;
    height: 300px;
  }
  
  .content-section {
    padding: 50px 0;
  }
  
  .content-layout {
    flex-direction: column;
    gap: 40px;
  }
  
  .sidebar {
    flex: none;
    width: 100%;
  }
  
  .more-studies {
    padding: 40px 0;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
}
</style>
