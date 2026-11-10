let environmentTitle = "Blue Raspberry World";

let environmentElements = ["curtain", "dust", "warm floor", "half-open door"];

let mainEntity = {
    name: "blue raspberry",
    type: "soft border",
    mood: "silly",

    favoriteElement: environmentElements[1]
};

const button = document.getElementById("spawn-btn");
const area = document.getElementById("raspberry-area");

button.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "random.png"; 
  img.classList.add("blue-raspberry");

 
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  img.style.left = `${randomX}px`;
  img.style.top = `${randomY}px`;

  area.appendChild(img);
});
