import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaGift, FaUsers, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSlide = () => {
  const projects = [
    {
      featured: true,
      title: 'Quest and Treats',
      tag: 'AR Gamification',
      description: 'A gamified Augmented Reality (AR) quest system that drives customer engagement and foot traffic into physical stores.',
      features: [
        { icon: FaSearch, text: 'In-store quest solving' },
        { icon: FaGift, text: 'Reward system' },
        { icon: FaUsers, text: 'Customer engagement' }
      ],
      techStack: ['AR', 'Gamification', 'Reward Engine']
    },
    {
      featured: false,
      title: 'Qudah Labs (QCL)',
      tag: 'Lab Services',
      description: 'Specialized laboratory services project designed to enhance user access and streamline lab solutions.',
      link: 'labs.qudah.com'
    },
    {
      featured: false,
      title: 'RSS Jordan Cybersecurity',
      tag: 'National Security',
      description: 'Penetration Testing & Vulnerability Assessments for 100+ governmental digital services in Jordan.',
      stats: { number: '100+', label: 'Services Secured' }
    }
  ]

  return (
    <div className="slide-content">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Flagship Projects
      </motion.h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 15px 40px rgba(102, 126, 234, 0.15)'
            }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-tag">{project.tag}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            {project.features && (
              <div className="project-features">
                {project.features.map((feature, featureIndex) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={featureIndex} className="feature">
                      <IconComponent />
                      <span>{feature.text}</span>
                    </div>
                  )
                })}
              </div>
            )}
            
            {project.techStack && (
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech">{tech}</span>
                ))}
              </div>
            )}
            
            {project.link && (
              <div className="project-link">
                <FaExternalLinkAlt />
                <span>{project.link}</span>
              </div>
            )}
            
            {project.stats && (
              <div className="project-stats">
                <div className="stat">
                  <span className="number">{project.stats.number}</span>
                  <span className="label">{project.stats.label}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSlide
