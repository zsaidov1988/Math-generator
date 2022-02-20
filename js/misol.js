const elGenerate = document.querySelector(".js-multi-generate");
const elExpression = document.querySelector(".js-multi-expression");
const elCheck = document.querySelector(".js-multi-check");
const elResult = document.querySelector(".js-multi-result");
let num1, num2, result;

elGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  elResult.value = "";
  elResult.style.color = "black";
  num1 = Math.trunc(Math.random() * 900 + 1000);
  num2 = Math.trunc(Math.random() * 90 + 100);
  result = num1 * num2;
  elExpression.textContent = `${num1} * ${num2} = `;
  elResult.disabled = false;
});

elCheck.addEventListener("click", (e) => {
  e.preventDefault();
  let inputRes = elResult.value;
  inputRes = parseInt(inputRes.trim());
  if (result == inputRes) {
    elResult.style.color = "green";
  } else {
    elResult.style.color = "red";
  }
});

elResult.addEventListener("input", () => {
  elResult.style.color = "black";
});
