// MOBILE NAV TOGGLE
const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

if (burgerButton && mobileMenu) {
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.classList.toggle("open");
    mobileMenu.style.display = isOpen ? "flex" : "none";
    burgerButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burgerButton.classList.remove("open");
      mobileMenu.style.display = "none";
      burgerButton.setAttribute("aria-expanded", "false");
    });
  });
}

// CONTACT FORM (front-end only)
const contactForm = document.getElementById("contactForm");
const contactResult = document.getElementById("contactResult");

if (contactForm && contactResult) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      contactResult.textContent = "Please fill in all required fields.";
      return;
    }

    contactResult.textContent = "Thanks! This form is a demo – please email hello@hillwebstudio.co.nz and I'll reply personally.";
    contactForm.reset();
  });
}

// FOOTER YEAR
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

