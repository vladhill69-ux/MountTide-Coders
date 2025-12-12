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

// FOOTER YEAR
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
