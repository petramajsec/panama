var slideIndex = 1;
showSlide(slideIndex);
/*These lines declare and initialize a variable slideIndex to keep track of the current slide, and then call the showSlide function to display the first slide.*/ 



function changeSlide(n) {
  showSlide(slideIndex += n);
}
/*This function takes a parameter n representing the amount of slides to move forward or backward, and updates the slideIndex variable accordingly before calling the showSlide function with the new index.*/ 



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
/*This function takes a parameter n representing the slide index to display, and first checks if the index is out of bounds (either too high or too low). 
If it is, the index is wrapped around to the first or last slide. The function then hides all slides and removes the
active class from all dots, before showing the slide with the given index and adding the active class to the corresponding dot.*/



var dots = document.getElementsByClassName("dot");
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    var dotIndex = Array.from(dots).indexOf(this);
    showSlide(slideIndex = dotIndex+1);
  });
}
/*These lines add an event listener to each dot, which triggers the showSlide function with the index of the clicked dot (plus one, since the index is zero-based but the slide index is one-based).
The Array.from method is used to convert the dots collection to an array so that we can use the indexOf method to get the index of the clicked dot.*/