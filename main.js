let firstName = document.getElementById("FirstName");
let lastName = document.getElementById("LastName");
let allNick = document.getElementById("AllNick");
let randNick = document.getElementById("RandNick");
let container = document.getElementById("container");

let d = firstName.value;

let array = [
  "Crusher",
  "the Scientist",
  "Twinkle-toes",
  "the Coder",
  "the Jester",
  "the Sloth",
  "Quick-Silver",
];

document.getElementById("RandNick").addEventListener("click", clickHandler);

// function Randomint(low,high){
// return Math.floor(Math.random() * (high))
// }

function clickHandler() {
  let outputStr = "";
  outputStr += ` ${d}   ${array[Math.floor(Math.random() * 7)]} ${lastName}`;
  container.innerHTML = outputStr;
}
