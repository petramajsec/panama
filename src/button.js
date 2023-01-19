$(".cta").on("click", function (e) {
    console.log(e);
    console.log(e.target);
    $(e.target).addClass("active").delay(300).queue(function (next) {
      $(e.target).removeClass("active");
      next();
    });
  });