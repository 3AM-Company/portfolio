import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa'

const Navigation = ({ 
  currentSlide, 
  totalSlides, 
  onSlideChange, 
  onNext, 
  onPrevious, 
  isAutoPlaying, 
  onToggleAutoPlay 
}) => {
  const createRipple = (event) => {
    const button = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)

    setTimeout(() => {
      circle.remove()
    }, 600)
  }

  return (
    <nav className="slide-nav">
      <div className="nav-dots">
        {Array.from({ length: totalSlides }, (_, index) => (
          <motion.button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={(e) => {
              createRipple(e)
              onSlideChange(index)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Go to slide ${index + 1}`}
            role="button"
            tabIndex="0"
          />
        ))}
      </div>
      
      <div className="nav-arrows">
        <motion.button
          className="nav-btn prev-btn"
          onClick={(e) => {
            createRipple(e)
            onPrevious()
          }}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </motion.button>
        
        <motion.button
          className="nav-btn next-btn"
          onClick={(e) => {
            createRipple(e)
            onNext()
          }}
          disabled={currentSlide === totalSlides - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </motion.button>
        
        <motion.button
          className={`auto-play-btn ${!isAutoPlaying ? 'paused' : ''}`}
          onClick={(e) => {
            createRipple(e)
            onToggleAutoPlay()
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          title={isAutoPlaying ? 'Pause auto-play (Press ESC)' : 'Resume auto-play (Press ESC)'}
        >
          {isAutoPlaying ? <FaPause /> : <FaPlay />}
        </motion.button>
      </div>
    </nav>
  )
}

export default Navigation
