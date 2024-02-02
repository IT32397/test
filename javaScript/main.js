let email = document.querySelector(".subscribe .test");
email.addEventListener("click", (e) => {
  if (window.innerWidth <= 500) {
    email.style.display = "none";
  }
  document.querySelector(".subscribe form input[type='email']").style.cssText =
    "width:350px; padding: 0 10px !important";
});

// JQuery Code
$(document).ready(function () {
  $(".gear-check").click(() => {
    $(".gear-check").toggleClass("active fa-spin");
    $(".toolbox").toggleClass("active");
  });

  // getting the Lis
  var lis = $(".toolbox .tools .color-options li");
  lis
    .eq(0)
    .css("backgroundColor", "#dc3545")
    .end()
    .eq(1)
    .css("backgroundColor", "#0dcaf0")
    .end()
    .eq(2)
    .css("backgroundColor", "#ffc107")
    .end()
    .eq(3)
    .css("backgroundColor", "#777");

  // Chaning the main color var in root element
  lis.click(function () {
    var bgColor = $(this).css("backgroundColor");
    $(":root").css("--main-color", bgColor);
  });

  //Scroll To Top
  var top = $("#top");
  $(window).on("scroll", () => {
    $(this).scrollTop() >= 700 ? top.fadeIn() : top.fadeOut();
  });

  // On clicking the top btn
  top.click(() => {
    $("html,body").animate({ scrollTop: 0 }, 600);
  });
});

// // On load actions
$(window).on(
  "load",
  (2000,
  () => {
    $("body").css("overflow", "auto");
    $(".loading").fadeOut(2000);
  })
);
