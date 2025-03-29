// Custom Sports Car Cursor Implementation
document.addEventListener("DOMContentLoaded", () => {
    // Create cursor elements
    const cursorContainer = document.createElement("div")
    cursorContainer.className = "custom-cursor-container"
  
    const cursor = document.createElement("div")
    cursor.className = "custom-cursor"
  
    // Create image element for the sports car cursor
    const cursorImg = document.createElement("img")
    cursorImg.src = "https://i.pinimg.com/736x/d1/8a/27/d18a27891db94bfbf175f62ac579d3cf.jpg"
    cursorImg.alt = "Sports Car Cursor"
  
    // Append elements
    cursor.appendChild(cursorImg)
    cursorContainer.appendChild(cursor)
    document.body.appendChild(cursorContainer)
  
    // Track cursor position
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
  
    // Update cursor position with smooth animation
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })
  
    // Animate cursor with requestAnimationFrame for smooth movement
    const animateCursor = () => {
      // Add smooth easing
      const speed = 0.15
      cursorX += (mouseX - cursorX) * speed
      cursorY += (mouseY - cursorY) * speed
  
      // Apply position
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
  
      requestAnimationFrame(animateCursor)
    }
  
    animateCursor()
  
    // Hide default cursor
    document.body.classList.add("custom-cursor-active")
  
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, .car-card, .team-member, input, select, .swiper-button-next, .swiper-button-prev",
    )
  
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover")
      })
  
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover")
      })
    })
  })
  
  