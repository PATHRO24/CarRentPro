// Enhanced Preloader with Sports Car Animation
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader")
  
    // Replace the existing preloader content with the sports car GIF
    preloader.innerHTML = `
      <div class="sports-car-loader">
        <img src="https://i.pinimg.com/originals/27/2a/74/272a7442662ceedd242ac93a9f6eecb5.gif" alt="Loading...">
        <div class="loader-text">
          <span class="loading-text">LOADING</span>
          <span class="loading-dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </div>
        <div class="loader-progress">
          <div class="loader-progress-bar"></div>
        </div>
      </div>
    `
  
    // Simulate loading progress
    const progressBar = document.querySelector(".loader-progress-bar")
    let progress = 0
  
    const simulateProgress = () => {
      if (progress < 100) {
        progress += Math.random() * 5
        progress = Math.min(progress, 100)
        progressBar.style.width = `${progress}%`
  
        if (progress < 100) {
          setTimeout(simulateProgress, 100)
        } else {
          // When loading is complete, show welcome message
          setTimeout(() => {
            document.querySelector(".sports-car-loader").classList.add("loaded")
  
            // Create welcome overlay
            const welcomeOverlay = document.createElement("div")
            welcomeOverlay.className = "welcome-overlay"
            welcomeOverlay.innerHTML = `
              <div class="welcome-content">
                <h1 class="welcome-title">Welcome to CarRentPro</h1>
                <p class="welcome-subtitle">Experience Luxury on Wheels</p>
                <button class="welcome-button">Explore Now</button>
              </div>
            `
  
            document.body.appendChild(welcomeOverlay)
  
            // Animate welcome overlay
            setTimeout(() => {
              welcomeOverlay.classList.add("active")
  
              // Add click event to welcome button
              document.querySelector(".welcome-button").addEventListener("click", () => {
                welcomeOverlay.classList.add("fade-out")
  
                setTimeout(() => {
                  welcomeOverlay.remove()
                  preloader.classList.add("hidden")
  
                  setTimeout(() => {
                    preloader.style.display = "none"
  
                    // Initialize animations after preloader is hidden
                    initPageAnimations()
                  }, 500)
                }, 1000)
              })
            }, 500)
          }, 500)
        }
      }
    }
  
    // Start progress simulation
    setTimeout(simulateProgress, 500)
  })
  
  // Initialize page animations after preloader is hidden
  function initPageAnimations() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger)
  
    // Hero section animations
    gsap.from(".hero-content h1", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })
  
    gsap.from(".hero-content p", {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3,
    })
  
    gsap.from(".hero-buttons .btn", {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      delay: 0.6,
      stagger: 0.2,
    })
  
    // Animate search form
    gsap.from(".search-form", {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power3.out",
      delay: 1,
    })
  
    // Scroll animations for sections
    const sections = [".features", ".how-it-works", ".about", ".fleet", ".team", ".testimonials"]
  
    sections.forEach((section) => {
      gsap.from(`${section} .section-header`, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out",
      })
    })
  
    // Car cards animation
    gsap.from(".car-card", {
      scrollTrigger: {
        trigger: ".fleet-grid",
        start: "top 80%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1,
    })
  
    // Team members animation
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: ".team-grid",
        start: "top 80%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1,
    })
  
    // Testimonial cards animation
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonials-slider",
        start: "top 80%",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
    })
  
    // Animate stats counter with GSAP
    const stats = document.querySelectorAll(".stat-number")
  
    stats.forEach((stat) => {
      const target = Number.parseInt(stat.getAttribute("data-count"))
  
      gsap.to(stat, {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 80%",
        },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.out",
      })
    })
  
    // Add parallax effect to hero section
    gsap.to(".hero-video-container", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 150,
      ease: "none",
    })
  }
  
  