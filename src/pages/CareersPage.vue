<template>
  <div class="careers-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="section-header">
              <span class="section-tag">Careers</span>
              <div class="section-underline"></div>
            </div>
            <div class="hero-title">
              <h1>Grow With Us,</h1>
              <h1 class="title-highlight">One Line of Code at a Time</h1>
            </div>
            <p class="hero-description">
              At Ilokenelitery, we don't just offer jobs—we offer journeys. Work on meaningful projects, learn from the best, and grow with us.
            </p>
            <button class="btn btn-primary">Explore Roles</button>
          </div>
          
          <div class="hero-visual">
            <div class="team-circle">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/cab90913e030c29ec8477ef59e62633a25f15b72?width=1312" alt="Team collaboration" class="team-image" />
            </div>
            <div class="floating-avatars">
              <div class="avatar avatar-1"></div>
              <div class="avatar avatar-2"></div>
              <div class="avatar avatar-3"></div>
              <div class="avatar avatar-4"></div>
            </div>
            <div class="decorative-circles">
              <div class="circle circle-1"></div>
              <div class="circle circle-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Employee Testimonial Section -->
    <section class="testimonial-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Voice of Employee in Ilokenelitery</span>
          <div class="section-underline"></div>
        </div>
        
        <div class="testimonial-content">
          <button class="nav-btn prev-btn" @click="prevTestimonial">‹</button>
          
          <div class="testimonial-main">
            <div class="testimonial-avatar">
              <div class="avatar-large orlando"></div>
            </div>
            <div class="testimonial-text">
              <blockquote>
                "Working at IlokenElitery has been both challenging and rewarding. As a Senior Project Manager, I've had the opportunity to lead complex, high-impact projects while collaborating with some of the brightest minds in the industry. The company fosters a culture of trust, innovation, and continuous growth—empowering me to bring real value to our clients and grow professionally every step of the way."
              </blockquote>
              <div class="testimonial-author">
                <h4>Orlando Diggs</h4>
                <p>Senior Product Manager</p>
              </div>
            </div>
          </div>
          
          <button class="nav-btn next-btn" @click="nextTestimonial">›</button>
        </div>
        
        <div class="testimonial-indicators">
          <span class="indicator active"></span>
          <span class="indicator"></span>
          <span class="indicator"></span>
        </div>
      </div>
    </section>

    <!-- Job Listings Section -->
    <section class="jobs-section">
      <div class="container">
        <div class="section-header">
          <h2>Open Roles</h2>
          <div class="section-underline"></div>
        </div>
        
        <div class="jobs-filters">
          <div class="search-filter">
            <div class="search-input">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.9162 11.6667H12.2579L12.0245 11.4417C13.0245 10.275 13.5412 8.68337 13.2579 6.9917C12.8662 4.67503 10.9329 2.82503 8.59955 2.5417C5.07454 2.10837 2.10788 5.07503 2.54121 8.60003C2.82454 10.9334 4.67455 12.8667 6.99121 13.2584C8.68288 13.5417 10.2745 13.025 11.4412 12.025L11.6662 12.2584V12.9167L15.2079 16.4584C15.5495 16.8 16.1079 16.8 16.4495 16.4584C16.7912 16.1167 16.7912 15.5584 16.4495 15.2167L12.9162 11.6667ZM7.91621 11.6667C5.84121 11.6667 4.16621 9.9917 4.16621 7.9167C4.16621 5.8417 5.84121 4.1667 7.91621 4.1667C9.99121 4.1667 11.6662 5.8417 11.6662 7.9167C11.6662 9.9917 9.99121 11.6667 7.91621 11.6667Z" fill="#848484"/>
              </svg>
              <input type="text" placeholder="Search job title" v-model="searchQuery" />
            </div>
          </div>
          
          <div class="location-filter">
            <svg class="filter-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10.0003 1.66663C6.77533 1.66663 4.16699 4.27496 4.16699 7.49996C4.16699 11.875 10.0003 18.3333 10.0003 18.3333C10.0003 18.3333 15.8337 11.875 15.8337 7.49996C15.8337 4.27496 13.2253 1.66663 10.0003 1.66663ZM5.83366 7.49996C5.83366 5.19996 7.70033 3.33329 10.0003 3.33329C12.3003 3.33329 14.167 5.19996 14.167 7.49996C14.167 9.89996 11.767 13.4916 10.0003 15.7333C8.26699 13.5083 5.83366 9.87496 5.83366 7.49996Z" fill="#848484"/>
              <path d="M10.0003 9.58329C11.1509 9.58329 12.0837 8.65055 12.0837 7.49996C12.0837 6.34937 11.1509 5.41663 10.0003 5.41663C8.84973 5.41663 7.91699 6.34937 7.91699 7.49996C7.91699 8.65055 8.84973 9.58329 10.0003 9.58329Z" fill="#848484"/>
            </svg>
            <select v-model="selectedLocation">
              <option value="">Select Location</option>
              <option value="jakarta">Jakarta, Indonesia</option>
              <option value="kuala-lumpur">Kuala Lumpur, Malaysia</option>
            </select>
          </div>
          
          <div class="function-filter">
            <svg class="filter-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8.33333 15H11.6667V13.3333H8.33333V15ZM2.5 5V6.66667H17.5V5H2.5ZM5 10.8333H15V9.16667H5V10.8333Z" fill="#848484"/>
            </svg>
            <select v-model="selectedFunction">
              <option value="">Select Job Function</option>
              <option value="support">Support</option>
              <option value="marketing">Marketing</option>
              <option value="product">Product</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>
        </div>
        
        <div class="jobs-grid">
          <div class="job-card" v-for="job in filteredJobs" :key="job.id" @click="goToJobDetail(job.id)">
            <h3>{{ job.title }}</h3>
            <div class="job-meta">
              <span class="job-tag" :class="job.department.toLowerCase()">{{ job.department }}</span>
              <span class="job-separator">•</span>
              <span class="job-type">{{ job.type }}</span>
            </div>
            <div class="job-location-date">
              <div class="job-location">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M10.9997 1.83337C7.45217 1.83337 4.58301 4.70254 4.58301 8.25004C4.58301 13.0625 10.9997 20.1667 10.9997 20.1667C10.9997 20.1667 17.4163 13.0625 17.4163 8.25004C17.4163 4.70254 14.5472 1.83337 10.9997 1.83337ZM6.41634 8.25004C6.41634 5.72004 8.46967 3.66671 10.9997 3.66671C13.5297 3.66671 15.583 5.72004 15.583 8.25004C15.583 10.89 12.943 14.8409 10.9997 17.3067C9.09301 14.8592 6.41634 10.8625 6.41634 8.25004Z" fill="#3AAE51"/>
                  <path d="M10.9997 10.5417C12.2653 10.5417 13.2913 9.51569 13.2913 8.25004C13.2913 6.98439 12.2653 5.95837 10.9997 5.95837C9.73402 5.95837 8.70801 6.98439 8.70801 8.25004C8.70801 9.51569 9.73402 10.5417 10.9997 10.5417Z" fill="#3AAE51"/>
                </svg>
                <span>{{ job.location }}</span>
              </div>
              <span class="job-date">{{ job.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CareersPage',
  data() {
    return {
      searchQuery: '',
      selectedLocation: '',
      selectedFunction: '',
      jobs: [
        {
          id: 1,
          title: 'Project Manager',
          department: 'Support',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          date: 'July 05, 2025'
        },
        {
          id: 2,
          title: 'Sales Executive',
          department: 'Marketing',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          date: 'July 05, 2025'
        },
        {
          id: 3,
          title: 'UI/UX Designer',
          department: 'Product',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          date: 'July 05, 2025'
        },
        {
          id: 4,
          title: 'Product Manager',
          department: 'Support',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          date: 'July 05, 2025'
        },
        {
          id: 5,
          title: 'Account Executive',
          department: 'Marketing',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          date: 'July 05, 2025'
        },
        {
          id: 6,
          title: 'Fullstack Developer',
          department: 'Engineering',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          date: 'July 05, 2025'
        }
      ]
    }
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesLocation = !this.selectedLocation || job.location.toLowerCase().includes(this.selectedLocation)
        const matchesFunction = !this.selectedFunction || job.department.toLowerCase() === this.selectedFunction
        
        return matchesSearch && matchesLocation && matchesFunction
      })
    }
  },
  methods: {
    prevTestimonial() {
      // Handle previous testimonial
    },
    nextTestimonial() {
      // Handle next testimonial
    },
    goToJobDetail(jobId) {
      this.$router.push(`/careers/${jobId}`)
    }
  }
}
</script>

<style scoped>
.careers-page {
  min-height: 100vh;
}

.hero-section {
  background: #fff;
  min-height: 820px;
  padding: 100px 0;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-text {
  flex: 1;
  max-width: 667px;
}

.section-header {
  margin-bottom: 20px;
}

.section-tag {
  font-size: 16px;
  font-weight: 600;
  color: #383838;
}

.section-underline {
  width: 40px;
  height: 4px;
  background: #3AAE51;
  margin: 4px 0;
}

.hero-title h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  color: #383838;
  margin: 0;
}

.title-highlight {
  color: #3AAE51 !important;
}

.hero-description {
  font-size: 16px;
  color: #848484;
  line-height: 1.5;
  margin: 20px 0 30px;
}

.hero-visual {
  flex: 1;
  position: relative;
  height: 613px;
}

.team-circle {
  width: 438px;
  height: 438px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-image {
  width: 656px;
  height: 438px;
  object-fit: cover;
  margin-left: -100px;
}

.floating-avatars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.avatar {
  position: absolute;
  border-radius: 50%;
  background: #cfc3a7;
}

.avatar-1 {
  width: 126px;
  height: 126px;
  top: 0;
  right: 0;
}

.avatar-2 {
  width: 147px;
  height: 147px;
  bottom: 0;
  left: 0;
}

.avatar-3 {
  width: 105px;
  height: 105px;
  bottom: 2px;
  left: 170px;
}

.avatar-4 {
  width: 94px;
  height: 94px;
  top: 61px;
  right: 170px;
}

.decorative-circles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.circle {
  position: absolute;
  border: 6px solid #3AAE51;
  border-radius: 50%;
  background: #fff;
}

.circle-1 {
  width: 134px;
  height: 134px;
  bottom: 21px;
  left: 21px;
}

.circle-2 {
  width: 149px;
  height: 149px;
  top: 73px;
  right: 0;
}

.testimonial-section {
  padding: 50px 0;
  background: #F7F7F7;
}

.testimonial-section .section-header {
  text-align: center;
  margin-bottom: 30px;
}

.testimonial-content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.nav-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  font-size: 24px;
  color: #848484;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.testimonial-main {
  flex: 1;
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.testimonial-avatar {
  flex-shrink: 0;
}

.avatar-large {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #cfc3a7;
}

.testimonial-text {
  flex: 1;
}

.testimonial-text blockquote {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
  margin: 0 0 20px;
  font-style: normal;
}

.testimonial-author h4 {
  font-size: 18px;
  font-weight: 600;
  color: #383838;
  margin: 0 0 4px;
}

.testimonial-author p {
  font-size: 14px;
  color: #848484;
  margin: 0;
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicator {
  width: 30px;
  height: 10px;
  border-radius: 5px;
  background: #E7E7E7;
}

.indicator.active {
  background: #3AAE51;
}

.jobs-section {
  padding: 50px 0;
  background: #fff;
}

.jobs-section .section-header {
  text-align: center;
  margin-bottom: 30px;
}

.jobs-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin: 0 0 4px;
}

.jobs-filters {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.search-filter {
  flex: 1;
}

.search-input,
.location-filter,
.function-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid #E7E7E7;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}

.search-input input,
.location-filter select,
.function-filter select {
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  background: transparent;
}

.search-input input::placeholder {
  color: #B3B3B3;
}

.location-filter,
.function-filter {
  width: 260px;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.job-card {
  padding: 20px;
  border: 1px solid #E7E7E7;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.job-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #383838;
  margin: 0 0 10px;
}

.job-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.job-tag {
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid #BDE4C5;
  background: #EFFFF1;
  font-size: 14px;
  color: #3AAE51;
}

.job-separator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #B3B3B3;
}

.job-type {
  font-size: 16px;
  color: #383838;
}

.job-location-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-location {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #383838;
  font-size: 16px;
}

.job-date {
  font-size: 14px;
  color: #848484;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 50px 0;
    min-height: auto;
  }
  
  .hero-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .hero-title h1 {
    font-size: 32px;
  }
  
  .hero-visual {
    height: 400px;
    width: 100%;
  }
  
  .team-circle {
    width: 300px;
    height: 300px;
  }
  
  .team-image {
    width: 450px;
    height: 300px;
  }
  
  .testimonial-main {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .jobs-filters {
    flex-direction: column;
  }
  
  .location-filter,
  .function-filter {
    width: 100%;
  }
  
  .jobs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
