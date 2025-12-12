// MOBILE NAV TOGGLE
const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
if (burgerButton && mobileMenu) {
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.classList.toggle("open");
    mobileMenu.style.display = isOpen ? "flex" : "none";
    burgerButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burgerButton.classList.remove("open");
      mobileMenu.style.display = "none";
      burgerButton.setAttribute("aria-expanded", "false");
    });
  });
}

// SMOOTH SCROLLING FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// FOOTER YEAR
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// FADE-IN ON LOAD (subtle animation for sections)
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, index * 200); // Staggered entry
  });
});

// FORM SUBMISSION FEEDBACK (basic, enhance with EmailJS if needed)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // For Netlify, no JS needed; else add EmailJS here
    e.target.style.opacity = '0.7';
    setTimeout(() => {
      alert('Thanks! I\'ll get back to you soon.'); // Placeholder
      e.target.reset();
      e.target.style.opacity = '1';
    }, 1000);
  });
}
