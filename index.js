document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuButton = document.querySelector("#header button");
    const closeButton = document.querySelector("#closeMenu");
    const mobileMenu = document.querySelector("#mobileMenu");
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.remove("translate-x-full");
    });
    closeButton.addEventListener("click", function () {
      mobileMenu.classList.add("translate-x-full");
    });
    // Mobile menu links
    const mobileLinks = document.querySelectorAll("#mobileMenu a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("translate-x-full");
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Header scroll effect
    const header = document.querySelector("#header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-md");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.remove("bg-white", "shadow-md");
        header.classList.add("bg-transparent");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviewsContainer");
    const prevButton = document.getElementById("prevReview");
    const nextButton = document.getElementById("nextReview");
    const dots = document.querySelectorAll("#reviewDots button");
    let currentIndex = 0;
    let slideInterval;
    function updateSlide(index) {
      if (!reviewsContainer) return;
      const slideWidth = reviewsContainer.clientWidth;
      reviewsContainer.style.transform = `translateX(-${index * slideWidth}px)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-primary", i === index);
        dot.classList.toggle("bg-gray-300", i !== index);
      });
      currentIndex = index;
    }
    function nextSlide() {
      const newIndex = currentIndex < dots.length - 1 ? currentIndex + 1 : 0;
      updateSlide(newIndex);
    }
    function prevSlide() {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : dots.length - 1;
      updateSlide(newIndex);
    }
    function startAutoSlide() {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, 5000);
    }
    function stopAutoSlide() {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    }
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateSlide(index);
        stopAutoSlide();
        startAutoSlide();
      });
    });
    if (reviewsContainer) {
      reviewsContainer.parentElement.addEventListener(
        "mouseenter",
        stopAutoSlide,
      );
      reviewsContainer.parentElement.addEventListener(
        "mouseleave",
        startAutoSlide,
      );
    }
    startAutoSlide();
    // Gallery filter functionality
    const filterButtons = document.querySelectorAll("#filterButtons .filter-btn");
    const galleryItems = document.querySelectorAll("#galleryGrid .gallery-item");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        // Update button styles
        filterButtons.forEach((btn) => {
          btn.classList.remove("bg-primary", "text-white");
          btn.classList.add("text-gray-600", "hover:bg-gray-100");
        });
        button.classList.remove("text-gray-600", "hover:bg-gray-100");
        button.classList.add("bg-primary", "text-white");
        // Filter gallery items
        galleryItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          if (category === "all" || category === itemCategory) {
            item.style.display = "";
            item.style.opacity = "1";
          } else {
            item.style.display = "none";
            item.style.opacity = "0";
          }
        });
      });
    });
    // Form label animation
    const formInputs = document.querySelectorAll(
      ".form-group input, .form-group textarea",
    );
    formInputs.forEach((input) => {
      // Check initial state
      if (input.value) {
        const label = input.nextElementSibling;
        label.style.transform = "translateY(-20px) scale(0.8)";
        label.style.color = "#D4AF37";
      }
      // Focus event
      input.addEventListener("focus", function () {
        const label = this.nextElementSibling;
        label.style.transform = "translateY(-20px) scale(0.8)";
        label.style.color = "#D4AF37";
      });
      // Blur event
      input.addEventListener("blur", function () {
        if (!this.value) {
          const label = this.nextElementSibling;
          label.style.transform = "";
          label.style.color = "#666";
        }
      });
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuButton = document.querySelector("#header button");
  const closeButton = document.querySelector("#closeMenu");
  const mobileMenu = document.querySelector("#mobileMenu");
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full");
  });
  closeButton.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
  });
  // Mobile menu links
  const mobileLinks = document.querySelectorAll("#mobileMenu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("translate-x-full");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll effect
  const header = document.querySelector("#header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("bg-white", "shadow-md");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("bg-white", "shadow-md");
      header.classList.add("bg-transparent");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.getElementById("reviewsContainer");
  const prevButton = document.getElementById("prevReview");
  const nextButton = document.getElementById("nextReview");
  const dots = document.querySelectorAll("#reviewDots button");
  let currentIndex = 0;
  let slideInterval;
  function updateSlide(index) {
    if (!reviewsContainer) return;
    const slideWidth = reviewsContainer.clientWidth;
    reviewsContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-primary", i === index);
      dot.classList.toggle("bg-gray-300", i !== index);
    });
    currentIndex = index;
  }
  function nextSlide() {
    const newIndex = currentIndex < dots.length - 1 ? currentIndex + 1 : 0;
    updateSlide(newIndex);
  }
  function prevSlide() {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : dots.length - 1;
    updateSlide(newIndex);
  }
  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, 5000);
  }
  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });
  if (reviewsContainer) {
    reviewsContainer.parentElement.addEventListener(
      "mouseenter",
      stopAutoSlide,
    );
    reviewsContainer.parentElement.addEventListener(
      "mouseleave",
      startAutoSlide,
    );
  }
  startAutoSlide();
  // Gallery filter functionality
  const filterButtons = document.querySelectorAll("#filterButtons .filter-btn");
  const galleryItems = document.querySelectorAll("#galleryGrid .gallery-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      // Update button styles
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("text-gray-600", "hover:bg-gray-100");
      });
      button.classList.remove("text-gray-600", "hover:bg-gray-100");
      button.classList.add("bg-primary", "text-white");
      // Filter gallery items
      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || category === itemCategory) {
          item.style.display = "";
          item.style.opacity = "1";
        } else {
          item.style.display = "none";
          item.style.opacity = "0";
        }
      });
    });
  });
  // Form label animation
  const formInputs = document.querySelectorAll(
    ".form-group input, .form-group textarea",
  );
  formInputs.forEach((input) => {
    // Check initial state
    if (input.value) {
      const label = input.nextElementSibling;
      label.style.transform = "translateY(-20px) scale(0.8)";
      label.style.color = "#D4AF37";
    }
    // Focus event
    input.addEventListener("focus", function () {
      const label = this.nextElementSibling;
      label.style.transform = "translateY(-20px) scale(0.8)";
      label.style.color = "#D4AF37";
    });
    // Blur event
    input.addEventListener("blur", function () {
      if (!this.value) {
        const label = this.nextElementSibling;
        label.style.transform = "";
        label.style.color = "#666";
      }
    });
  });
});
  
document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuButton = document.querySelector("#header button");
    const closeButton = document.querySelector("#closeMenu");
    const mobileMenu = document.querySelector("#mobileMenu");
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.remove("translate-x-full");
    });
    closeButton.addEventListener("click", function () {
      mobileMenu.classList.add("translate-x-full");
    });
    // Mobile menu links
    const mobileLinks = document.querySelectorAll("#mobileMenu a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("translate-x-full");
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Header scroll effect
    const header = document.querySelector("#header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-md");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.remove("bg-white", "shadow-md");
        header.classList.add("bg-transparent");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviewsContainer");
    const prevButton = document.getElementById("prevReview");
    const nextButton = document.getElementById("nextReview");
    const dots = document.querySelectorAll("#reviewDots button");
    let currentIndex = 0;
    let slideInterval;
    function updateSlide(index) {
      if (!reviewsContainer) return;
      const slideWidth = reviewsContainer.clientWidth;
      reviewsContainer.style.transform = `translateX(-${index * slideWidth}px)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-primary", i === index);
        dot.classList.toggle("bg-gray-300", i !== index);
      });
      currentIndex = index;
    }
    function nextSlide() {
      const newIndex = currentIndex < dots.length - 1 ? currentIndex + 1 : 0;
      updateSlide(newIndex);
    }
    function prevSlide() {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : dots.length - 1;
      updateSlide(newIndex);
    }
    function startAutoSlide() {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, 5000);
    }
    function stopAutoSlide() {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    }
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateSlide(index);
        stopAutoSlide();
        startAutoSlide();
      });
    });
    if (reviewsContainer) {
      reviewsContainer.parentElement.addEventListener(
        "mouseenter",
        stopAutoSlide,
      );
      reviewsContainer.parentElement.addEventListener(
        "mouseleave",
        startAutoSlide,
      );
    }
    startAutoSlide();
    // Gallery filter functionality
    const filterButtons = document.querySelectorAll("#filterButtons .filter-btn");
    const galleryItems = document.querySelectorAll("#galleryGrid .gallery-item");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        // Update button styles
        filterButtons.forEach((btn) => {
          btn.classList.remove("bg-primary", "text-white");
          btn.classList.add("text-gray-600", "hover:bg-gray-100");
        });
        button.classList.remove("text-gray-600", "hover:bg-gray-100");
        button.classList.add("bg-primary", "text-white");
        // Filter gallery items
        galleryItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          if (category === "all" || category === itemCategory) {
            item.style.display = "";
            item.style.opacity = "1";
          } else {
            item.style.display = "none";
            item.style.opacity = "0";
          }
        });
      });
    });
    // Form label animation
    const formInputs = document.querySelectorAll(
      ".form-group input, .form-group textarea",
    );
    formInputs.forEach((input) => {
      // Check initial state
      if (input.value) {
        const label = input.nextElementSibling;
        label.style.transform = "translateY(-20px) scale(0.8)";
        label.style.color = "#D4AF37";
      }
      // Focus event
      input.addEventListener("focus", function () {
        const label = this.nextElementSibling;
        label.style.transform = "translateY(-20px) scale(0.8)";
        label.style.color = "#D4AF37";
      });
      // Blur event
      input.addEventListener("blur", function () {
        if (!this.value) {
          const label = this.nextElementSibling;
          label.style.transform = "";
          label.style.color = "#666";
        }
      });
    });
  });
