// Nav-bar
const nav = document.querySelector(".nav-bar");
fetch("/const/navigation.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

//Footer
const footer = document.querySelector(".footer");
fetch("/const/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

// JavaScript mobile
// Nav-bar

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
