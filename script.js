
document.addEventListener("DOMContentLoaded", () => {
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
});
