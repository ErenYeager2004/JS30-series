const box = document.querySelector(".container");

const redButton = document.getElementById("red")
const greenButton = document.getElementById("green")
const blueButton = document.getElementById("blue")

redButton.addEventListener("click",()=>{
  box.setAttribute("style", "background-color : red");
});

greenButton.addEventListener("click",()=>{
  box.setAttribute("style", "background-color : green");
});

blueButton.addEventListener("click",()=>{
  box.setAttribute("style", "background-color : blue");
});
