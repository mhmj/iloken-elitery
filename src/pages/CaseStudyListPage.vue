<template>
  <div class="case-study-page">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="page-title">Case Study</h1>
            <div class="title-underline"></div>
            <p class="hero-description">
              Discover how real businesses solved real challenges using our solutions—driving 
              innovation, efficiency, and measurable results.
            </p>
          </div>
          <div class="hero-image">
            <div class="pattern-overlay">
              <div class="floating-elements">
                <div class="element circle"></div>
                <div class="element square"></div>
                <div class="element triangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="case-study-listing">
      <div class="container">
        <div class="listing-header">
          <h2 class="section-title">List of Case Study</h2>
          <div class="title-underline center"></div>
        </div>

        <div class="search-section">
          <div class="search-container">
            <div class="search-input">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.9167 11.6667H12.2583L12.025 11.4417C13.025 10.275 13.5417 8.68334 13.2583 6.99167C12.8667 4.675 10.9333 2.825 8.6 2.54167C5.075 2.10834 2.10834 5.075 2.54167 8.6C2.825 10.9333 4.675 12.8667 6.99167 13.2583C8.68334 13.5417 10.275 13.025 11.4417 12.025L11.6667 12.2583V12.9167L15.2083 16.4583C15.55 16.8 16.1083 16.8 16.45 16.4583C16.7917 16.1167 16.7917 15.5583 16.45 15.2167L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z" fill="#848484"/>
              </svg>
              <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search case study"
                @input="filterCaseStudies"
              >
            </div>
          </div>
        </div>

        <div class="case-studies-grid">
          <div 
            v-for="caseStudy in filteredCaseStudies" 
            :key="caseStudy.id" 
            class="case-study-card"
            @click="goToCaseStudy(caseStudy.id)"
          >
            <div class="card-image">
              <img :src="caseStudy.image" :alt="caseStudy.title">
            </div>
            <div class="card-content">
              <div class="card-date">{{ caseStudy.date }}</div>
              <h3 class="card-title">{{ caseStudy.title }}</h3>
              <p class="card-description">{{ caseStudy.description }}</p>
              <a href="#" class="read-more" @click.prevent="goToCaseStudy(caseStudy.id)">Read More</a>
            </div>
          </div>
        </div>

        <div class="load-more-section" v-if="hasMoreResults">
          <button class="btn btn-primary" @click="loadMore">Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyListPage',
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 8,
      caseStudies: [
        {
          id: 1,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575',
          tags: ['cybersecurity', 'data analytics', 'threat intelligence']
        },
        {
          id: 2,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575',
          tags: ['cloud', 'infrastructure', 'scalability']
        },
        {
          id: 3,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575',
          tags: ['ai', 'machine learning', 'automation']
        },
        {
          id: 4,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575',
          tags: ['fintech', 'blockchain', 'security']
        },
        {
          id: 5,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575',
          tags: ['healthcare', 'digital transformation', 'integration']
        },
        {
          id: 6,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575',
          tags: ['e-commerce', 'mobile app', 'user experience']
        },
        {
          id: 7,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d8a51ee43cbf5411363fe063c768fb92b6d72846?width=575',
          tags: ['logistics', 'tracking', 'optimization']
        },
        {
          id: 8,
          title: 'CyberSecurity Malaysia Enhanced Threat Intelligence and Scalability with Advanced Data Technologies',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q',
          date: '10 Jul 2025',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/53ee1f8f3014a40f88c46ad033307cff5189416f?width=575',
          tags: ['manufacturing', 'iot', 'monitoring']
        }
      ],
      filteredCaseStudies: []
    }
  },
  computed: {
    hasMoreResults() {
      return this.filteredCaseStudies.length >= this.currentPage * this.itemsPerPage;
    }
  },
  mounted() {
    this.filteredCaseStudies = [...this.caseStudies];
  },
  methods: {
    filterCaseStudies() {
      if (!this.searchQuery.trim()) {
        this.filteredCaseStudies = [...this.caseStudies];
        return;
      }

      const query = this.searchQuery.toLowerCase();
      this.filteredCaseStudies = this.caseStudies.filter(caseStudy => 
        caseStudy.title.toLowerCase().includes(query) ||
        caseStudy.description.toLowerCase().includes(query) ||
        caseStudy.tags.some(tag => tag.toLowerCase().includes(query))
      );
    },
    goToCaseStudy(id) {
      this.$router.push(`/case-studies/${id}`);
    },
    loadMore() {
      // In a real app, this would load more data from an API
      console.log('Loading more case studies...');
    }
  }
}
</script>

<style scoped>
.case-study-page {
  min-height: 100vh;
}

.hero-section {
  background: #fff;
  padding: 100px 0 50px;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 300px;
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

.title-underline.center {
  margin: 8px auto 0;
}

.hero-description {
  font-size: 16px;
  color: #848484;
  line-height: 1.6;
}

.hero-image {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 12px;
  overflow: hidden;
}

.pattern-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(58, 174, 81, 0.1) 0%, rgba(58, 174, 81, 0.05) 100%);
}

.floating-elements {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.element {
  position: absolute;
  background: #3AAE51;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: 20px;
  right: 30px;
  animation-delay: 0s;
}

.square {
  width: 40px;
  height: 40px;
  bottom: 40px;
  left: 20px;
  animation-delay: -2s;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 43px solid #3AAE51;
  background: transparent;
  top: 60px;
  left: 80px;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
}

.case-study-listing {
  background: #fff;
  padding: 50px 0;
}

.listing-header {
  text-align: center;
  margin-bottom: 30px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 8px;
}

.search-section {
  margin-bottom: 40px;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 14px;
  z-index: 1;
}

.search-input input {
  width: 100%;
  padding: 10px 14px 10px 44px;
  border: 1px solid #E7E7E7;
  border-radius: 8px;
  font-size: 16px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  transition: border-color 0.3s ease;
}

.search-input input:focus {
  outline: none;
  border-color: #3AAE51;
  box-shadow: 0 0 0 3px rgba(58, 174, 81, 0.1);
}

.search-input input::placeholder {
  color: #B3B3B3;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
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

.card-date {
  font-size: 14px;
  color: #848484;
  margin-bottom: 8px;
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

.load-more-section {
  text-align: center;
  margin-top: 40px;
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
  .hero-section {
    padding: 60px 0 40px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-title {
    font-size: 36px;
  }
  
  .hero-image {
    height: 200px;
  }
  
  .case-study-listing {
    padding: 40px 0;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .search-input input {
    font-size: 14px;
  }
}
</style>
