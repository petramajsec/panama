/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var menuButton = document.getElementById("sidebar-menu");
  var overlay = document.getElementById("overlay");
  var hamburgerMenu = document.getElementById("hamburger-menu");
  if (menuButton.style.display === "block") {
    menuButton.style.display = "none";
    overlay.style.display = "none";
    hamburgerMenu.style.display = "block";

    hamburgerMenu.classList.toggle("change");
  } else {
    menuButton.style.display = "block";
    overlay.style.display = "block";

    hamburgerMenu.classList.toggle("change");
    hamburgerMenu.style.display = "block";


  }
}
