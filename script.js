// LIGHT IN THE DARKNESS
// Perform all hover animations here for readability
//$("#text").removeClass("hoverGlow")

$("#text").hover(function () {
  $("#text").addClass("hoverGlow");
  $("body").addClass("bg-light");
})

$("#text").on("mouseout", function () {
  $("#text").removeClass("hoverGlow");
  $("body").removeClass("bg-light");
})
