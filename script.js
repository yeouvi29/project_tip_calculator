const total = document.querySelector("#bill_total");
const split = document.querySelector("#split_total");
const btnCalc = document.querySelector(".btn_calc");
const btnClear = document.querySelector(".btn_clear");
const inputContainer = document.querySelector(".input_container");
const numberContainer = document.querySelector(".number");
const bill = document.getElementById("bill_value");
const tip = document.getElementById("tip_value");
const people = document.getElementById("split_value");
const number = document.querySelectorAll(".num");
const del = document.getElementById("delete");

let curNumber;
let curInputField;

window.addEventListener("DOMContentLoaded", () => {
  bill.focus();
});

// When input field is clicked, find current input field and empty the curNumber
inputContainer.addEventListener("click", function (e) {
  curInputField = e.target.closest(".input");
  curNumber = "";
});

// When bill is not inserted, log warnig.
const alert = function () {
  if (!bill.value) console.log("Please insert bill.💵");
};
const calculate = () => {
  if (!tip.value) tip.value = tip.placeholder;
  if (!people.value) people.value = people.placeholder;

  const calcTotal = (bill.value * (1 + tip.value / 100)).toFixed(2);
  const calcPerEach = (calcTotal / people.value).toFixed(2);

  // Empty input alert
  alert();
  console.log(calcPerEach);
  if (split.value === NaN) split.textContent = "0.00";
  if (calcPerEach.length > 7) split.style.fontSize = "0.8rem";
  // Display result
  total.textContent = calcTotal;
  split.textContent = calcPerEach;
};
// When calculation button is clicked, calculate the total bill and split total and display them.
btnCalc.addEventListener("click", function () {
  // Defaul set
  calculate();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculate();
});

// Number pad
numberContainer.addEventListener("click", function (e) {
  if (!curInputField) return;
  if (e.target.closest(".num") === del) curNumber = curNumber.slice(0, -1);
  else curNumber += e.target.closest(".num").innerHTML;

  curInputField.value = curNumber;
});

btnClear.addEventListener("click", function () {
  total.innerHTML = split.innerHTML = "0.00";
  bill.value = tip.value = people.value = "";
  curNumber = "";
});
