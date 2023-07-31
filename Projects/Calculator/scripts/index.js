let calculation = "";
function addtoCalculation(param) {
  calculation += param;
  document.querySelector(".js-calculator-display").innerHTML = calculation;
}
function calculate(calculation) {
  calculation = String(eval(calculation));
  document.querySelector(".js-calculator-display").innerHTML = calculation;
}
