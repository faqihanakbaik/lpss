// ========================================
// SMOOTH & ELEGANT ENHANCEMENTS
// ========================================

(function () {
  "use strict";

  // ===== SCROLL PROGRESS BAR =====
  function createScrollProgress() {
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }

  // ===== BACK TO TOP BUTTON =====
  function createBackToTop() {
    const backToTop = document.createElement("button");
    backToTop.className = "back-to-top";
    backToTop.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
      </svg>
    `;
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.setAttribute("data-tooltip", "Kembali ke atas");
    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    // Smooth scroll to top
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===== FADE IN ON SCROLL ===== (DISABLED - User Request)
  // Elements should appear immediately without animation
  function initFadeInOnScroll() {
    // Fade-in animation disabled - all elements visible immediately
    // Force all elements to be visible
    document
      .querySelectorAll(
        ".section, .product-card, .cabang-card, .testimonial-card, .trust-badge, .hero-content, .hero-cta, .hero-title, .hero-subtitle, .btn"
      )
      .forEach((element) => {
        element.classList.add("visible");
        element.style.opacity = "1";
        element.style.transform = "none";
        element.style.animation = "none";
        element.style.visibility = "visible";
      });
  }

  // ===== SMOOTH PARALLAX EFFECT ===== (DISABLED - User Request)
  // Background should stay fixed, not move on scroll
  function initParallax() {
    // Parallax disabled - background stays in place
  }

  // ===== RIPPLE EFFECT ON BUTTONS =====
  function initRippleEffect() {
    document
      .querySelectorAll(".btn, .quick-reply, .nav-btn")
      .forEach((button) => {
        button.classList.add("ripple");
      });
  }

  // ===== SMOOTH IMAGE LOADING =====
  function initImageLoading() {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
      if (img.complete) {
        img.style.opacity = "1";
      } else {
        img.addEventListener("load", () => {
          img.style.opacity = "1";
        });
      }
    });
  }

  // ===== LOADING SPINNER =====
  function createLoadingSpinner() {
    const spinner = document.createElement("div");
    spinner.className = "loading-spinner";
    spinner.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(spinner);

    // Hide spinner when page is loaded
    window.addEventListener("load", () => {
      setTimeout(() => {
        spinner.classList.add("hidden");
        setTimeout(() => {
          spinner.remove();
        }, 500);
      }, 500);
    });
  }

  // ===== SMOOTH HOVER EFFECTS =====
  function initSmoothHovers() {
    // Add shine effect to cards
    document.querySelectorAll(".product-card, .cabang-card").forEach((card) => {
      card.classList.add("shine");
    });

    // Glass effect removed from modal to keep it readable
    // Modal uses solid white background for better readability
  }

  // ===== SMOOTH SCROLL TO SECTION =====
  function initSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#" && href !== "") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  // ===== ELEGANT CURSOR TRAIL ===== (REMOVED - User Request)
  // Custom cursor trail has been removed for cleaner experience

  // ===== SMOOTH PAGE TRANSITIONS =====
  function initPageTransitions() {
    // Add transition class to body
    document.body.style.transition = "opacity 0.3s ease";

    // Smooth transition on page unload
    window.addEventListener("beforeunload", () => {
      document.body.style.opacity = "0";
    });
  }

  // ===== ELEGANT FORM VALIDATION =====
  function initFormValidation() {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          input.parentElement.classList.remove("focused");
        }
      });
    });
  }

  // ===== SMOOTH ACCORDION =====
  function initAccordion() {
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", function () {
        const faqItem = this.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
        const isOpen = faqItem.classList.contains("active");

        // Close all other items
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active");
          item.querySelector(".faq-answer").style.maxHeight = "0";
        });

        // Toggle current item
        if (!isOpen) {
          faqItem.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  // ===== PERFORMANCE OPTIMIZATION =====
  function optimizePerformance() {
    // Lazy load images
    if ("loading" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img[data-src]");
      images.forEach((img) => {
        img.src = img.dataset.src;
      });
    }

    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-dependent code here
      });
    });
  }

  // ===== INITIALIZE ALL ENHANCEMENTS =====
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAll);
    } else {
      initAll();
    }
  }

  function initAll() {
    createLoadingSpinner();
    createScrollProgress();
    createBackToTop();
    initFadeInOnScroll();
    initParallax();
    initRippleEffect();
    initImageLoading();
    initSmoothHovers();
    initSmoothScrollLinks();
    // initCursorTrail(); // REMOVED
    initPageTransitions();
    initFormValidation();
    initAccordion();
    optimizePerformance();

    console.log("✨ Smooth & Elegant Enhancements Loaded!");
  }

  // Start initialization
  init();
})();
