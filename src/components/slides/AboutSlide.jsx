import React from 'react'
import { motion } from 'framer-motion'
import { FaVrCardboard, FaRobot, FaCode, FaLock } from 'react-icons/fa'

const AboutSlide = () => {
  const expertiseAreas = [
    { icon: FaVrCardboard, text: 'Immersive Technologies' },
    { icon: FaRobot, text: 'Artificial Intelligence' },
    { icon: FaCode, text: 'Software Engineering' },
    { icon: FaLock, text: 'Cybersecurity' },
  ]

  const techStack = ['AR/VR', 'AI/ML', 'Cloud', 'Security', 'Mobile', 'Web']

  return (
    <div className="slide-content">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>
      
      <div className="about-grid">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="lead">
            3AM Digital Labs is a team of passionate pioneers and technologists dedicated to solving tomorrow's challenges with cutting-edge innovation.
          </p>
          <p>
            Drawing expertise from high-profile companies and diverse industries, we design and deliver robust, scalable, and impactful digital solutions.
          </p>
          
          <motion.div 
            className="expertise-areas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div 
                  key={index}
                  className="area"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    y: -2,
                    boxShadow: '0 8px 25px rgba(255, 107, 107, 0.15)'
                  }}
                >
                  <IconComponent />
                  <span>{area.text}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 12px 35px rgba(255, 107, 107, 0.4)'
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSlide
