const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const navbar = document.querySelector(".navbar");
const yearElement = document.querySelector("#year");

function syncNavbarState() {
  if (!navbar) {
    return;
  }

  if (window.scrollY > 16) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

function closeMenu() {
  if (!menuToggle || !navLinks) {
    return;
  }

  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.classList.toggle("is-active");
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("is-open");
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

window.addEventListener("scroll", syncNavbarState, { passive: true });

syncNavbarState();
