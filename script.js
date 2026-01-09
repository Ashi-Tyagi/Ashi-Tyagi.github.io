const textArray = [
  "International Business",
  "Leadership & Research",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  const current = textArray[index];

  if (!isDeleting) {
    typingElement.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => isDeleting = true, 1400);
    }
  } else {
    typingElement.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();

/* Navbar shrink */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

/* Career Research Page */
const CRnavbar = document.getElementById("CRnavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    CRnavbar.classList.add("shrink");
  } else {
    CRnavbar.classList.remove("shrink");
  }
});

const resumeNav = document.getElementById("ResumeNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    resumeNav.classList.add("shrink");
  } else {
    resumeNav.classList.remove("shrink");
  }
});

// Optional: prevent horizontal scroll from hijacking vertical scroll
const scrollContainers = document.querySelectorAll(".artifacts-scroll");

scrollContainers.forEach(container => {
  container.addEventListener("wheel", e => {
    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  });
});