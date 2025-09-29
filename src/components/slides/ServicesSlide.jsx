import React from 'react'
import { motion } from 'framer-motion'
import { FaVrCardboard, FaGamepad, FaBrain, FaCode } from 'react-icons/fa'

const ServicesSlide = () => {
  const services = [
    {
      icon: FaVrCardboard,
      title: 'XR & Immersive Experiences',
      description: 'Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR) applications that transform engagement, marketing, education, and entertainment.',
      features: ['AR Applications', 'VR Experiences', 'MR Solutions']
    },
    {
      icon: FaGamepad,
      title: 'Game Development',
      description: 'Creating interactive, gamified experiences that drive user engagement, whether for fun, training, or business growth.',
      features: ['Mobile Games', 'Gamification', 'Interactive Experiences']
    },
    {
      icon: FaBrain,
      title: 'AI Solutions',
      description: 'Leveraging AI for automation, predictive analytics, and data-driven decision-making.',
      features: ['Machine Learning', 'Predictive Analytics', 'Automation']
    },
    {
      icon: FaCode,
      title: 'Custom Software Development',
      description: 'Full-stack development for mobile, web, and enterprise platforms, designed to scale.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions']
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
        Our Services
      </motion.h2>
      
      <div className="services-grid">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 50px rgba(255, 107, 107, 0.15)'
              }}
            >
              <div className="service-icon">
                <IconComponent />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature">{feature}</span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesSlide
