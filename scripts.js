$(document).ready(function() {

  // Show alert on button click
  $("#submitbutton").click(function() {
    $("#sig").show();
  });

  $("#closesig").click(function() {
    $("#sig").hide();
  });

  // Change color of sun on hover
  $("#sunny").hover(function() {
    $("#sunny").attr("src", "sun2.png");
  }, function() {
    $("#sunny").attr("src", "sun.png");
  });

  // Do something when window is smaller
  $(window).resize(function() {
    if ($(this).width() <= 650) {
      // Smaller screen
      $("#resizenotice").text("You get a pineapple!");
      $("#pine").show();
    } else {
      // Larger screen
      $("#resizenotice").text("Try resize me to a smaller screen!");
      $("#pine").hide();
    }
  });

});
