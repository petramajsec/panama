/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var menuButton = document.getElementById("sidebar-menu");
    var overlay = document.getElementById("overlay");
    if (menuButton.style.display === "block") {
      menuButton.style.display = "none";
      overlay.style.display = "none";
    } else {
      menuButton.style.display = "block";
      overlay.style.display = "block";

    }
  }