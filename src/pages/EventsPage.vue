<template>
  <div class="events-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Events</h1>
            <p>Engage in discussions on emerging technologies, industry standards, and future-ready strategies.</p>
          </div>
          <div class="hero-decoration">
            <div class="dot-pattern"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Events List Section -->
    <section class="events-section">
      <div class="container">
        <div class="section-header">
          <h2>List of Events</h2>
          <div class="underline"></div>
        </div>

        <!-- Search and Filter -->
        <div class="search-filter-bar">
          <div class="search-input">
            <input type="text" placeholder="Search events" v-model="searchQuery">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <div class="filter-dropdown">
            <select v-model="selectedFilter">
              <option value="upcoming">Upcoming Events</option>
              <option value="past">Past Events</option>
              <option value="online">Online Events</option>
              <option value="offline">Offline Events</option>
            </select>
          </div>
        </div>

        <!-- Events Grid -->
        <div class="events-grid">
          <div
            v-for="event in filteredEvents"
            :key="event.id"
            class="event-card"
            @click="goToEventDetail(event.id)"
          >
            <div class="event-image">
              <img :src="event.image" :alt="event.title" />
              <div class="event-status" :class="event.status">{{ event.status }}</div>
            </div>
            <div class="event-content">
              <div class="event-date">{{ event.date }}</div>
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="event-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {{ event.location }}
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
  name: 'EventsPage',
  data() {
    return {
      searchQuery: '',
      selectedFilter: 'upcoming',
      events: [
        {
          id: 1,
          title: 'Building Workplace Security & Collaboration with Google Workspace',
          date: '10 Jul 2025',
          location: 'Jakarta, Indonesia',
          status: 'Online',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
        },
        {
          id: 2,
          title: 'Building Workplace Security & Collaboration with Google Workspace',
          date: '10 Jul 2025',
          location: 'Jakarta, Indonesia',
          status: 'Online',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
        },
        {
          id: 3,
          title: 'Building Workplace Security & Collaboration with Google Workspace',
          date: '10 Jul 2025',
          location: 'Jakarta, Indonesia',
          status: 'Online',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
        },
        {
          id: 4,
          title: 'Building Workplace Security & Collaboration with Google Workspace',
          date: '10 Jul 2025',
          location: 'Jakarta, Indonesia',
          status: 'Offline',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
        }
      ]
    }
  },
  computed: {
    filteredEvents() {
      let filtered = this.events;
      
      if (this.searchQuery) {
        filtered = filtered.filter(event =>
          event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedFilter !== 'upcoming') {
        filtered = filtered.filter(event => {
          if (this.selectedFilter === 'online') return event.status === 'Online';
          if (this.selectedFilter === 'offline') return event.status === 'Offline';
          return true;
        });
      }

      return filtered;
    }
  },
  methods: {
    goToEventDetail(id) {
      this.$router.push(`/insights/events/${id}`);
    }
  }
}
</script>

<style scoped>
.events-page {
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

.events-section {
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
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.event-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.event-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-status {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.event-status.Online {
  background-color: #4CAF50;
  color: white;
}

.event-status.Offline {
  background-color: #ff9800;
  color: white;
}

.event-content {
  padding: 24px;
}

.event-date {
  font-size: 14px;
  color: #4CAF50;
  font-weight: 600;
  margin-bottom: 8px;
}

.event-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
}

.event-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.event-location svg {
  width: 16px;
  height: 16px;
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
  
  .events-section {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .search-filter-bar {
    flex-direction: column;
    gap: 15px;
  }
  
  .events-grid {
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
  
  .event-content {
    padding: 20px;
  }
}
</style>
