<template>
  <div class="event-detail-page">
    <!-- Breadcrumb -->
    <section class="breadcrumb-section">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/insights/events">Events</router-link>
          <span>></span>
          <span>{{ event?.title || 'Loading...' }}</span>
        </div>
      </div>
    </section>

    <!-- Event Header -->
    <section class="event-header">
      <div class="container">
        <div class="event-content">
          <div class="event-info">
            <h1>{{ event?.title || 'Building Workplace Security & Collaboration with Google Workspace' }}</h1>
            <div class="event-underline"></div>
            
            <div class="event-details">
              <div class="event-detail-item">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <div>
                  <span class="label">{{ event?.date || '10 Jul 2025' }}</span>
                  <span class="value">{{ event?.time || '10.00 AM - 12.00 PM WIB' }}</span>
                </div>
              </div>
              
              <div class="event-detail-item">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <span class="label">{{ event?.location || 'Malaysia Office' }}</span>
                  <span class="value">{{ event?.address || 'No. 16-1, Jalan 17/76, Seksyen 7, Bandar Baru Bangi, 43650 Bandar Baru Bangi, Selangor.' }}</span>
                </div>
                <button class="see-location-btn">See Location</button>
              </div>
            </div>
          </div>
          
          <div class="event-hero-image">
            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop" alt="Event location" />
          </div>
        </div>
      </div>
    </section>

    <!-- Event Content -->
    <section class="event-content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Main Content -->
          <div class="main-content">
            <div class="event-description">
              <h2>Unlock a Safer, Smarter, and More Connected Digital Workplace</h2>
              <p>Join us for an in-depth session on how Google Workspace empowers organizations to enhance collaboration while maintaining enterprise-grade security. Learn best practices, explore real-world use cases, and discover tools that help teams work efficiently—without compromising on data protection.</p>
            </div>

            <div class="what-to-expect">
              <h3>What to Expect</h3>
              <ul>
                <li>Strategies to secure your digital workspace</li>
                <li>Features that drive seamless team collaboration</li>
                <li>Admin controls and data protection best practices</li>
                <li>Live demos and expert insights</li>
              </ul>
              <p>Perfect for IT leaders, security officers, and productivity champions aiming to future-proof their workplace.</p>
            </div>

            <div class="speaker-section">
              <h3>Our Speaker</h3>
              <div class="speaker-card">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face" alt="Alice North" class="speaker-avatar">
                <div class="speaker-info">
                  <h4>Alice North</h4>
                  <p>Associate Director Data & Analytics</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Registration Sidebar -->
          <div class="sidebar">
            <div class="registration-form">
              <h3>Register Event</h3>
              <div class="underline"></div>
              
              <form @submit.prevent="handleRegistration">
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
                    <label for="consent">By submitting this form, I give consent to Ilokenellery to contact me via email and sign me up to receive news, updates, event information and special offers. I understand my personal data will be processed in accordance with Ilokenellery Privacy Policy.</label>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary register-btn">Register</button>
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
  name: 'EventDetailPage',
  data() {
    return {
      event: null,
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
    this.loadEvent();
  },
  methods: {
    loadEvent() {
      // Simulate loading event data based on route params
      const id = this.$route.params.id;
      // In a real app, you'd fetch this from an API
      this.event = {
        id: id,
        title: 'Building Workplace Security & Collaboration with Google Workspace',
        date: '10 Jul 2025',
        time: '10.00 AM - 12.00 PM WIB',
        location: 'Malaysia Office',
        address: 'No. 16-1, Jalan 17/76, Seksyen 7, Bandar Baru Bangi, 43650 Bandar Baru Bangi, Selangor.'
      };
    },
    handleRegistration() {
      if (!this.form.consent) {
        alert('Please accept the consent to proceed with registration.');
        return;
      }
      
      // Simulate registration process
      console.log('Registration submitted with form data:', this.form);
      alert('Thank you for registering! You will receive a confirmation email shortly.');
      
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
.event-detail-page {
  min-height: 100vh;
}

.breadcrumb-section {
  padding: 40px 0 20px;
  background-color: #f8f9fa;
}

.breadcrumb {
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

.event-header {
  padding: 40px 0 80px;
  background-color: #f8f9fa;
}

.event-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.event-info h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.2;
}

.event-underline {
  width: 60px;
  height: 4px;
  background-color: #4CAF50;
  margin-bottom: 32px;
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.event-detail-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.event-detail-item .icon {
  width: 24px;
  height: 24px;
  color: #4CAF50;
  flex-shrink: 0;
  margin-top: 4px;
}

.event-detail-item .label {
  display: block;
  font-weight: 600;
  color: #333;
  font-size: 16px;
}

.event-detail-item .value {
  display: block;
  color: #666;
  font-size: 14px;
  margin-top: 4px;
}

.see-location-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.3s ease;
}

.see-location-btn:hover {
  background-color: #45a049;
}

.event-hero-image {
  display: flex;
  justify-content: center;
}

.event-hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.event-content-section {
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

.event-description h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.event-description p {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 40px;
}

.what-to-expect h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.what-to-expect ul {
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
}

.what-to-expect li {
  padding: 8px 0 8px 20px;
  position: relative;
  color: #555;
}

.what-to-expect li::before {
  content: "•";
  color: #4CAF50;
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 8px;
}

.what-to-expect p {
  color: #666;
  font-style: italic;
}

.speaker-section {
  margin-top: 40px;
}

.speaker-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.speaker-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
}

.speaker-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.speaker-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.speaker-info p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.registration-form {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
}

.registration-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
}

.registration-form .underline {
  width: 60px;
  height: 4px;
  background-color: #4CAF50;
  margin: 0 auto 32px;
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

.register-btn {
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
  .breadcrumb-section {
    padding: 30px 0 15px;
  }
  
  .event-header {
    padding: 30px 0 60px;
  }
  
  .event-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .event-info h1 {
    font-size: 2rem;
  }
  
  .event-content-section {
    padding: 60px 0;
  }
  
  .registration-form {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .event-info h1 {
    font-size: 1.75rem;
  }
  
  .event-description h2 {
    font-size: 1.25rem;
  }
  
  .registration-form {
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
