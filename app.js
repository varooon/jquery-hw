$(document).ready(function(){


  $("#change-red").on("click", function(){
    $("#red-div").css("background-color", "red");
  });

  $("#change-green").on("click", function(){
    $("#green-div").css("background-color", "green");
  });

  $("#change-blue").on("click", function(){
    $("#blue-div").css("background-color", "blue");
  });



  $("#make-big").on("click", function(){
    $("#big-div").addClass("bigdivclass");
  });

  $("#make-small").on("click", function(){
    $("#small-div").addClass("smalldivclass");
  });

  $("#animate-div").on("click", function(){
    $("#animated-div").addClass("animate");
  });

//When create-overlay button is clicked, "show" the overlay-div
  $("#create-overlay").on("click", function(){
    $("#overlay-div").show("slow");
  });

  $("#overlay-div").click(function(){
    $("#overlay-div").hide(1000);
  });


});
