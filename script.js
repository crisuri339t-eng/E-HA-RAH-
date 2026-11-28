
// =====================================
// E-HA-RAH | NEW EARTH ENTERPRISE
// INTERACTIVITY + BILINGUAL SYSTEM
// =====================================

// LANGUAGE SYSTEM

const languageButton = document.getElementById("language-toggle");

let currentLanguage = "es";

function changeLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-es][data-en]").forEach(element => {
    element.textContent = element.getAttribute("data-" + language);
  });

  if (languageButton) {
    languageButton.textContent = language === "es" ? "ES | EN" : "EN | ES";
  }
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    changeLanguage(currentLanguage === "es" ? "en" : "es");
  });
}

changeLanguage("es");

// AUTOMATIC YEAR

const footer = document.querySelector("footer");

if (footer) {
  const year = new Date().getFullYear();

  footer.innerHTML = footer.innerHTML.replace(
    /©\s*\d{4}/,
    "© " + year
  );
}

// SECTION ANIMATIONS

const sections = document.querySelectorAll(".section, .project");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}

// SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// WELCOME MESSAGE

console.log("E-HA-RAH | NEW EARTH ENTERPRISE");
console.log("Technology • Nature • Consciousness • Innovation");
console.log("Bilingual system activated.");
alert("E-HA-RAH: JavaScript está funcionando");
