document.addEventListener("DOMContentLoaded", () => {
  let environmentTitle = "Blue Raspberry World";
  let environmentElements = ["curtain", "dust", "warm floor", "half-open door"];

  let mainEntity = {
    name: "blue raspberry",
    type: "soft border",
    mood: "silly",
    favoriteElement: environmentElements[1]
  };

  const area = document.getElementById("raspberry-area");
  const button = document.getElementById("colorBtn");

  
  document.body.style.transition = "background-color 0.6s ease";

  const colors = ["#64ffff", "#008cfe", "#1237a3", "#97a9ff", "#4431b0"];
  let currentIndex = 0;

  if (button) {
    button.addEventListener("click", () => {
      document.body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    });
  }
});