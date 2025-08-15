<template>
  <div class="mediainsights-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>MediaInsights</h1>
            <div class="hero-divider"></div>
            <p>In our modern world today, we have all sorts of media such as image, audio, video and document scattered everywhere.</p>
            <button class="btn btn-primary hero-btn">Try Our Demo</button>
          </div>
          <div class="hero-image">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/47e0933d0d2c111e4f9b9940e456880f02e35da1?width=2447" alt="MediaInsights Platform" />
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview">
      <div class="container">
        <div class="overview-content">
          <div class="section-header">
            <h3>Overview</h3>
            <div class="section-divider"></div>
          </div>
          <h2>All Your Media. One Central Hub.</h2>
          <p>In our modern world today, we have all sorts of media such as image, audio, video and document scattered everywhere. How we want to manage all those media? MediaInsights has come forward to solve the problem. MediaInsights is a centralized repository for all your digital assets. Media uploading, downloading, sharing, watermarking, and authorization access is done easily with MediaInsights.</p>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="case-studies">
      <div class="container">
        <div class="section-header">
          <h2>Case Study</h2>
          <div class="section-divider"></div>
        </div>
        <p class="case-studies-description">Explore how our solutions helped clients solve complex challenges and achieve measurable results.</p>
        
        <div class="case-studies-grid">
          <div class="case-study-card">
            <div class="case-study-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575" alt="CyberSecurity Malaysia Enhanced Threat Intelligence" />
            </div>
            <div class="case-study-content">
              <h3>CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability w...</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="read-more-link">Read More</a>
            </div>
          </div>

          <div class="case-study-card">
            <div class="case-study-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575" alt="CyberSecurity Malaysia Enhanced Threat Intelligence" />
            </div>
            <div class="case-study-content">
              <h3>CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability w...</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="read-more-link">Read More</a>
            </div>
          </div>

          <div class="case-study-card">
            <div class="case-study-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575" alt="CyberSecurity Malaysia Enhanced Threat Intelligence" />
            </div>
            <div class="case-study-content">
              <h3>CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability w...</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="read-more-link">Read More</a>
            </div>
          </div>

          <div class="case-study-card">
            <div class="case-study-image">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575" alt="CyberSecurity Malaysia Enhanced Threat Intelligence" />
            </div>
            <div class="case-study-content">
              <h3>CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability w...</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="read-more-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>Contact Us</h2>
            <div class="contact-divider"></div>
            <p>Whether you're exploring cloud transformation, looking to strengthen cybersecurity, or need a custom software solution—we're ready to help.</p>
          </div>
          
          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" v-model="form.fullName" placeholder="Enter your full name" required>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <div class="phone-input">
                    <div class="country-code">
                      <span>MY (+60)</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.76668 7.7418L10 10.9751L13.2333 7.7418C13.5583 7.4168 14.0834 7.4168 14.4083 7.7418C14.7333 8.0668 14.7333 8.5918 14.4083 8.9168L10.5833 12.7418C10.2583 13.0668 9.73335 13.0668 9.40835 12.7418L5.58335 8.9168C5.25835 8.5918 5.25835 8.0668 5.58335 7.7418C5.90835 7.42513 6.44168 7.4168 6.76668 7.7418Z" fill="#848484"/>
                      </svg>
                    </div>
                    <input type="tel" v-model="form.phone" placeholder="Enter your phone number" required>
                  </div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company Name</label>
                  <input type="text" id="company" v-model="form.company" placeholder="Enter your company name">
                </div>
                <div class="form-group">
                  <label for="position">Job Position</label>
                  <input type="text" id="position" v-model="form.position" placeholder="Enter your job position">
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="employees">Total Employee</label>
                  <select id="employees" v-model="form.employees">
                    <option value="">Select total employee</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="industry">Industry</label>
                  <select id="industry" v-model="form.industry">
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea id="message" v-model="form.message" placeholder="Tell us your needs" rows="5" required></textarea>
              </div>
              
              <div class="checkbox-group">
                <input type="checkbox" id="consent" v-model="form.consent">
                <label for="consent">Yes, I'd like Ilokenelitery to contact me regarding the related offerings by email or telephone.</label>
              </div>
              
              <button type="submit" class="btn btn-primary submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MediaInsightsPage',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        employees: '',
        industry: '',
        message: '',
        consent: false
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form)
      alert('Thank you for your message! We will get back to you soon.')
      this.resetForm()
    },
    resetForm() {
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        employees: '',
        industry: '',
        message: '',
        consent: false
      }
    }
  }
}
</script>

<style scoped>
:root {
  --primary-color: #3AAE51;
  --text-dark: #383838;
  --text-light: #848484;
  --text-placeholder: #B3B3B3;
  --bg-light: #F7F7F7;
  --bg-green: #F1F9F3;
  --border-color: #E7E7E7;
}

/* Hero Section */
.hero {
  background: linear-gradient(90deg, rgba(217, 217, 217, 0.00) 9.98%, #737373 99.99%);
  min-height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  padding: 40px 0;
}

.hero-text h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.hero-divider {
  width: 40px;
  height: 4px;
  background: var(--primary-color);
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-light);
  margin-bottom: 30px;
}

.hero-btn {
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Overview Section */
.overview {
  padding: 50px 0;
  background: var(--bg-light);
}

.overview-content {
  text-align: center;
  max-width: 1240px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 20px;
}

.section-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.section-divider {
  width: 40px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto;
}

.overview-content h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--text-dark);
  margin-bottom: 20px;
}

.overview-content p {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-dark);
  text-align: center;
}

/* Case Studies Section */
.case-studies {
  padding: 50px 0;
  background: var(--bg-light);
}

.case-studies .section-header {
  text-align: center;
  margin-bottom: 30px;
}

.case-studies .section-header h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.case-studies-description {
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-light);
  margin-bottom: 30px;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.case-study-card {
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.case-study-image {
  height: 145px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-study-content {
  padding: 16px;
}

.case-study-content h3 {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-dark);
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-study-content p {
  font-size: 12px;
  line-height: 1.33;
  color: var(--text-light);
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43;
  transition: color 0.3s ease;
}

.read-more-link:hover {
  color: #2e8b3d;
}

/* Contact Section */
.contact {
  padding: 100px 0;
  background: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  align-items: flex-start;
}

.contact-info h2 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.contact-divider {
  width: 40px;
  height: 4px;
  background: var(--primary-color);
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-light);
}

.contact-form-wrapper {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--text-dark);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.43;
  transition: border-color 0.3s ease;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-placeholder);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.phone-input {
  display: flex;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  overflow: hidden;
}

.country-code {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 10px 14px;
  background: white;
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-dark);
}

.phone-input input {
  flex: 1;
  border: none;
  box-shadow: none;
  border-radius: 0;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.checkbox-group input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin: 0;
  flex-shrink: 0;
}

.checkbox-group label {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-dark);
  cursor: pointer;
}

.submit-btn {
  width: fit-content;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-end;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .hero-text h1 {
    font-size: 32px;
  }

  .case-studies-grid {
    grid-template-columns: 1fr;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info h2 {
    font-size: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .phone-input {
    flex-direction: column;
  }

  .country-code {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}

@media (max-width: 480px) {
  .contact-form-wrapper {
    padding: 20px;
  }

  .hero {
    padding: 40px 0;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .overview,
  .case-studies {
    padding: 40px 0;
  }

  .contact {
    padding: 60px 0;
  }
}
</style>
