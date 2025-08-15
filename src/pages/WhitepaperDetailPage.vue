<template>
  <div class="whitepaper-detail-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/insights/whitepapers">Whitepaper</router-link>
          <span>></span>
          <span>{{ whitepaper?.title || 'Loading...' }}</span>
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1>{{ whitepaper?.title || 'Securing the Digital Enterprise: A Practical Guide to Cyber Resilience in the Age of Remote Work' }}</h1>
            <button class="btn btn-primary read-more-btn">Read More</button>
          </div>
          <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop" alt="Digital security" />
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Main Content -->
          <div class="main-content">
            <div class="abstract-section">
              <h2>Abstract</h2>
              <p>As businesses embrace remote and hybrid work models, securing digital infrastructure has never been more critical. This whitepaper provides a comprehensive guide to building cyber resilience in a distributed environment—covering practical frameworks, risk mitigation strategies, and tools to safeguard your organization from evolving threats.</p>
            </div>

            <div class="content-section-details">
              <h2>What You'll Learn</h2>
              <ul class="feature-list">
                <li>Key vulnerabilities in remote work setups</li>
                <li>Best practices for endpoint and access security</li>
                <li>Strategies for data protection, backup, and recovery</li>
                <li>Frameworks for incident response and threat detection</li>
                <li>How to align cybersecurity with business continuity goals</li>
              </ul>
              <p>Ideal for IT leaders, CISOs, and digital transformation teams, this guide helps you strengthen your security posture while supporting agility, collaboration, and compliance in today's digital-first landscape.</p>
            </div>
          </div>

          <!-- Download Form Sidebar -->
          <div class="sidebar">
            <div class="download-form">
              <h3>Get Your Free Whitepaper</h3>
              <form @submit.prevent="handleDownload">
                <div class="form-group">
                  <label for="fullName">Full Name</label>
                  <input type="text" id="fullName" v-model="form.fullName" placeholder="Enter your full name" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required>
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <div class="phone-input">
                    <select v-model="form.countryCode">
                      <option value="+62">MY (+60)</option>
                      <option value="+62">ID (+62)</option>
                      <option value="+1">US (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+65">SG (+65)</option>
                    </select>
                    <input type="tel" id="phone" v-model="form.phone" placeholder="Enter your phone number" required>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="jobPosition">Job Position</label>
                  <input type="text" id="jobPosition" v-model="form.jobPosition" placeholder="Enter your job position" required>
                </div>
                
                <div class="form-group">
                  <label for="companyName">Company Name</label>
                  <input type="text" id="companyName" v-model="form.companyName" placeholder="Enter your company name" required>
                </div>
                
                <div class="form-group">
                  <div class="checkbox-group">
                    <input type="checkbox" id="consent" v-model="form.consent" required>
                    <label for="consent">I'd like Ilokenellery to contact me regarding Cloud technology and related offerings by email or phone</label>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WhitepaperDetailPage',
  data() {
    return {
      whitepaper: null,
      form: {
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+60',
        jobPosition: '',
        companyName: '',
        consent: false
      }
    }
  },
  mounted() {
    this.loadWhitepaper();
  },
  methods: {
    loadWhitepaper() {
      // Simulate loading whitepaper data based on route params
      const id = this.$route.params.id;
      // In a real app, you'd fetch this from an API
      this.whitepaper = {
        id: id,
        title: 'Securing the Digital Enterprise: A Practical Guide to Cyber Resilience in the Age of Remote Work',
        description: 'A comprehensive guide to cybersecurity in distributed work environments'
      };
    },
    handleDownload() {
      if (!this.form.consent) {
        alert('Please accept the consent to proceed with download.');
        return;
      }
      
      // Simulate download process
      console.log('Download initiated with form data:', this.form);
      alert('Thank you! Your whitepaper download will begin shortly. Please check your email for the download link.');
      
      // Reset form
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+60',
        jobPosition: '',
        companyName: '',
        consent: false
      };
    }
  }
}
</script>

<style scoped>
.whitepaper-detail-page {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 40px 0 80px;
}

.breadcrumb {
  margin-bottom: 40px;
  font-size: 14px;
  color: #666;
}

.breadcrumb a {
  color: #4CAF50;
  text-decoration: none;
}

.breadcrumb span {
  margin: 0 8px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 32px;
  line-height: 1.2;
}

.read-more-btn {
  padding: 16px 32px;
  font-size: 16px;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.content-section {
  padding: 80px 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
}

.main-content {
  max-width: none;
}

.abstract-section h2,
.content-section-details h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
}

.abstract-section p {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
}

.content-section-details {
  margin-top: 60px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}

.feature-list li {
  margin-bottom: 16px;
  padding-left: 20px;
  position: relative;
  color: #555;
  font-size: 16px;
}

.feature-list li::before {
  content: "•";
  color: #4CAF50;
  font-size: 24px;
  position: absolute;
  left: 0;
  top: 0;
}

.content-section-details p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.download-form {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
}

.download-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 32px;
  text-align: center;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #4CAF50;
}

.phone-input {
  display: flex;
  gap: 8px;
}

.phone-input select {
  flex: 0 0 100px;
}

.phone-input input {
  flex: 1;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  margin-top: 4px;
  flex-shrink: 0;
}

.checkbox-group label {
  font-size: 14px;
  line-height: 1.5;
  font-weight: normal;
  margin: 0;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 30px 0 60px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .content-section {
    padding: 60px 0;
  }
  
  .download-form {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 1.75rem;
  }
  
  .abstract-section h2,
  .content-section-details h2 {
    font-size: 1.5rem;
  }
  
  .download-form {
    padding: 20px;
  }
  
  .phone-input {
    flex-direction: column;
  }
  
  .phone-input select {
    flex: none;
  }
}
</style>
