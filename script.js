
/* =====================================
   E-HA-RAH | NEW EARTH ENTERPRISE
   INTERACTIVITY
===================================== */

// Año automático del sitio
const footer = document.querySelector("footer");

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = footer.innerHTML.replace(
    /©\s*\d{4}/,
    `© ${year}`
  );
}

// Animación de aparición de secciones
const sections = document.querySelectorAll(
  ".section, .project"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
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

// Mensaje de bienvenida en consola
console.log(
  "E-HA-RAH | NEW EARTH ENTERPRISE"
);
console.log(
  "Technology • Nature • Consciousness • Innovation"
);
