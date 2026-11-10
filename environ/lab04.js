let count = 0; 
let buttonCreature = { 
    name: "brian", 
    species: "blue raspberry", 
    favoriteFood: "leeks", 
    moods: ["yummy", "delicious", "glowing", "crine", "emotional", "confused"] 
};

$("#needy-button").click(function () { 
    count = count + 1; 
    
    // Safely loop back to the first mood if clicks exceed the array length
    let arrayPosition = (count - 1) % buttonCreature.moods.length; 
    let currentMood = buttonCreature.moods[arrayPosition]; 
    
    // Using modern template literals (backticks) for clean HTML insertion
    let message = `<p>You clicked me ${count} times.</p>`; 
    message = message + `<p>My current mood is ${currentMood}.</p>`; 
    message = message + `<p>My name is ${buttonCreature.name}.</p>`; 
    message = message + `<p>I am an ${buttonCreature.species}.</p>`; 
    message = message + `<p>My favorite food is ${buttonCreature.favoriteFood}.</p>`; 
    
    $("#output").html(message); 
    
    console.log(count); 
    console.log(arrayPosition); 
    console.log(currentMood); 
});