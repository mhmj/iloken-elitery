<template>
  <div class="ebook-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>E-Book</h1>
            <p>Your Guide to Smarter, Safer, and Scalable Digital Transformation</p>
          </div>
          <div class="hero-decoration">
            <div class="dot-pattern"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- E-Books List Section -->
    <section class="ebooks-section">
      <div class="container">
        <div class="section-header">
          <h2>List of E-Book</h2>
          <div class="underline"></div>
        </div>

        <!-- Search Bar -->
        <div class="search-bar">
          <div class="search-input">
            <input type="text" placeholder="Search e-book" v-model="searchQuery">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>

        <!-- E-Books Grid -->
        <div class="ebooks-grid">
          <div 
            v-for="ebook in filteredEBooks" 
            :key="ebook.id" 
            class="ebook-card"
            @click="goToEBookDetail(ebook.id)"
          >
            <div class="ebook-image">
              <img :src="ebook.image" :alt="ebook.title" />
              <div class="ebook-category">eBook</div>
            </div>
            <div class="ebook-content">
              <div class="ebook-date">{{ ebook.date }}</div>
              <h3 class="ebook-title">{{ ebook.title }}</h3>
              <p class="ebook-description">{{ ebook.description }}</p>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="load-more-section">
          <button class="btn btn-primary load-more-btn">Load More</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EBookPage',
  data() {
    return {
      searchQuery: '',
      ebooks: [
        {
          id: 1,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 2,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 3,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 4,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 5,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 6,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 7,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        },
        {
          id: 8,
          title: 'Bagaimana Solusi Melindungi Bisnis Dari Risiko Cyber Threat Sesuai UU PDP?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop'
        }
      ]
    }
  },
  computed: {
    filteredEBooks() {
      if (!this.searchQuery) return this.ebooks;
      
      return this.ebooks.filter(ebook =>
        ebook.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        ebook.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    goToEBookDetail(id) {
      this.$router.push(`/insights/ebooks/${id}`);
    }
  }
}
</script>

<style scoped>
.ebook-page {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 40px;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.hero-text p {
  font-size: 1.1rem;
  color: #666;
  max-width: 500px;
  line-height: 1.6;
}

.hero-decoration {
  position: relative;
  width: 300px;
  height: 200px;
}

.dot-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, #4CAF50 2px, transparent 2px);
  background-size: 20px 20px;
  opacity: 0.3;
}

.ebooks-section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.underline {
  width: 80px;
  height: 4px;
  background-color: #4CAF50;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.search-input {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.search-input input {
  width: 100%;
  padding: 12px 16px 12px 45px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input input:focus {
  border-color: #4CAF50;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #666;
}

.ebooks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.ebook-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.ebook-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.ebook-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.ebook-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ebook-category {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #4CAF50;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.ebook-content {
  padding: 24px;
}

.ebook-date {
  font-size: 14px;
  color: #4CAF50;
  font-weight: 600;
  margin-bottom: 8px;
}

.ebook-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
}

.ebook-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.read-more-btn {
  background: none;
  border: none;
  color: #4CAF50;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s ease;
}

.read-more-btn:hover {
  color: #45a049;
}

.load-more-section {
  text-align: center;
}

.load-more-btn {
  padding: 16px 32px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-decoration {
    width: 250px;
    height: 150px;
    margin: 0 auto;
  }
  
  .ebooks-section {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .ebooks-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.75rem;
  }
  
  .ebook-content {
    padding: 20px;
  }
}
</style>
