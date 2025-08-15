<template>
  <div class="articles-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Articles</h1>
            <p>Explore expert-written articles, industry trends, and helpful tips to keep you ahead in the world of technology and innovation.</p>
          </div>
          <div class="hero-decoration">
            <div class="dot-pattern"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles List Section -->
    <section class="articles-section">
      <div class="container">
        <div class="section-header">
          <h2>List of Articles</h2>
          <div class="underline"></div>
        </div>

        <!-- Search and Filter -->
        <div class="search-filter-bar">
          <div class="search-input">
            <input type="text" placeholder="Search articles" v-model="searchQuery">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <div class="filter-dropdown">
            <select v-model="selectedCategory">
              <option value="all">All Category</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="innovation">Innovation</option>
              <option value="knowledge">Knowledge</option>
            </select>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="articles-grid">
          <div 
            v-for="article in filteredArticles" 
            :key="article.id" 
            class="article-card"
            @click="goToArticleDetail(article.id)"
          >
            <div class="article-image">
              <img :src="article.image" :alt="article.title" />
              <div class="article-category" :class="article.category.toLowerCase()">{{ article.category }}</div>
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span class="article-date">{{ article.date }}</span>
                <span class="read-time">{{ article.readTime }}</span>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-description">{{ article.description }}</p>
              <div class="article-author">
                <img :src="article.author.avatar" :alt="article.author.name" class="author-avatar">
                <span class="author-name">{{ article.author.name }}</span>
              </div>
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
  name: 'ArticlesPage',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      articles: [
        {
          id: 1,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Business',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 2,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Technology',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 3,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Innovation',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 4,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Business',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 5,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Business',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 6,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Technology',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 7,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Knowledge',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        },
        {
          id: 8,
          title: 'The Future of Business: Trends Every Leader Should Know',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '10 Jul 2025',
          readTime: '18:00 WIB',
          category: 'Business',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          author: {
            name: 'Alice North',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
          }
        }
      ]
    }
  },
  computed: {
    filteredArticles() {
      let filtered = this.articles;
      
      // Filter by category
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(article =>
          article.category.toLowerCase() === this.selectedCategory
        );
      }
      
      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(article =>
          article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return filtered;
    }
  },
  methods: {
    goToArticleDetail(id) {
      this.$router.push(`/insights/articles/${id}`);
    }
  }
}
</script>

<style scoped>
.articles-page {
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

.articles-section {
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

.search-filter-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

.filter-dropdown select {
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  color: #333;
  cursor: pointer;
  outline: none;
  min-width: 150px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.article-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-category {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
}

.article-category.business {
  background-color: #ff9800;
}

.article-category.technology {
  background-color: #2196f3;
}

.article-category.innovation {
  background-color: #9c27b0;
}

.article-category.knowledge {
  background-color: #4caf50;
}

.article-content {
  padding: 24px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
}

.article-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
}

.article-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 14px;
  color: #666;
  font-weight: 500;
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
  
  .articles-section {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .search-filter-bar {
    flex-direction: column;
    gap: 15px;
  }
  
  .articles-grid {
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
  
  .article-content {
    padding: 20px;
  }
}
</style>
