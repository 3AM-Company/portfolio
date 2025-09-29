import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'

const ContactSlide = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '23B, Ground Floor, King Hussein Business Park\nAmman, 11185, Jordan'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+962 (079) 543-0116'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'mqudah@3amdigitallabs.com'
    },
    {
      icon: FaGlobe,
      title: 'Website',
      details: '3amdigitallabs.com'
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
        Get In Touch
      </motion.h2>
      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.div 
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -3,
                  boxShadow: '0 12px 35px rgba(255, 107, 107, 0.15)'
                }}
              >
                <div className="contact-icon">
                  <IconComponent />
                </div>
                <div className="contact-details">
                  <h3>{contact.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{contact.details}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div 
          className="contact-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="logo-container">
            <div className="logo-3am large">
              <span className="three">3</span><span className="am">AM</span>
            </div>
            <div className="logo-text">DIGITAL LABS</div>
          </div>
          <p className="tagline">Pioneering Tomorrow's Solutions, Today</p>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactSlide
