import React from 'react'
import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaLightbulb, FaHandshake, FaStar, FaRocket } from 'react-icons/fa'

const MissionVisionSlide = () => {
  const values = [
    { icon: FaLightbulb, text: 'Innovation' },
    { icon: FaHandshake, text: 'Collaboration' },
    { icon: FaStar, text: 'Excellence' },
    { icon: FaRocket, text: 'Impact-Focused' },
  ]

  return (
    <div className="slide-content">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mission & Vision
      </motion.h2>
      
      <motion.div 
        className="mission-vision-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="mission-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            y: -5,
            boxShadow: '0 15px 40px rgba(255, 107, 107, 0.15)'
          }}
        >
          <div className="card-icon">
            <FaBullseye />
          </div>
          <h3>Mission</h3>
          <p>
            To empower organizations by delivering innovative digital solutions in XR, AI, software development, and cybersecurity that drive growth and resilience in a rapidly evolving landscape.
          </p>
        </motion.div>
        
        <motion.div 
          className="vision-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            y: -5,
            boxShadow: '0 15px 40px rgba(255, 107, 107, 0.15)'
          }}
        >
          <div className="card-icon">
            <FaEye />
          </div>
          <h3>Vision</h3>
          <p>
            To be global leaders in crafting transformative digital experiences that shape the future of technology adoption and innovation.
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="values"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3>Our Core Values</h3>
        <div className="values-list">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div 
                key={index}
                className="value-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)'
                }}
              >
                <IconComponent />
                <span>{value.text}</span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default MissionVisionSlide
