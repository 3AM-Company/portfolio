// Slide Navigation System
class SlidePresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateNavigation();
        this.startAutoPlay();
    }
    
    bindEvents() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
            }
        });
        
        // Touch/swipe support
        this.addTouchSupport();
        
        // Pause auto-play on hover
        document.addEventListener('mouseenter', () => this.pauseAutoPlay());
        document.addEventListener('mouseleave', () => this.resumeAutoPlay());
    }
    
    addTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Check if it's a horizontal swipe
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.previousSlide();
                } else {
                    this.nextSlide();
                }
            }
        });
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        } else {
            this.goToSlide(0); // Loop back to first slide
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        } else {
            this.goToSlide(this.totalSlides - 1); // Loop to last slide
        }
    }
    
    goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= this.totalSlides) return;
        
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Add prev class for animation
        if (slideIndex > this.currentSlide) {
            this.slides[this.currentSlide].classList.add('prev');
        }
        
        // Update current slide
        this.currentSlide = slideIndex;
        
        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
        
        // Remove prev class after animation
        setTimeout(() => {
            this.slides.forEach(slide => slide.classList.remove('prev'));
        }, 600);
        
        this.updateNavigation();
        this.resetAutoPlay();
    }
    
    updateNavigation() {
        // Update button states
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        
        // Update button visibility for better UX
        if (this.currentSlide === 0) {
            this.prevBtn.style.opacity = '0.5';
        } else {
            this.prevBtn.style.opacity = '1';
        }
        
        if (this.currentSlide === this.totalSlides - 1) {
            this.nextBtn.style.opacity = '0.5';
        } else {
            this.nextBtn.style.opacity = '1';
        }
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 20000); // Auto-advance every 20 seconds
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
    
    resumeAutoPlay() {
        this.startAutoPlay();
    }
    
    resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }
}

// Animation and Visual Effects
class VisualEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.addScrollAnimations();
        this.addHoverEffects();
        this.addLoadingAnimations();
    }
    
    addScrollAnimations() {
        // Intersection Observer for slide animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.service-card, .competency-item, .why-card, .contact-item').forEach(el => {
            observer.observe(el);
        });
    }
    
    addHoverEffects() {
        // Add ripple effect to buttons
        document.querySelectorAll('.nav-btn, .dot').forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRipple(e);
            });
        });
    }
    
    createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 600);
    }
    
    addLoadingAnimations() {
        // Add staggered animation to elements
        const animateElements = () => {
            const elements = document.querySelectorAll('.service-card, .competency-item, .why-card');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 100);
            });
        };
        
        // Trigger animation when slide becomes active
        const slideObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const slide = mutation.target;
                    if (slide.classList.contains('active')) {
                        setTimeout(animateElements, 300);
                    }
                }
            });
        });
        
        document.querySelectorAll('.slide').forEach(slide => {
            slideObserver.observe(slide, { attributes: true });
        });
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.optimizeImages();
        this.addLazyLoading();
        this.optimizeAnimations();
    }
    
    optimizeImages() {
        // Add loading="lazy" to any future images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }
    
    addLazyLoading() {
        // Lazy load non-critical content
        const lazyElements = document.querySelectorAll('.floating-elements, .tech-stack');
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        });
        
        lazyElements.forEach(el => {
            lazyObserver.observe(el);
        });
    }
    
    optimizeAnimations() {
        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.documentElement.style.setProperty('--animation-duration', '0.3s');
        }
        
        // Respect user's motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.1s');
        }
    }
}

// Accessibility Enhancements
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }
    
    init() {
        this.addARIALabels();
        this.enhanceKeyboardNavigation();
        this.addScreenReaderSupport();
    }
    
    addARIALabels() {
        // Add ARIA labels to navigation
        document.querySelectorAll('.nav-btn').forEach((btn, index) => {
            const isPrev = btn.classList.contains('prev-btn');
            btn.setAttribute('aria-label', isPrev ? 'Previous slide' : 'Next slide');
        });
        
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.setAttribute('role', 'button');
            dot.setAttribute('tabindex', '0');
        });
    }
    
    enhanceKeyboardNavigation() {
        // Make dots focusable and keyboard navigable
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    presentation.goToSlide(index);
                }
            });
        });
    }
    
    addScreenReaderSupport() {
        // Add live region for slide announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        document.body.appendChild(liveRegion);
        
        // Announce slide changes
        const originalGoToSlide = presentation.goToSlide.bind(presentation);
        presentation.goToSlide = (slideIndex) => {
            originalGoToSlide(slideIndex);
            const slideTitle = document.querySelector(`#slide-${slideIndex} .slide-title`)?.textContent || `Slide ${slideIndex + 1}`;
            liveRegion.textContent = `Now viewing: ${slideTitle}`;
        };
    }
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const presentation = new SlidePresentation();
    const visualEffects = new VisualEffects();
    const performanceOptimizer = new PerformanceOptimizer();
    const accessibilityEnhancer = new AccessibilityEnhancer();
    
    // Make presentation globally accessible for debugging
    window.presentation = presentation;
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .sr-only {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .loaded {
            animation: fadeIn 0.8s ease forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add loading state
    document.body.classList.add('loaded');
    
    console.log('3AM Digital Labs Presentation initialized successfully!');
});
