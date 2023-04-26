// Nav-bar
const nav = document.querySelector(".nav-bar");
if (nav) {
  // Formiranje putanje do navigation.html relativno u odnosu na korenski direktorijum
  const navigationPath = "../navigation/navigation.html";

  fetch(navigationPath)
    .then((res) => res.text())
    .then((data) => {
      nav.innerHTML = data;
    })
    .catch((error) => {
      console.error(
        "Došlo je do greške prilikom učitavanja navigacionog menija:",
        error
      );
    });
}

//Footer
const footer = document.querySelector(".footer");
if (footer) {
  fetch("../footer/footer.html")
    .then((res) => res.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}

// JavaScript mobile
// Nav-bar

function showMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.style.right = "0";
  }
}

function hideMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.style.right = "-200px";
  }
}
