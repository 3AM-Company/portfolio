import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import HeroSlide from './components/slides/HeroSlide'
import AboutSlide from './components/slides/AboutSlide'
import MissionVisionSlide from './components/slides/MissionVisionSlide'
import ServicesSlide from './components/slides/ServicesSlide'
import CompetenciesSlide from './components/slides/CompetenciesSlide'
import ProjectsSlide from './components/slides/ProjectsSlide'
import WhyUsSlide from './components/slides/WhyUsSlide'
import ContactSlide from './components/slides/ContactSlide'
import './App.css'

const slides = [
  { id: 0, component: HeroSlide },
  { id: 1, component: AboutSlide },
  { id: 2, component: MissionVisionSlide },
  { id: 3, component: ServicesSlide },
  { id: 4, component: CompetenciesSlide },
  { id: 5, component: ProjectsSlide },
  { id: 6, component: WhyUsSlide },
  { id: 7, component: ContactSlide },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 20000) // 20 seconds per slide

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goToPreviousSlide()
          break
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          goToNextSlide()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
        case 'Escape':
          e.preventDefault()
          setIsAutoPlaying(!isAutoPlaying)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isAutoPlaying])

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentSlide(slideIndex)
      setIsAutoPlaying(false) // Stop auto-play when manually navigating
    }
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={currentSlide === 0 ? "hero-slide" : "slide-container"}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
        onNext={goToNextSlide}
        onPrevious={goToPreviousSlide}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
      />
    </div>
  )
}

export default App
