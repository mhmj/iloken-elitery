<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="section-header">
            <span class="section-tag">About Us</span>
            <div class="section-underline"></div>
          </div>
          <div class="hero-title">
            <h1>Welcome to</h1>
            <h1 class="title-highlight">Ilokenelitery</h1>
          </div>
        </div>
        
        <div class="hero-images">
          <div class="image-grid">
            <div class="image-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/9c1c41f9ab50f86cf011a7e2b3aa75d2d2c20ba3?width=555" alt="People working on tech brand together" />
            </div>
            <div class="image-column">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/d61a5af9b8a64e89d2cf8a07b86ad88425b06957?width=661" alt="Creative team brainstorming" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/ab020ea8d36a5693782a4dc5c47bf7ce51b21f88?width=676" alt="Business team celebrating" />
            </div>
            <div class="image-center">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/e26878a5ea2315f94651349622fb3e7daa5f9e91?width=816" alt="Young business colleagues" />
            </div>
            <div class="image-column">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/521c85145f75447759d28d77f9ba703b0dfed8a1?width=658" alt="Team giving high fives" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/b584a9096ff05c2f45ce2bef137bebef0cb4d650?width=585" alt="Business people working" />
            </div>
            <div class="image-item">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/e033e42636eb520eaa84c6294beb801abf20523d?width=488" alt="Business team at cafe" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Overview</span>
          <div class="section-underline"></div>
        </div>
        <h2>Empowering Businesses with Smart, Reliable Software Solutions.</h2>
        <p class="overview-description">
          <strong>Iloken System Sdn. Bhd. (Ilokenelitery)</strong> was established in 2008 as a software development company in Malaysia. We provide exceptional software solutions to SMIs companies nationwide. Whether you need a special skill set for a one-time project, or you want to enhance your in-house IT team on an ongoing basis, the talented technology professionals at Iloken System Sdn. Bhd. are prepared to fulfill your needs.
        </p>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="container">
        <div class="vision-content">
          <div class="vision-left">
            <h2>Our Vision</h2>
            <div class="vision-line"></div>
          </div>
          <div class="vision-text">
            <p>Our <strong>vision</strong> is to be the software provider of choice by delivering best-fit customized solutions by focusing on:</p>
            <ul>
              <li>Communication</li>
              <li>Development methodologies</li>
              <li>Advanced tools and technologies</li>
              <li>Cost effective</li>
              <li>Risk free</li>
              <li>Uncompromised quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <div class="mission-left">
            <h2>Our Mission</h2>
            <div class="mission-line"></div>
          </div>
          <div class="mission-text">
            <p>Our <strong>mission</strong> is to offer your organization with the best software solution for your unique requirements through quality, performance and innovation, employing best-of-breed practices and technical wisdom to not only deliver "best-fit customized solutions and support" but also a complete collaborative business experience.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

.hero-section {
  padding: 100px 0 70px;
  background: #fff;
}

.hero-content {
  text-align: center;
  margin-bottom: 50px;
}

.section-header {
  margin-bottom: 30px;
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
  margin: 4px auto;
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

.hero-images {
  margin-top: 50px;
}

.image-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  max-width: 1240px;
  margin: 0 auto;
}

.image-item img,
.image-center img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.image-item {
  flex: 0 0 185px;
}

.image-item img {
  height: 185px;
}

.image-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 0 0 185px;
}

.image-column img {
  height: 185px;
  border-radius: 10px;
  object-fit: cover;
}

.image-center {
  flex: 0 0 400px;
}

.image-center img {
  height: 272px;
}

.overview-section {
  padding: 50px 0;
  background: #F7F7F7;
}

.overview-section .section-header {
  text-align: center;
  margin-bottom: 20px;
}

.overview-section h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 20px;
}

.overview-description {
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
  max-width: 800px;
  margin: 0 auto;
}

.vision-section,
.mission-section {
  padding: 50px 0;
  background: #fff;
}

.vision-content,
.mission-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.vision-left,
.mission-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 488px;
}

.vision-left h2,
.mission-left h2 {
  font-size: 36px;
  font-weight: 700;
  color: #383838;
  margin: 0;
}

.vision-line {
  width: 192px;
  height: 4px;
  background: #3AAE51;
  transform: rotate(-90deg);
}

.mission-line {
  width: 96px;
  height: 4px;
  background: #3AAE51;
  transform: rotate(-90deg);
}

.vision-text,
.mission-text {
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
}

.vision-text ul {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.vision-text li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 50px 0 40px;
  }
  
  .hero-title h1 {
    font-size: 32px;
  }
  
  .image-grid {
    flex-direction: column;
    gap: 20px;
  }
  
  .image-item,
  .image-column,
  .image-center {
    flex: none;
    width: 100%;
    max-width: 400px;
  }
  
  .image-column {
    flex-direction: row;
    gap: 15px;
  }
  
  .image-column img {
    width: 48%;
  }
  
  .vision-content,
  .mission-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  
  .vision-left,
  .mission-left {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
  
  .vision-line,
  .mission-line {
    transform: none;
    width: 40px;
  }
}
</style>
