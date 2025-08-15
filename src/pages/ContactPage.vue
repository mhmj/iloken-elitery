<template>
  <div class="contact-page">
    <div class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="page-title">Contact Us</h1>
            <div class="title-underline"></div>
            <p class="hero-description">
              Have questions, ideas, or need support? We're here to help. 
              Reach out to our team—we'd love to hear from you and explore 
              how we can work together.
            </p>
          </div>
          <div class="hero-image">
            <div class="pattern-overlay"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-form-container">
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group full-width">
                <label for="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  v-model="form.fullName"
                  placeholder="Enter your full name"
                  required
                >
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    placeholder="Enter your email"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <div class="phone-input">
                    <select class="country-code">
                      <option value="+60">MY (+60)</option>
                      <option value="+65">SG (+65)</option>
                      <option value="+1">US (+1)</option>
                    </select>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="form.phone"
                      placeholder="Enter your phone number"
                    >
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="form.company"
                    placeholder="Enter your company name"
                  >
                </div>
                <div class="form-group">
                  <label for="position">Job Position</label>
                  <input 
                    type="text" 
                    id="position" 
                    v-model="form.position"
                    placeholder="Enter your job position"
                  >
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="employees">Total Employee</label>
                  <select id="employees" v-model="form.employees">
                    <option value="">Select total employee</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="industry">Industry</label>
                  <select id="industry" v-model="form.industry">
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="education">Education</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group full-width">
                <label for="message">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  placeholder="Tell us your needs"
                  rows="5"
                ></textarea>
              </div>

              <div class="form-group full-width">
                <label class="checkbox-container">
                  <input type="checkbox" v-model="form.consent" required>
                  <span class="checkmark"></span>
                  Yes, I'd like Ilokenelitery to contact me regarding the related offerings by email or telephone.
                </label>
              </div>

              <div class="form-actions">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
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
      console.log('Form submitted:', this.form);
      // Handle form submission here
      alert('Thank you for your message! We will get back to you soon.');
      this.resetForm();
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
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-hero {
  background: #fff;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
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

.page-title {
  font-size: 48px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 8px;
  line-height: 1.2;
}

.title-underline {
  width: 40px;
  height: 4px;
  background: #3AAE51;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 16px;
  color: #848484;
  line-height: 1.6;
}

.hero-image {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pattern-overlay {
  width: 200px;
  height: 200px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="25" fill="none" stroke="%233AAE51" stroke-width="2"/><circle cx="25" cy="25" r="10" fill="%233AAE51" opacity="0.3"/><circle cx="75" cy="75" r="15" fill="%233AAE51" opacity="0.2"/></svg>') no-repeat center;
  background-size: contain;
  opacity: 0.6;
}

.contact-section {
  padding: 100px 0;
  background: #fff;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form-container {
  background: #fff;
  border: 1px solid #E7E7E7;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.10), 0 1px 2px rgba(16, 24, 40, 0.06);
}

.contact-form {
  display: grid;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #383838;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px 14px;
  border: 1px solid #E7E7E7;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  background: #fff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3AAE51;
  box-shadow: 0 0 0 3px rgba(58, 174, 81, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #B3B3B3;
}

.phone-input {
  display: flex;
  gap: 0;
}

.country-code {
  width: 120px;
  border-right: none;
  border-radius: 8px 0 0 8px;
  background: #f8f9fa;
}

.phone-input input {
  flex: 1;
  border-radius: 0 8px 8px 0;
  border-left: none;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
}

.checkbox-container input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin: 0;
  accent-color: #3AAE51;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3AAE51;
  color: white;
  border: 1px solid #3AAE51;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}

.btn-primary:hover {
  background: #2e8b41;
  border-color: #2e8b41;
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 60px 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-title {
    font-size: 36px;
  }
  
  .contact-section {
    padding: 60px 0;
  }
  
  .contact-form-container {
    padding: 24px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .phone-input {
    flex-direction: column;
  }
  
  .country-code {
    width: 100%;
    border: 1px solid #E7E7E7;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  
  .phone-input input {
    border: 1px solid #E7E7E7;
    border-radius: 8px;
  }
}
</style>
