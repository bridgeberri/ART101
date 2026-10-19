//the clicker button program

let count = 0;
$("#needy-button").click( function() {
   count = count + 3;
   $("#needy-button").html("You lost the game " + count + " times");
});
