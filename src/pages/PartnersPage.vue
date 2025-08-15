<template>
  <div class="partners-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <div class="container">
        <span class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </span>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-item current">Our Partners</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="partners-hero">
      <div class="container">
        <div class="partners-hero-content">
          <div class="partners-hero-text">
            <h1>In Partnership with Industry Leaders</h1>
            <p>We work with trusted partners to deliver cutting-edge, scalable, and secure solutions for your business needs.</p>
          </div>
          <div class="partners-hero-image">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F97e1be967df34a5b8bd9cb65037f6782%2F61b8bf22571641ea9d708d639f5abb55?format=webp&width=800" alt="Partnership handshake" />
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Partners Section -->
    <section class="technology-partners section">
      <div class="container">
        <h2>Technology Partners</h2>
        
        <div class="featured-partners">
          <div class="partner-card featured">
            <div class="partner-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
            </div>
            <div class="partner-info">
              <h3>AWS</h3>
              <p>Start your migration by discovering and assessing on-premises resources using AWS technology.</p>
              <router-link to="/partners/aws" class="explore-link">Explore More →</router-link>
            </div>
          </div>
          
          <div class="partner-card featured">
            <div class="partner-logo elastic-logo">
              <span class="elastic-text">elastic</span>
            </div>
            <div class="partner-info">
              <h3>Elastic</h3>
              <p>Scalable, Secure, and Smart Elastic Cloud Solutions. Start your migration by discovering and assessing your on-premises resources using Elastic technology.</p>
              <router-link to="/partners/elastic" class="explore-link">Explore More →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Partners Section -->
    <section class="all-partners section">
      <div class="container">
        <h2>All Partners</h2>
        
        <div class="partners-grid grid grid-5">
          <!-- Row 1 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text hortonworks">HORTONWORKS</span>
            </div>
            <p>Hortonworks</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text talend">talend</span>
            </div>
            <p>Talend</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text tableau">tableau</span>
            </div>
            <p>Tableau</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo elastic-logo">
              <span class="partner-text">elastic</span>
            </div>
            <p>Elastic</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text sun">Sun Oracle</span>
            </div>
            <p>Sun Oracle</p>
          </div>

          <!-- Row 2 -->
          <div class="partner-item">
            <div class="partner-logo angular">
              <span class="partner-text">A</span>
            </div>
            <p>Angular</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo selenium">
              <span class="partner-text">Se</span>
            </div>
            <p>Selenium</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo java">
              <span class="partner-text">☕ Java</span>
            </div>
            <p>Java</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo spring">
              <span class="partner-text">🌱 Spring Boot</span>
            </div>
            <p>Spring Boot</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">neo4j</span>
            </div>
            <p>Neo4j</p>
          </div>

          <!-- Row 3 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">mozenda</span>
            </div>
            <p>Mozenda</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">R Studio</span>
            </div>
            <p>R Studio</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">MongoDB</span>
            </div>
            <p>MongoDB</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">HTML5 CSS3 JS</span>
            </div>
            <p>HTML5 CSS3 JS</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Sangfor</span>
            </div>
            <p>Sangfor</p>
          </div>

          <!-- Row 4 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">cisco</span>
            </div>
            <p>Cisco</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">ARISTA</span>
            </div>
            <p>Arista</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">BROCADE</span>
            </div>
            <p>Brocade</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo huawei">
              <span class="partner-text">HUAWEI</span>
            </div>
            <p>Huawei</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Ruckus</span>
            </div>
            <p>Ruckus</p>
          </div>

          <!-- Row 5 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Fortinet</span>
            </div>
            <p>Fortinet</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Commscope</span>
            </div>
            <p>Commscope</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">DATWYLER</span>
            </div>
            <p>Datwyler</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Legrand</span>
            </div>
            <p>Legrand</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">WatchGuard</span>
            </div>
            <p>Watch Guard</p>
          </div>

          <!-- Row 6 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">DELL EMC</span>
            </div>
            <p>DELL EMC</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Hewlett Packard Enterprise</span>
            </div>
            <p>Hewlett Packard</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">ESET</span>
            </div>
            <p>ESET</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo redhat">
              <span class="partner-text">Red Hat</span>
            </div>
            <p>Red Hat</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">McAfee</span>
            </div>
            <p>McAfee</p>
          </div>

          <!-- Row 7 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">UAP</span>
            </div>
            <p>UAP</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Schneider Electric</span>
            </div>
            <p>Schneider</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">EATON</span>
            </div>
            <p>EATON</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">RIGHT POWER</span>
            </div>
            <p>Right Power</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">VERTIV</span>
            </div>
            <p>Vertiv</p>
          </div>

          <!-- Row 8 -->
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">VESDA</span>
            </div>
            <p>Vesda</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">11K</span>
            </div>
            <p>11K</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">SECURITON</span>
            </div>
            <p>Securiton</p>
          </div>
          
          <div class="partner-item">
            <div class="partner-logo">
              <span class="partner-text">Protec</span>
            </div>
            <p>Protec</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage'
}
</script>

<style scoped>
.breadcrumb {
  background: #f8f9fa;
  padding: 16px 0;
  border-bottom: 1px solid #e9ecef;
}

.breadcrumb-item a {
  color: #4CAF50;
  text-decoration: none;
}

.breadcrumb-item.current {
  color: #666;
}

.breadcrumb-separator {
  margin: 0 8px;
  color: #666;
}

.partners-hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 80px 0;
}

.partners-hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.partners-hero-text h1 {
  font-size: 42px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #2c3e50;
}

.partners-hero-text p {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
}

.partners-hero-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.technology-partners {
  background: white;
}

.technology-partners h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #2c3e50;
}

.featured-partners {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.partner-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
}

.partner-card.featured {
  border: 2px solid #e9ecef;
}

.partner-logo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.partner-logo img {
  height: 100%;
  width: auto;
}

.elastic-logo {
  background: #005571;
  color: white;
  border-radius: 8px;
  padding: 16px 24px;
}

.elastic-text {
  font-size: 24px;
  font-weight: bold;
}

.partner-info h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #2c3e50;
}

.partner-info p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.explore-link {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.explore-link:hover {
  color: #45a049;
}

.all-partners {
  background: #f8f9fa;
}

.all-partners h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #2c3e50;
}

.partners-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.partner-item {
  background: white;
  padding: 32px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.partner-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.partner-item .partner-logo {
  height: 60px;
  margin-bottom: 16px;
}

.partner-text {
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
}

.partner-item p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

/* Specific partner styling */
.hortonworks {
  color: #1f8c4a;
}

.talend {
  color: #4472c4;
}

.tableau {
  color: #e97627;
}

.sun {
  color: #f80000;
}

.angular {
  background: #dd0031;
  color: white;
  border-radius: 4px;
  padding: 8px;
  font-size: 24px;
}

.selenium {
  background: #43b02a;
  color: white;
  border-radius: 4px;
  padding: 8px;
  font-size: 20px;
}

.java {
  color: #f89820;
}

.spring {
  color: #6db33f;
}

.huawei {
  color: #ff0000;
}

.redhat {
  color: #ee0000;
}

@media (max-width: 768px) {
  .partners-hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .partners-hero-text h1 {
    font-size: 32px;
  }
  
  .featured-partners {
    grid-template-columns: 1fr;
  }
  
  .partners-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .partner-item {
    padding: 24px 16px;
  }
}
</style>
