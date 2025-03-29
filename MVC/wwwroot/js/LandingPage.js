document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.querySelector(".preloader");
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }, 1500);
    });
  
    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  
    // Initialize Hero Slider
    const heroSlider = new Swiper(".hero-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    // Initialize Brands Slider
    const brandsSlider = new Swiper(".brands-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });
  
    // Initialize Testimonials Slider
    const testimonialsSlider = new Swiper(".testimonials-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  
    // Header Scroll Effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    });
  
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
  
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });
  
    mobileDropdowns.forEach((dropdown) => {
      const dropdownLink = dropdown.querySelector("a");
      dropdownLink.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("active");
      });
    });
  
    // Auth Sidebar
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const mobileLoginBtn = document.getElementById("mobileLoginBtn");
    const mobileSignupBtn = document.getElementById("mobileSignupBtn");
    const authSidebar = document.getElementById("authSidebar");
    const closeAuth = document.getElementById("closeAuth");
    const authTabs = document.querySelectorAll(".auth-tab");
    const authForms = document.querySelectorAll(".auth-form");
    const togglePasswordBtns = document.querySelectorAll(".toggle-password");
  
    function openAuthSidebar(tab) {
      authSidebar.classList.add("active");
      document.body.style.overflow = "hidden";
  
      // Set active tab
      authTabs.forEach((t) => t.classList.remove("active"));
      authForms.forEach((f) => f.classList.remove("active"));
  
      document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add("active");
      document.getElementById(`${tab}Form`).classList.add("active");
    }
  
    loginBtn.addEventListener("click", () => {
      openAuthSidebar("login");
    });
  
    signupBtn.addEventListener("click", () => {
      openAuthSidebar("signup");
    });
  
    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener("click", () => {
        openAuthSidebar("login");
        mobileMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    }
  
    if (mobileSignupBtn) {
      mobileSignupBtn.addEventListener("click", () => {
        openAuthSidebar("signup");
        mobileMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    }
  
    closeAuth.addEventListener("click", () => {
      authSidebar.classList.remove("active");
      document.body.style.overflow = "";
    });
  
    // Toggle Password Visibility
    togglePasswordBtns.forEach((btn) => {
      btn.addEventListener("click", function() {
        const input = this.previousElementSibling;
        if (input.type === "password") {
          input.type = "text";
          this.classList.replace("fa-eye-slash", "fa-eye");
        } else {
          input.type = "password";
          this.classList.replace("fa-eye", "fa-eye-slash");
        }
      });
    });
  
    // Auth Tab Switching
    authTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");
  
        authTabs.forEach((t) => t.classList.remove("active"));
        authForms.forEach((f) => f.classList.remove("active"));
  
        this.classList.add("active");
        document.getElementById(`${tabId}Form`).classList.add("active");
      });
    });
  
    // Fleet Category Filtering
    const categoryTabs = document.querySelectorAll(".category-tab");
    const carCards = document.querySelectorAll(".car-card");
  
    categoryTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
  
        // Update active tab
        categoryTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
  
        // Filter cars
        carCards.forEach((card) => {
          if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 100);
          } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        });
      });
    });
  
    // Form Submission Handling
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Show success message or redirect
        if (form.classList.contains("search-form")) {
          alert("Search submitted! This would redirect to search results in a real application.");
        } else if (form.classList.contains("newsletter-form")) {
          alert("Thank you for subscribing to our newsletter!");
          form.reset();
        } else if (form.id === "loginForm") {
          alert("Login successful! This would authenticate the user in a real application.");
          authSidebar.classList.remove("active");
          document.body.style.overflow = "";
        } else if (form.id === "signupForm") {
          alert("Account created successfully! This would register the user in a real application.");
          authSidebar.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    });
  
    // Add animation to car cards on hover
    carCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const img = this.querySelector(".car-image img");
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
      });
  
      card.addEventListener("mouseleave", function () {
        const img = this.querySelector(".car-image img");
        img.style.transform = "scale(1)";
      });
    });
  
    // Initialize current date for date inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split("T")[0];
    dateInputs.forEach((input) => {
      input.value = today;
    });
  
    // Animate stats counter
    const stats = document.querySelectorAll('.stat-number');
    
    if (stats.length > 0) {
      const animateStats = () => {
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'));
          const count = parseInt(stat.innerText);
          const increment = target / 100;
          
          if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 20);
          } else {
            stat.innerText = target;
          }
        });
      };
  
      // Start animation when the about section is in view
      const aboutSection = document.querySelector('.about');
      if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
        
        observer.observe(aboutSection);
      }
    }
  
    // Video background control
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
      // Pause video on small screens to save bandwidth
      const checkVideoPlay = () => {
        if (window.innerWidth < 768) {
          heroVideo.pause();
        } else {
          heroVideo.play();
        }
      };
      
      window.addEventListener('resize', checkVideoPlay);
      checkVideoPlay();
    }
  });
  