const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacter = ["%", "/", "*", "-", "+", "="];
let output = "";

//define function to calculate based on button clicked
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    //if output has % , replace with /100 before evaluating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //remove last character from the output
    output = output.toString().slice(0, -1);
  } else {
    //if output is empty and button is specialChars then return
    if (output === "" && specialCharacter.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

//adding event listener to buttons, calling calculate() on each click

buttons.forEach((button) => {
  //button click listener calls calculate() with dataset value as argument
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
