import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaCube, 
  FaBrain, 
  FaShieldAlt, 
  FaGamepad, 
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaVrCardboard, 
  FaDatabase, 
  FaRobot, 
  FaLaptopCode, 
  FaNetworkWired,
  FaCog,
  FaLock,
  FaChartLine,
  FaServer,
  FaGlobe,
  FaEye,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaMicrochip,
  FaWifi,
  FaTerminal,
  FaFileCode,
  FaBug,
  FaKey,
  FaSearch,
  FaDownload,
  FaUpload,
  FaSync,
  FaPlay,
  FaPause,
  FaStop,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
  FaHeadphones,
  FaVideo,
  FaCamera,
  FaImage,
  FaFile,
  FaFolder,
  FaTrash,
  FaEdit,
  FaSave,
  FaCopy,
  FaPaste,
  FaCut,
  FaUndo,
  FaRedo,
  FaPrint,
  FaShare,
  FaHeart,
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaReply,
  FaFlag,
  FaBookmark,
  FaTag,
  FaTags,
  FaCalendar,
  FaClock,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaUsers,
  FaUserPlus,
  FaUserMinus,
  FaUserCheck,
  FaUserTimes,
  FaUserSecret,
  FaUserCog,
  FaUserEdit,
  FaUserShield,
  FaUserLock,
  FaUserGraduate,
  FaUserTie,
  FaUserMd,
  FaUserNurse,
  FaUserAstronaut,
  FaUserNinja,
  FaUserInjured,
  FaUserClock,
  FaUserFriends
} from 'react-icons/fa'

const HeroSlide = () => {
  const floatingElements = [
    // Original tech icons
    { icon: FaCube, delay: 0, position: { top: '10%', left: '10%' }, color: '#FF6B6B' },
    { icon: FaBrain, delay: 1.2, position: { top: '20%', right: '15%' }, color: '#4ECDC4' },
    { icon: FaShieldAlt, delay: 2.4, position: { bottom: '20%', left: '15%' }, color: '#45B7D1' },
    { icon: FaGamepad, delay: 3.6, position: { top: '30%', right: '10%' }, color: '#96CEB4' },
    { icon: FaCode, delay: 0.8, position: { top: '40%', left: '10%' }, color: '#FFEAA7' },
    { icon: FaMobileAlt, delay: 2.0, position: { top: '50%', right: '20%' }, color: '#DDA0DD' },
    { icon: FaCloud, delay: 3.2, position: { top: '60%', left: '20%' }, color: '#98D8C8' },
    { icon: FaVrCardboard, delay: 1.6, position: { top: '70%', right: '10%' }, color: '#F7DC6F' },
    { icon: FaDatabase, delay: 4.0, position: { bottom: '30%', left: '25%' }, color: '#BB8FCE' },
    { icon: FaRobot, delay: 2.8, position: { top: '80%', right: '15%' }, color: '#85C1E9' },
    { icon: FaLaptopCode, delay: 1.4, position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }, color: '#F8C471' },
    { icon: FaNetworkWired, delay: 3.8, position: { top: '90%', left: '35%' }, color: '#82E0AA' },
    
    // Additional tech icons - top row
    { icon: FaCog, delay: 0.5, position: { top: '5%', left: '25%' }, color: '#FF6B6B' },
    { icon: FaLock, delay: 1.7, position: { top: '5%', right: '25%' }, color: '#4ECDC4' },
    { icon: FaChartLine, delay: 2.9, position: { top: '5%', left: '50%', transform: 'translateX(-50%)' }, color: '#45B7D1' },
    { icon: FaServer, delay: 4.1, position: { top: '5%', left: '75%' }, color: '#96CEB4' },
    { icon: FaGlobe, delay: 0.3, position: { top: '5%', right: '5%' }, color: '#FFEAA7' },
    
    // Second row
    { icon: FaEye, delay: 1.5, position: { top: '15%', left: '5%' }, color: '#DDA0DD' },
    { icon: FaRocket, delay: 2.7, position: { top: '15%', left: '30%' }, color: '#98D8C8' },
    { icon: FaLightbulb, delay: 3.9, position: { top: '15%', right: '30%' }, color: '#F7DC6F' },
    { icon: FaCogs, delay: 0.1, position: { top: '15%', right: '5%' }, color: '#BB8FCE' },
    { icon: FaMicrochip, delay: 1.3, position: { top: '15%', left: '60%' }, color: '#85C1E9' },
    
    // Third row
    { icon: FaWifi, delay: 2.5, position: { top: '25%', left: '5%' }, color: '#82E0AA' },
    { icon: FaTerminal, delay: 3.7, position: { top: '25%', left: '35%' }, color: '#FF6B6B' },
    { icon: FaFileCode, delay: 0.9, position: { top: '25%', right: '35%' }, color: '#4ECDC4' },
    { icon: FaBug, delay: 2.1, position: { top: '25%', right: '5%' }, color: '#45B7D1' },
    { icon: FaKey, delay: 3.3, position: { top: '25%', left: '70%' }, color: '#96CEB4' },
    
    // Fourth row
    { icon: FaSearch, delay: 0.7, position: { top: '35%', left: '5%' }, color: '#FFEAA7' },
    { icon: FaDownload, delay: 1.9, position: { top: '35%', left: '30%' }, color: '#DDA0DD' },
    { icon: FaUpload, delay: 3.1, position: { top: '35%', right: '30%' }, color: '#98D8C8' },
    { icon: FaSync, delay: 0.3, position: { top: '35%', right: '5%' }, color: '#F7DC6F' },
    { icon: FaPlay, delay: 1.5, position: { top: '35%', left: '65%' }, color: '#BB8FCE' },
    
    // Fifth row
    { icon: FaPause, delay: 2.7, position: { top: '45%', left: '5%' }, color: '#85C1E9' },
    { icon: FaStop, delay: 3.9, position: { top: '45%', left: '30%' }, color: '#82E0AA' },
    { icon: FaForward, delay: 0.1, position: { top: '45%', right: '30%' }, color: '#FF6B6B' },
    { icon: FaBackward, delay: 1.3, position: { top: '45%', right: '5%' }, color: '#4ECDC4' },
    { icon: FaVolumeUp, delay: 2.5, position: { top: '45%', left: '60%' }, color: '#45B7D1' },
    
    // Sixth row
    { icon: FaVolumeDown, delay: 3.7, position: { top: '55%', left: '5%' }, color: '#96CEB4' },
    { icon: FaVolumeMute, delay: 0.5, position: { top: '55%', left: '30%' }, color: '#FFEAA7' },
    { icon: FaHeadphones, delay: 1.7, position: { top: '55%', right: '30%' }, color: '#DDA0DD' },
    { icon: FaVideo, delay: 2.9, position: { top: '55%', right: '5%' }, color: '#98D8C8' },
    { icon: FaCamera, delay: 4.1, position: { top: '55%', left: '65%' }, color: '#F7DC6F' },
    
    // Seventh row
    { icon: FaImage, delay: 0.3, position: { top: '65%', left: '5%' }, color: '#BB8FCE' },
    { icon: FaFile, delay: 1.5, position: { top: '65%', left: '30%' }, color: '#85C1E9' },
    { icon: FaFolder, delay: 2.7, position: { top: '65%', right: '30%' }, color: '#82E0AA' },
    { icon: FaTrash, delay: 3.9, position: { top: '65%', right: '5%' }, color: '#FF6B6B' },
    { icon: FaEdit, delay: 0.1, position: { top: '65%', left: '60%' }, color: '#4ECDC4' },
    
    // Eighth row
    { icon: FaSave, delay: 1.3, position: { top: '75%', left: '5%' }, color: '#45B7D1' },
    { icon: FaCopy, delay: 2.5, position: { top: '75%', left: '30%' }, color: '#96CEB4' },
    { icon: FaPaste, delay: 3.7, position: { top: '75%', right: '30%' }, color: '#FFEAA7' },
    { icon: FaCut, delay: 0.5, position: { top: '75%', right: '5%' }, color: '#DDA0DD' },
    { icon: FaUndo, delay: 1.7, position: { top: '75%', left: '65%' }, color: '#98D8C8' },
    
    // Ninth row
    { icon: FaRedo, delay: 2.9, position: { top: '85%', left: '5%' }, color: '#F7DC6F' },
    { icon: FaPrint, delay: 4.1, position: { top: '85%', left: '30%' }, color: '#BB8FCE' },
    { icon: FaShare, delay: 0.3, position: { top: '85%', right: '30%' }, color: '#85C1E9' },
    { icon: FaHeart, delay: 1.5, position: { top: '85%', right: '5%' }, color: '#82E0AA' },
    { icon: FaStar, delay: 2.7, position: { top: '85%', left: '60%' }, color: '#FF6B6B' },
    
    // Bottom row
    { icon: FaThumbsUp, delay: 3.9, position: { bottom: '5%', left: '5%' }, color: '#4ECDC4' },
    { icon: FaThumbsDown, delay: 0.1, position: { bottom: '5%', left: '30%' }, color: '#45B7D1' },
    { icon: FaComment, delay: 1.3, position: { bottom: '5%', right: '30%' }, color: '#96CEB4' },
    { icon: FaReply, delay: 2.5, position: { bottom: '5%', right: '5%' }, color: '#FFEAA7' },
    { icon: FaFlag, delay: 3.7, position: { bottom: '5%', left: '65%' }, color: '#DDA0DD' },
    
    // Additional scattered icons
    { icon: FaBookmark, delay: 0.5, position: { top: '12%', left: '45%' }, color: '#98D8C8' },
    { icon: FaTag, delay: 1.7, position: { top: '22%', left: '15%' }, color: '#F7DC6F' },
    { icon: FaTags, delay: 2.9, position: { top: '32%', right: '20%' }, color: '#BB8FCE' },
    { icon: FaCalendar, delay: 4.1, position: { top: '42%', left: '20%' }, color: '#85C1E9' },
    { icon: FaClock, delay: 0.3, position: { top: '52%', right: '15%' }, color: '#82E0AA' },
    { icon: FaMapMarker, delay: 1.5, position: { top: '62%', left: '15%' }, color: '#FF6B6B' },
    { icon: FaPhone, delay: 2.7, position: { top: '72%', right: '20%' }, color: '#4ECDC4' },
    { icon: FaEnvelope, delay: 3.9, position: { top: '82%', left: '20%' }, color: '#45B7D1' },
    { icon: FaUser, delay: 0.1, position: { top: '92%', right: '15%' }, color: '#96CEB4' },
    { icon: FaUsers, delay: 1.3, position: { top: '92%', left: '45%' }, color: '#FFEAA7' },
    
    // More user-related icons
    { icon: FaUserPlus, delay: 2.5, position: { top: '8%', left: '40%' }, color: '#DDA0DD' },
    { icon: FaUserMinus, delay: 3.7, position: { top: '18%', right: '40%' }, color: '#98D8C8' },
    { icon: FaUserCheck, delay: 0.5, position: { top: '28%', left: '40%' }, color: '#F7DC6F' },
    { icon: FaUserTimes, delay: 1.7, position: { top: '38%', right: '40%' }, color: '#BB8FCE' },
    { icon: FaUserSecret, delay: 2.9, position: { top: '48%', left: '40%' }, color: '#85C1E9' },
    { icon: FaUserCog, delay: 4.1, position: { top: '58%', right: '40%' }, color: '#82E0AA' },
    { icon: FaUserEdit, delay: 0.3, position: { top: '68%', left: '40%' }, color: '#FF6B6B' },
    { icon: FaUserShield, delay: 1.5, position: { top: '78%', right: '40%' }, color: '#4ECDC4' },
    { icon: FaUserLock, delay: 2.7, position: { top: '88%', left: '40%' }, color: '#45B7D1' },
    { icon: FaUserCheck, delay: 3.9, position: { bottom: '8%', right: '40%' }, color: '#96CEB4' },
    { icon: FaUserGraduate, delay: 0.1, position: { bottom: '18%', left: '40%' }, color: '#FFEAA7' },
    { icon: FaUserTie, delay: 1.3, position: { bottom: '28%', right: '40%' }, color: '#DDA0DD' },
    { icon: FaUserMd, delay: 2.5, position: { bottom: '38%', left: '40%' }, color: '#98D8C8' },
    { icon: FaUserNurse, delay: 3.7, position: { bottom: '48%', right: '40%' }, color: '#F7DC6F' },
    { icon: FaUserAstronaut, delay: 0.5, position: { bottom: '58%', left: '40%' }, color: '#BB8FCE' },
    { icon: FaUserNinja, delay: 1.7, position: { bottom: '68%', right: '40%' }, color: '#85C1E9' },
    { icon: FaUserInjured, delay: 2.9, position: { bottom: '78%', left: '40%' }, color: '#82E0AA' },
    { icon: FaUserClock, delay: 4.1, position: { bottom: '88%', right: '40%' }, color: '#FF6B6B' },
    { icon: FaUserFriends, delay: 0.3, position: { top: '6%', left: '55%' }, color: '#4ECDC4' },
    { icon: FaUserCog, delay: 1.5, position: { top: '16%', right: '55%' }, color: '#45B7D1' },
    { icon: FaUsers, delay: 2.7, position: { top: '26%', left: '55%' }, color: '#96CEB4' }
  ]

  const stats = [
    { number: "100+", label: "Government Services Secured" },
    { number: "10+", label: "Private Companies Secured" },
    { number: "15+", label: "Websites Created" },
    { number: "5+", label: "Mobile Apps Created" },
    { number: "20+", label: "Web Apps Deployed" }
  ]

  return (
    <div className="slide-content">
      <div className="hero-content">
        <motion.div 
          className="logo-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="logo-3am">
            <span className="three">3</span><span className="am">AM</span>
          </div>
          <div className="logo-text">DIGITAL LABS</div>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pioneering Tomorrow's Solutions, Today
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Cutting-edge innovation in XR, AI, software development, and cybersecurity
        </motion.p>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="hero-visual">
        <div className="floating-elements">
          {floatingElements.map((element, index) => {
            const IconComponent = element.icon
            return (
              <motion.div
                key={index}
                className={`element element-${index + 1}`}
                style={{ 
                  ...element.position,
                  '--element-color': element.color,
                  transform: element.position.transform || 'none'
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: 0,
                  y: [0, -20, -30, -20, 0],
                  x: [0, 5, -5, 5, 0]
                }}
                transition={{
                  duration: 8,
                  delay: element.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: '0 15px 50px rgba(0, 0, 0, 0.3)'
                }}
              >
                <IconComponent />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeroSlide