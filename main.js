let firstName = document.getElementById("FirstNameInput");
let lastName = document.getElementById("LastNameInput");
let allNick = document.getElementById("AllNickButton");
let randNick = document.getElementById("RandNickButton");
let container = document.getElementById("container");

let array = [
  "Crusher",
  "the Scientist",
  "Twinkle-toes",
  "the Coder",
  "the Jester",
  "the Sloth",
];

document
  .getElementById("RandNickButton")
  .addEventListener("click", randNickname);

function randNickname() {
  let outputStr = "";
  outputStr += ` ${firstName.value} ${
    array[Math.floor(Math.random() * array.length)]
  } ${lastName.value}`;
  container.innerHTML = outputStr;
}

document.getElementById("AllNickButton").addEventListener("click", AllNickname);

function AllNickname() {
  let outputStr = "";
  for (let i = 0; i < array.length; i++) {
    outputStr += `${firstName.value} ${array[i]} ${lastName.value}<hr>`;
  }
  container.innerHTML = outputStr;
}
