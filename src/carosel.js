var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}

var dots = document.getElementsByClassName("dot");
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    var dotIndex = Array.from(dots).indexOf(this);
    showSlide(slideIndex = dotIndex+1);
  });
}