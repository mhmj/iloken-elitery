<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo">
            <span class="logo-icon">🔧</span>
            <span class="logo-text">iokenellery</span>
          </div>
          <div class="company-info">
            <h4>Iloken System Sdn. Bhd. (iokenellery)</h4>
            <p>Established in 2003, we are a Malaysian software development company specializing in custom business solutions for SMEs and large enterprises. A dedicated team of professionals to cater to your needs.</p>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Malaysia Office</h4>
          <p>B-02-01 Penanga Point<br>
          No. 25B Jalan Tun Sambanthan 4<br>
          Kuala Lumpur, Malaysia<br>
          43650 Bandar Baru Bangi<br>
          Selangor</p>
        </div>
        
        <div class="footer-section">
          <h4>Social Media</h4>
          <div class="social-links">
            <a href="#" class="social-link">📘 LinkedIn</a>
            <a href="#" class="social-link">📷 Instagram</a>
            <a href="#" class="social-link">🐦 Twitter</a>
            <a href="#" class="social-link">📹 YouTube</a>
            <a href="#" class="social-link">📞 Facebook</a>
            <a href="#" class="social-link">📧 info@iokenellery.com</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2023 iokenellery | Powered by iokenellery</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  margin-bottom: 20px;
  color: #4CAF50;
  font-size: 18px;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.logo-icon {
  font-size: 28px;
  margin-right: 12px;
  color: #4CAF50;
}

.company-info p {
  line-height: 1.8;
  color: #bdc3c7;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-link {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #4CAF50;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
  color: #bdc3c7;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
