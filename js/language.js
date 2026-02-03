// Toggle dropdown
const langBtn = document.getElementById("lang-btn");
const langMenu = document.querySelector(".language-options");

langBtn.addEventListener("click", () => {
  langMenu.style.display = langMenu.style.display === "flex" ? "none" : "flex";
});

// Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'ru', autoDisplay: false },
    'google_translate_element'
  );
}

// Til tugmalari bilan ishlash
document.querySelectorAll(".language-options button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    select.value = lang; // tilni tanlash
    select.dispatchEvent(new Event("change")); // Google Translate ishlaydi
    langMenu.style.display = "none"; // menyuni yopish
  });
});
