// Nav-bar
const nav = document.querySelector(".nav-bar");
if (nav) {
  fetch("../navigation.html")
    .then((res) => res.text())
    .then((data) => {
      nav.innerHTML = data;
    });
}

//Footer
const footer = document.querySelector(".footer");
if (footer) {
  fetch("../footer.html")
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
