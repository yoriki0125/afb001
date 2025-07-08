// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation clicks
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Handle button clicks
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add click animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Handle form submission
  const emailForm = document.querySelector(".email-form")
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector(".email-input")
      const email = emailInput.value

      if (email) {
        alert("資料請求ありがとうございます。確認メールをお送りいたします。")
        emailInput.value = ""
      }
    })
  }

  // Handle floating contact button
  const floatingContact = document.querySelector(".floating-contact")
  if (floatingContact) {
    floatingContact.addEventListener("click", () => {
      alert("営業担当よりご連絡いたします。お気軽にお問い合わせください。")
    })
  }

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe sections for fade-in animation
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Progress bar animation
  const progressBars = document.querySelectorAll(".progress-fill")
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target
        const width = progressBar.style.width
        progressBar.style.width = "0%"
        setTimeout(() => {
          progressBar.style.width = width
        }, 200)
      }
    })
  }, observerOptions)

  progressBars.forEach((bar) => {
    progressObserver.observe(bar)
  })

  // Add hover effects to cards
  const cards = document.querySelectorAll(".feature-card, .benefit-card, .pricing-card, .problem-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    })
  })

  // Mobile menu toggle (if needed)
  const header = document.querySelector(".header")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }
    lastScrollY = window.scrollY
  })

  // Add transition to header
  header.style.transition = "transform 0.3s ease"
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Handle resize events
window.addEventListener("resize", () => {
  // Recalculate any position-dependent elements if needed
  const floatingContact = document.querySelector(".floating-contact")
  if (window.innerWidth < 768 && floatingContact) {
    floatingContact.style.bottom = "1rem"
    floatingContact.style.right = "1rem"
  } else if (floatingContact) {
    floatingContact.style.bottom = "2rem"
    floatingContact.style.right = "2rem"
  }
})
