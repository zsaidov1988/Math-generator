const elEqualGenerate = document.querySelector(".js-equal-generate");
const elEqualExpression = document.querySelector(".js-equal-expression");
const elEqualCheck = document.querySelector(".js-equal-check");
const elEqualResult = document.querySelector(".js-equal-result");
let equal1, equal2, equal3, equalResult, x;

elEqualGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  elResult.value = "";
  elResult.style.color = "black";
  let expression;
  equalResult = -1;
  while (equalResult < 0) {
    expression = "";
    equal1 = Math.trunc(Math.random() * 900 + 1000);
    do {
      equal2 = Math.trunc(Math.random() * 900 + 1000);
    } while (equal2 == equal1);
    do {
      equal3 = Math.trunc(Math.random() * 900 + 1000);
    } while (equal3 == equal1 || equal3 == equal2);

    const xPos = Math.random();
    if (xPos < 0.33) {
      x = equal1;
    } else if (xPos < 0.66) {
      x = equal2;
    } else {
      x = equal3;
    }

    const type = Math.random();
    if (type < 0.33) {
      equalResult = equal1 + equal2 + equal3;
      expression = `${equal1} + ${equal2} + ${equal3} = ${equalResult}`;
    } else if (type < 0.66) {
      equalResult = equal1 + equal2 - equal3;
      expression = `${equal1} + ${equal2} - ${equal3} = ${equalResult}`;
    } else {
      if (equal1 > equal2) {
        equalResult = equal1 - equal2 + equal3;
        expression = `${equal1} - ${equal2} + ${equal3} = ${equalResult}`;
      } else {
        equalResult = equal2 - equal1 + equal3;
        expression = `${equal2} - ${equal1} + ${equal3} = ${equalResult}`;
      }
    }
  }
  expression = expression.replace(x, "x");

  elEqualExpression.textContent = expression;
  elEqualResult.disabled = false;
});

elEqualCheck.addEventListener("click", (e) => {
  e.preventDefault();
  let inputRes = elEqualResult.value;
  inputRes = parseInt(inputRes.trim());
  if (x == inputRes) {
    elEqualResult.style.color = "green";
  } else {
    elEqualResult.style.color = "red";
  }
});

elEqualResult.addEventListener("input", () => {
  elEqualResult.style.color = "black";
});
