//Number keypad
let numpad = document.querySelectorAll(".num");

//Define operations
let operation = "";

document.querySelectorAll(".func").forEach((element) =>
  element.addEventListener("click", function onFuncClick() {
    operation = element.innerText;
    if (operation !== "ce") {
      values.push(Number(number.join("")));
      number = [];
      document.querySelector(".output").innerHTML = element.innerText;
    }
  })
);

//Store array
let values = [];
let number = [];
let total = 0;

for (let num of numpad) {
  num.addEventListener("click", function onNumClick() {
    number.push(num.innerText);
    document.querySelector(".output").innerHTML = number.join("");
  });
}

//Return a result form operations
document
  .querySelector(".equal")
  .addEventListener("click", () => doOperation(values, operation));

//Clear values
document.querySelector(".del").addEventListener("click", reset);

function doOperation(array, operation) {
  values.push(Number(number.join("")));
  number = [];
  switch (operation) {
    case "+":
      total = array.reduce((acc, curr) => acc + curr);
      break;

    case "-":
      total = array.reduce((acc, curr) => acc - curr);
      break;
    case "×":
      total = array.reduce((acc, curr) => acc * curr);
      break;
    case "÷":
      total = array.reduce((acc, curr) => acc / curr);
      break;
  }
  if (total === 20) {
    document.querySelector(".output").innerText = "La nota del examen Miss 💙";
  } else {
    document.querySelector(".output").innerText = total;
  }
}

function reset() {
  values = [];
  number = [];
  document.querySelector(".output").innerText = 0;
}
