<template>
  <div class="job-detail-page">
    <!-- Header Section -->
    <section class="job-header">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <router-link to="/careers" class="breadcrumb-link">Careers</router-link>
          <span class="breadcrumb-separator">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.7418 13.2333L10.9751 10L7.7418 6.76667C7.4168 6.44167 7.4168 5.91667 7.7418 5.59167C8.0668 5.26667 8.5918 5.26667 8.9168 5.59167L12.7418 9.41667C13.0668 9.74167 13.0668 10.2667 12.7418 10.5917L8.9168 14.4167C8.5918 14.7417 8.0668 14.7417 7.7418 14.4167C7.42513 14.0917 7.4168 13.5583 7.7418 13.2333Z" fill="#3AAE51"/>
            </svg>
          </span>
          <span class="breadcrumb-current">{{ job.title }}</span>
        </nav>
        
        <div class="job-title-section">
          <div class="job-title-left">
            <h1>{{ job.title }}</h1>
            <div class="job-tags">
              <span class="job-tag" :class="job.department.toLowerCase()">{{ job.department }}</span>
              <span class="job-separator">•</span>
              <span class="job-type">{{ job.type }}</span>
            </div>
          </div>
          <div class="job-location">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z" fill="#3AAE51"/>
              <path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" fill="#3AAE51"/>
            </svg>
            <span>{{ job.location }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Job Details Section -->
    <section class="job-details">
      <div class="container">
        <div class="job-content">
          <div class="job-section">
            <div class="section-header">
              <h2>About the Role</h2>
              <div class="section-underline"></div>
            </div>
            <p>{{ job.description }}</p>
          </div>

          <div class="job-section">
            <div class="section-header">
              <h2>Key Responsibilities</h2>
              <div class="section-underline"></div>
            </div>
            <div class="responsibilities-list">
              <div v-for="responsibility in job.responsibilities" :key="responsibility" class="responsibility-item">
                {{ responsibility }}
              </div>
            </div>
          </div>

          <div class="job-section">
            <div class="section-header">
              <h2>Preferred Qualifications</h2>
              <div class="section-underline"></div>
            </div>
            <div class="qualifications-list">
              <div v-for="qualification in job.qualifications" :key="qualification" class="qualification-item">
                {{ qualification }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Apply Section -->
    <section class="apply-section">
      <div class="container">
        <div class="apply-content">
          <h2>Apply for this position</h2>
          <p>
            To apply for this or any other roles that interest you, please email your resume/CV to 
            <strong class="email-link">info@ilokensystem.net</strong> 
            with the subject line "CV - Job Title - Location"
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JobDetailPage',
  data() {
    return {
      job: {
        id: 1,
        title: 'Project Manager',
        department: 'Support',
        type: 'Full-Time',
        location: 'Jakarta, Indonesia',
        description: 'As a Project Manager at IlokenElitery, you will lead the planning, execution, and delivery of software and IT projects across various industries. You\'ll serve as the bridge between technical teams and clients—ensuring that projects are completed on time, within scope, and aligned with business objectives. Your leadership will drive collaboration, manage risk, and ensure the highest standard of delivery across all phases of the project lifecycle.',
        responsibilities: [
          'Define project scope, goals, and deliverables in collaboration with stakeholders',
          'Develop and maintain detailed project plans, schedules, and budgets',
          'Coordinate internal resources and third-party vendors for flawless execution',
          'Lead cross-functional teams through all phases of the project lifecycle',
          'Identify and manage project risks, dependencies, and issues proactively',
          'Communicate project updates to clients and internal stakeholders regularly',
          'Ensure quality standards and compliance with methodologies (e.g., PMBOK, Agile, Waterfall)',
          'Facilitate post-project evaluations and continuous improvement initiatives'
        ],
        qualifications: [
          'Bachelor\'s degree in IT, Computer Science, Business, or a related field',
          '3+ years of experience in project management, preferably in IT or software development',
          'Strong understanding of project management methodologies (PMBOK, Agile, Waterfall, Scrum)',
          'Project Management Professional (PMP), PRINCE2, or equivalent certification is a plus',
          'Excellent communication, leadership, and problem-solving skills',
          'Ability to manage multiple priorities in a fast-paced environment',
          'Experience with project management tools (e.g., Jira, Trello, MS Project, Asana)'
        ]
      }
    }
  },
  created() {
    // In a real app, you would fetch job details based on route params
    const jobId = this.$route.params.id
    this.loadJobDetails(jobId)
  },
  methods: {
    loadJobDetails(jobId) {
      // Mock job data - in real app this would be an API call
      const jobs = {
        1: {
          title: 'Project Manager',
          department: 'Support',
          type: 'Full-Time',
          location: 'Jakarta, Indonesia',
          description: 'As a Project Manager at IlokenElitery, you will lead the planning, execution, and delivery of software and IT projects across various industries. You\'ll serve as the bridge between technical teams and clients—ensuring that projects are completed on time, within scope, and aligned with business objectives. Your leadership will drive collaboration, manage risk, and ensure the highest standard of delivery across all phases of the project lifecycle.',
          responsibilities: [
            'Define project scope, goals, and deliverables in collaboration with stakeholders',
            'Develop and maintain detailed project plans, schedules, and budgets',
            'Coordinate internal resources and third-party vendors for flawless execution',
            'Lead cross-functional teams through all phases of the project lifecycle',
            'Identify and manage project risks, dependencies, and issues proactively',
            'Communicate project updates to clients and internal stakeholders regularly',
            'Ensure quality standards and compliance with methodologies (e.g., PMBOK, Agile, Waterfall)',
            'Facilitate post-project evaluations and continuous improvement initiatives'
          ],
          qualifications: [
            'Bachelor\'s degree in IT, Computer Science, Business, or a related field',
            '3+ years of experience in project management, preferably in IT or software development',
            'Strong understanding of project management methodologies (PMBOK, Agile, Waterfall, Scrum)',
            'Project Management Professional (PMP), PRINCE2, or equivalent certification is a plus',
            'Excellent communication, leadership, and problem-solving skills',
            'Ability to manage multiple priorities in a fast-paced environment',
            'Experience with project management tools (e.g., Jira, Trello, MS Project, Asana)'
          ]
        }
      }
      
      if (jobs[jobId]) {
        this.job = { id: jobId, ...jobs[jobId] }
      }
    }
  }
}
</script>

<style scoped>
.job-detail-page {
  min-height: 100vh;
}

.job-header {
  padding: 100px 0 0;
  background: #fff;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 50px;
  border-radius: 6px;
}

.breadcrumb-link {
  color: #B3B3B3;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.breadcrumb-separator svg {
  width: 20px;
  height: 20px;
}

.breadcrumb-current {
  color: #3AAE51;
  font-size: 16px;
  font-weight: 500;
}

.job-title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.job-title-left h1 {
  font-size: 48px;
  font-weight: 700;
  color: #3AAE51;
  margin: 0 0 20px;
  line-height: 1.5;
}

.job-tags {
  display: flex;
  align-items: center;
  gap: 10px;
}

.job-tag {
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid #BDE4C5;
  background: #EFFFF1;
  font-size: 16px;
  color: #3AAE51;
}

.job-separator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #B3B3B3;
}

.job-type {
  font-size: 18px;
  color: #383838;
}

.job-location {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #383838;
  font-size: 18px;
  font-weight: 500;
}

.job-details {
  padding: 50px 0;
  background: #F7F7F7;
}

.job-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.job-section .section-header {
  margin-bottom: 20px;
}

.job-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin: 0 0 4px;
}

.section-underline {
  width: 40px;
  height: 4px;
  background: #3AAE51;
}

.job-section p {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
}

.responsibilities-list,
.qualifications-list {
  font-size: 16px;
  line-height: 1.5;
  color: #383838;
}

.responsibility-item,
.qualification-item {
  margin: 8px 0;
  position: relative;
  padding-left: 16px;
}

.responsibility-item::before,
.qualification-item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3AAE51;
  font-weight: bold;
}

.apply-section {
  padding: 40px 0;
  background: #fff;
}

.apply-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.apply-content h2 {
  font-size: 24px;
  font-weight: 700;
  color: #383838;
  margin: 0 0 12px;
}

.apply-content p {
  font-size: 16px;
  line-height: 1.5;
  color: #848484;
}

.email-link {
  color: #3AAE51;
  font-weight: 700;
}

@media (max-width: 768px) {
  .job-header {
    padding: 50px 0 0;
  }
  
  .job-title-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  
  .job-title-left h1 {
    font-size: 32px;
  }
  
  .job-tags {
    flex-wrap: wrap;
  }
  
  .job-location {
    align-self: flex-start;
  }
  
  .job-details {
    padding: 30px 0;
  }
  
  .job-content {
    gap: 30px;
  }
  
  .apply-section {
    padding: 30px 0;
  }
}
</style>
