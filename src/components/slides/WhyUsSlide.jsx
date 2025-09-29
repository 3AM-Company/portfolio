import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaRocket, FaCogs } from 'react-icons/fa'

const WhyUsSlide = () => {
  const reasons = [
    {
      icon: FaTrophy,
      title: 'Proven Experience',
      description: 'From national cybersecurity projects to innovative AR products, our track record speaks for itself.'
    },
    {
      icon: FaRocket,
      title: 'Innovation-Driven',
      description: 'Always pushing the boundaries of XR, AI, and game development with cutting-edge solutions.'
    },
    {
      icon: FaCogs,
      title: 'Full Lifecycle Expertise',
      description: 'From development and deployment to QA, data migration, and security testing.'
    },
    {
      icon: FaRocket,
      title: 'Impact-Focused',
      description: 'We don\'t just build tech — we build solutions that matter and drive real business value.'
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
        Why Work With Us
      </motion.h2>
      
      <div className="why-us-grid">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon
          return (
            <motion.div 
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 50px rgba(255, 107, 107, 0.15)'
              }}
            >
              <div className="why-icon">
                <IconComponent />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default WhyUsSlide
