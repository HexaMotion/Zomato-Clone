// Smooth fade-in on load
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.style.opacity = "0";
//     document.body.style.transition = "opacity 1.2s ease-in-out";
//     setTimeout(() => {
//         document.body.style.opacity = "1";
//     }, 100);
// });

// Button animation effect
// const searchBtn = document.querySelector(".sc button");
// searchBtn.addEventListener("click", () => {
//     searchBtn.style.transform = "scale(0.95)";
//     setTimeout(() => {
//         searchBtn.style.transform = "scale(1)";
//     }, 150);
// });

// Floating header on scroll
// window.addEventListener("scroll", () => {
//     const header = document.querySelector("header");
//     if (window.scrollY > 50) {
//         header.style.background = "rgba(255, 0, 0, 0.95)";
//     } else {
//         header.style.background = "rgba(255, 0, 0, 0.85)";
//     }
// });
// 🌆 Zomato Clone JS — by Ayush

// ===== SMOOTH FADE-IN ON PAGE LOAD =====
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ===== STICKY HEADER SHRINK EFFECT =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.95)";
    header.style.padding = "10px 40px";
  } else {
    header.style.background = "rgba(0,0,0,0.7)";
    header.style.padding = "15px 60px";
  }
});

// ====== SEARCH BUTTON INTERACTION ======
const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query === "") {
      alert("🍔 Please enter something to search!");
    } else {
      alert(`🔍 Searching for: ${query}`);
      searchInput.value = "";
    }
  });
}

// ===== REVEAL ELEMENTS ON SCROLL =====
const revealElements = document.querySelectorAll(
  ".categories, .restaurants, .testimonials, .app-download, footer"
);

window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (position < screenPosition) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Initialize hidden position for smooth reveal
revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease-out";
});

// ===== HOVER SOUND EFFECT (Optional) =====
// Add a tiny hover sound for buttons and cards (optional fun touch)
const hoverSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_408b2c3f7f.mp3?filename=hover-1-20559.mp3");

document.querySelectorAll("button, .category-card, .restaurant-card").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.volume = 0.2;
    hoverSound.play();
  });
});

// ===== SMOOTH SCROLL TO SECTIONS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===== FOOTER YEAR AUTO UPDATE =====
const footerYear = document.querySelector(".footer-bottom");
if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.innerHTML = `© ${year} Zomato Clone | Made with ❤️ by Ayush`;
}
