const form = document.querySelector("form");
// Dohvatamo select i dugme
const countrySelect = document.getElementById("country-select");
const submitBtn = document.getElementById("submit-btn");

// Dodajemo event listener na dugme
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // sprečavamo uobičajeno ponašanje forme

  const selectedCountry = countrySelect.value; // dohvatamo izabranu državu

  // Ako nije izabrana nijedna država, prekidamo izvršavanje
  if (selectedCountry === "") {
    return;
  }

  // Kreiramo URL stranice koju treba otvoriti
  const url = selectedCountry + ".html";

  // Preusmeravamo na izabranu stranicu
  window.location.href = url;
});
