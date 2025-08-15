<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <router-link to="/" class="logo">
            <span class="logo-icon">🔧</span>
            <span class="logo-text">iokenellery</span>
          </router-link>
          
          <div class="nav-menu" :class="{ 'active': mobileMenuOpen }">
            <div class="nav-links">
              <div class="nav-dropdown">
                <span class="nav-link">Product & Services</span>
                <div class="dropdown-content">
                  <router-link to="/services/it-project-management">IT Project & Management</router-link>
                  <router-link to="/services/consultation-system-integration">Consultation & System Integration</router-link>
                  <router-link to="/services/software-development">Software Development</router-link>
                  <router-link to="/services/mobile-app-development">Mobile App Development</router-link>
                  <router-link to="/services/big-data-analytics">Big Data Analytics</router-link>
                  <router-link to="/services/managed-security-service">Managed Security Service</router-link>
                  <router-link to="/services/disaster-recovery-service">Disaster Recovery Service</router-link>
                  <router-link to="/services/generative-ai-service">Generative AI (Elipedia)</router-link>
                </div>
              </div>
              
              <div class="nav-dropdown">
                <span class="nav-link">Case Studies</span>
                <div class="dropdown-content">
                  <router-link to="/case-studies/1">CyberSecurity Malaysia</router-link>
                  <a href="#case-2">Client Projects</a>
                </div>
              </div>
              
              <div class="nav-dropdown">
                <router-link to="/partners" class="nav-link">Partners</router-link>
              </div>
              
              <div class="nav-dropdown">
                <span class="nav-link">Company</span>
                <div class="dropdown-content">
                  <router-link to="/about">About Us</router-link>
                  <router-link to="/careers">Careers</router-link>
                  <a href="#team">Our Team</a>
                </div>
              </div>
              
              <div class="nav-dropdown">
                <span class="nav-link">Insights</span>
                <div class="dropdown-content">
                  <a href="#blog">Blog</a>
                  <a href="#whitepaper">Whitepapers</a>
                </div>
              </div>
              
              <div class="nav-dropdown">
                <span class="nav-link">Articles</span>
                <div class="dropdown-content">
                  <a href="#tech-articles">Technology</a>
                  <a href="#industry-articles">Industry News</a>
                </div>
              </div>
            </div>
            
            <a href="#contact" class="btn btn-primary contact-btn">Contact Us</a>
          </div>
          
          <button class="mobile-menu-toggle" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>

<style scoped>
.header {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 16px 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 20px;
}

.logo-icon {
  font-size: 24px;
  margin-right: 8px;
  color: #4CAF50;
}

.logo-text {
  color: #333;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-dropdown {
  position: relative;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  display: block;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-link:hover,
.router-link-active {
  color: #4CAF50;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 16px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.nav-dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-content a,
.dropdown-content .router-link {
  display: block;
  padding: 8px 20px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
}

.dropdown-content a:hover,
.dropdown-content .router-link:hover {
  background: #f8f9fa;
  color: #4CAF50;
}

.contact-btn {
  margin-left: 16px;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .nav-menu.active {
    transform: translateX(0);
  }
  
  .nav-links {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
  
  .nav-dropdown {
    width: 100%;
  }
  
  .dropdown-content {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    padding: 8px 16px;
    background: #f8f9fa;
    margin-top: 8px;
    border-radius: 4px;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .contact-btn {
    margin-left: 0;
    margin-top: 16px;
  }
}
</style>
