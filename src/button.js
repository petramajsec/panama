$(".cta").on("click", function (e) {
  console.log(e);
  console.log(e.target);
  $(this).addClass("active").delay(300).queue(function (next) {
    $(this).removeClass("active");
    next();
  });
});