<template>
  <div class="article-detail-page">
    <!-- Breadcrumb -->
    <section class="breadcrumb-section">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/insights/articles">Articles</router-link>
          <span>></span>
          <span>{{ article?.title || 'Loading...' }}</span>
        </div>
      </div>
    </section>

    <!-- Article Header -->
    <section class="article-header">
      <div class="container">
        <h1>{{ article?.title || 'Loading...' }}</h1>
        <div class="article-meta">
          <div class="author-info">
            <img :src="article?.author?.avatar" :alt="article?.author?.name" class="author-avatar">
            <div class="author-details">
              <span class="author-label">Author</span>
              <span class="author-name">{{ article?.author?.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="article-content-section">
      <div class="container">
        <div class="article-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt tincidunt nunc ac pharetra. Quisque suscipit est sed venenatis lobortis. Vivamus non odio libero, et commodo orci. Curabitur nec tincidunt sapien. Proin non turpis tempor magna. Proin massa neque, finibus sit amet tortor at, pulvinar placerat purus. Etiam ante netra, volutpat ut elit at, imperdiet tempor magna.</p>

          <p>Donec pharetra elit dolor nec lectus. Donec sagittam risus libero, ac blandit orci bibendum vel. Nunc in iaculis ipsum, sit amet mattis risus. Suspendisse consectetur pretium libero, non hendrerit leo cursus tincidunt. Aliquam ipsum ac nisi. Nullam mollis iaculis tempus.</p>

          <p>Nullam nisl metus, elementum sed orci in, consequat faucibus magna. Fusce nisl metus, semper at risus vitae, vehicula convalli diam. Nunc non tortor pulvinar, iaculis nisl blandit, varius orci. Aliquam non mauris eros sit porta rhoncus sit at ligula. Suspendisse sodales, risus elit amet molestie consequat, felis sapien tincidunt urna, et pretium nunc odio sit amet ex. Nunc aget nisl pretium, facilisis nisl a, consequat elit. Donec tristique aliquam eros, nec varius ante. Donec et velit magna elit amer rutrum venenatis. Etiam sit amet fermentum mauris augue at, convallis ex. Sed ac quam sit amet arcu tincidunt viverra pharetra et orta. Mauris accumsan sem in neque accumsan, non faucibus augue interdum. Quisque sagittis nulla et metus sollicitudin tincidunt.</p>

          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop" alt="Business article image" />
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt tincidunt nunc ac pharetra. Quisque suscipit est sed venenatis lobortis. Vivamus non odio libero, et commodo orci. Curabitur nec tincidunt sapien. Proin non turpis tempor magna. Proin massa neque, finibus sit amet tortor at, pulvinar placerat purus. Etiam ante netra, volutpat ut elit at, imperdiet tempor magna.</p>

          <p>Donec pharetra elit dolor nec lectus. Donec sagittam risus libero, ac blandit orci bibendum vel. Nunc in iaculis ipsum, sit amet mattis risus. Suspendisse consectetur pretium libero, non hendrerit leo cursus tincidunt. Nullam accumsan sem in neque accumsan, non faucibus augue interdum. Quisque sagittis nulla et metus sollicitudin tincidunt.</p>

          <p>Nullam nisl metus, elementum sed orci in, consequat faucibus magna. Fusce nisl metus, semper at risus vitae, vehicula convalli diam. Nunc non tortor pulvinar, iaculis nisl blandit, varius orci. Aliquam non mauris eros sit porta rhoncus sit at ligula. Suspendisse sodales, risus elit amet molestie consequat, felis sapien tincidunt urna, et pretium nunc odio sit amet ex. Nunc aget nisl pretium, facilisis nisl a, consequat elit. Donec tristique aliquam eros, nec varius ante. Donec et velit magna elit amer rutrum venenatis. Etiam sit amet fermentum mauris augue at, convallis ex. Sed ac quam sit amet arcu tincidunt viverra pharetra et orta. Mauris accumsan sem in neque accumsan, non faucibus augue interdum. Quisque sagittis nulla et metus sollicitudin tincidunt.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailPage',
  data() {
    return {
      article: null
    }
  },
  mounted() {
    this.loadArticle();
  },
  methods: {
    loadArticle() {
      // Simulate loading article data based on route params
      const id = this.$route.params.id;
      // In a real app, you'd fetch this from an API
      this.article = {
        id: id,
        title: 'The Future of Business: Trends Every Leader Should Know',
        author: {
          name: 'Alice North',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face'
        }
      };
    }
  }
}
</script>

<style scoped>
.article-detail-page {
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

.article-header {
  padding: 40px 0 60px;
  background-color: #f8f9fa;
}

.article-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 32px;
  line-height: 1.2;
  max-width: 800px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 20px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-label {
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
}

.author-name {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.article-content-section {
  padding: 80px 0;
}

.article-content {
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

.article-content p {
  margin-bottom: 24px;
}

.article-image {
  margin: 40px 0;
}

.article-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .breadcrumb-section {
    padding: 30px 0 15px;
  }
  
  .article-header {
    padding: 30px 0 40px;
  }
  
  .article-header h1 {
    font-size: 2rem;
    margin-bottom: 24px;
  }
  
  .article-content-section {
    padding: 60px 0;
  }
  
  .article-content {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .article-header h1 {
    font-size: 1.75rem;
  }
  
  .article-content {
    font-size: 14px;
    line-height: 1.7;
  }
  
  .author-info {
    gap: 8px;
  }
  
  .author-avatar {
    width: 32px;
    height: 32px;
  }
}
</style>
