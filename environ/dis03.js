let treats = 0;

// when the "give" button is clicked, add 1 treat and update the header
$("#give-button").click(function() {
    treats = treats + 1;
    $("#treat-count").html("Kaya has " + treats + " treats!");
});