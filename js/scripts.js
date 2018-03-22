$(document).ready(function(){
    $("#button").click(function(){
      var userChoice = parseInt($("#animal").val());
      if (userChoice === 1){
        $("#turtles").show();
        $("#snakes").hide();
        $("#insects").hide();
      }
      else if (userChoice === 2) {
        $("#snakes").show();
        $("#turtles").hide();
        $("#insects").hide();
      }
      else if (userChoice === 3){
        $("#insects").show();
        $("#snakes").hide();
        $("#turtles").hide();
      }
    });
});
