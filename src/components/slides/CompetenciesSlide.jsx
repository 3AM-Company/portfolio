import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaLaptopCode, 
  FaCloudUploadAlt, 
  FaExchangeAlt, 
  FaBug, 
  FaShieldAlt 
} from 'react-icons/fa'

const CompetenciesSlide = () => {
  const competencies = [
    {
      icon: FaLaptopCode,
      title: 'Software Development',
      description: 'Building robust, scalable, and tailored applications'
    },
    {
      icon: FaCloudUploadAlt,
      title: 'Software Deployment',
      description: 'Cloud and on-premises deployment with best practices'
    },
    {
      icon: FaExchangeAlt,
      title: 'Data Migration',
      description: 'Seamless migration with full data integrity'
    },
    {
      icon: FaBug,
      title: 'Quality Assurance',
      description: 'Manual and automated testing for performance'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity Testing',
      description: 'Advanced penetration testing and vulnerability assessments'
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
        Core Competencies
      </motion.h2>
      
      <div className="competencies-container">
        {competencies.map((competency, index) => {
          const IconComponent = competency.icon
          return (
            <motion.div 
              key={index}
              className="competency-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 15px 40px rgba(255, 107, 107, 0.15)'
              }}
            >
              <div className="competency-icon">
                <IconComponent />
              </div>
              <h3>{competency.title}</h3>
              <p>{competency.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default CompetenciesSlide
