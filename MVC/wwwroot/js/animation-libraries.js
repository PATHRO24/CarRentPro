// Animation Libraries Integration
document.addEventListener("DOMContentLoaded", () => {
    // Initialize ScrollReveal for scroll animations
    const initScrollReveal = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        reset: false,
      })
  
      // Apply to various sections
      sr.reveal(".feature-card", { interval: 100 })
      sr.reveal(".step", { interval: 150 })
      sr.reveal(".car-card", { interval: 100 })
      sr.reveal(".team-member", { interval: 100 })
      sr.reveal(".testimonial-card", { interval: 100 })
      sr.reveal(".about-image", { origin: "left" })
      sr.reveal(".about-text", { origin: "right" })
      sr.reveal(".newsletter-content", { origin: "bottom" })
    }
  
    // Initialize Typed.js for text animations
    const initTypedJs = () => {
      // Hero heading animation
      const heroHeadings = document.querySelectorAll(".hero-content h1")
  
      if (heroHeadings.length > 0) {
        heroHeadings.forEach((heading) => {
          const originalText = heading.textContent
          heading.textContent = ""
  
          new Typed(heading, {
            strings: [originalText],
            typeSpeed: 50,
            startDelay: 1000,
            showCursor: false,
          })
        })
      }
  
      // Section headers animation
      const sectionHeaders = document.querySelectorAll(".section-header h2")
  
      if (sectionHeaders.length > 0) {
        sectionHeaders.forEach((header) => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const originalText = header.textContent
                  header.textContent = ""
  
                  new Typed(header, {
                    strings: [originalText],
                    typeSpeed: 50,
                    startDelay: 300,
                    showCursor: false,
                  })
  
                  observer.unobserve(header)
                }
              })
            },
            { threshold: 0.5 },
          )
  
          observer.observe(header)
        })
      }
    }
  
    // Initialize Anime.js animations
    const initAnimeJs = () => {
      // Animate feature icons
      anime({
        targets: ".feature-icon",
        translateY: [-15, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: "easeOutQuad",
        duration: 800,
      })
  
      // Animate stats counter background
      anime({
        targets: ".stat",
        backgroundColor: [
          { value: "rgba(255, 90, 0, 0.1)", duration: 500 },
          { value: "rgba(255, 90, 0, 0)", duration: 500 },
        ],
        delay: anime.stagger(200),
        easing: "easeInOutQuad",
        loop: true,
      })
  
      // Animate brand logos
      anime({
        targets: ".brand-item img",
        scale: [0.8, 1],
        opacity: [0.5, 1],
        delay: anime.stagger(100),
        easing: "easeOutElastic(1, .5)",
        duration: 1500,
        loop: true,
        direction: "alternate",
      })
    }
  
    // Initialize Velocity.js animations
    const initVelocityJs = () => {
      // Animate car cards on hover
      const carCards = document.querySelectorAll(".car-card")
  
      carCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          Velocity(
            card.querySelector(".car-image img"),
            {
              rotateY: "10deg",
              translateZ: "50px",
            },
            { duration: 300, easing: "ease-out" },
          )
        })
  
        card.addEventListener("mouseleave", () => {
          Velocity(
            card.querySelector(".car-image img"),
            {
              rotateY: "0deg",
              translateZ: "0px",
            },
            { duration: 300, easing: "ease-out" },
          )
        })
      })
  
      // Animate buttons on hover
      const buttons = document.querySelectorAll(".btn")
  
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          Velocity(
            button,
            {
              scale: 1.05,
            },
            { duration: 200, easing: "ease-out" },
          )
        })
  
        button.addEventListener("mouseleave", () => {
          Velocity(
            button,
            {
              scale: 1,
            },
            { duration: 200, easing: "ease-out" },
          )
        })
      })
    }
  
    // Initialize all animations after page load
    window.addEventListener("load", () => {
      // Check if preloader is hidden before initializing animations
      const checkPreloader = setInterval(() => {
        const preloader = document.querySelector(".preloader")
        if (preloader.style.display === "none") {
          clearInterval(checkPreloader)
  
          // Initialize all animation libraries
          initScrollReveal()
          initTypedJs()
          initAnimeJs()
          initVelocityJs()
        }
      }, 100)
    })
  })
  
  const ScrollReveal = window.ScrollReveal
  const Typed = window.Typed
  const anime = window.anime
  const Velocity = window.Velocity
  
  