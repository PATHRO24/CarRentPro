// Video Introduction Implementation
document.addEventListener("DOMContentLoaded", () => {
    // Create video intro container
    const createVideoIntro = () => {
      const videoIntroContainer = document.createElement("div")
      videoIntroContainer.className = "video-intro-container"
  
      videoIntroContainer.innerHTML = `
        <div class="video-intro-content">
          <video id="introVideo" class="intro-video" muted>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-driving-a-sports-car-on-a-road-at-sunset-10081-large.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="intro-overlay"></div>
          <div class="intro-skip">
            <button class="intro-skip-button">Skip Intro</button>
          </div>
        </div>
      `
  
      document.body.appendChild(videoIntroContainer)
  
      const introVideo = document.getElementById("introVideo")
      const skipButton = document.querySelector(".intro-skip-button")
  
      // Play video when preloader is hidden
      const checkPreloader = setInterval(() => {
        const preloader = document.querySelector(".preloader")
        if (preloader.style.display === "none") {
          clearInterval(checkPreloader)
  
          // Show video intro
          videoIntroContainer.classList.add("active")
  
          // Play video after a short delay
          setTimeout(() => {
            introVideo.play()
  
            // Add event listener for video end
            introVideo.addEventListener("ended", () => {
              endVideoIntro()
            })
          }, 500)
        }
      }, 100)
  
      // Skip button event listener
      skipButton.addEventListener("click", () => {
        endVideoIntro()
      })
  
      // Function to end video intro
      const endVideoIntro = () => {
        videoIntroContainer.classList.add("fade-out")
  
        setTimeout(() => {
          videoIntroContainer.remove()
        }, 1000)
      }
    }
  
    // Initialize video intro after page load
    window.addEventListener("load", () => {
      // Delay video intro creation to ensure preloader works first
      setTimeout(createVideoIntro, 1000)
    })
  })
  
  