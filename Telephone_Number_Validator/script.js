const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");

const regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
checkBtn.addEventListener("click", () => {
  const val = input.value;
  if (val != "") {
    if (regExp.test(val)) {
      result.innerHTML = `Valid US number: ${val}`;
    } else {
      result.innerHTML = `Invalid US number: ${val}`;
    }
  } else {
    window.alert("Please provide a phone number");
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  result.textContent = ``;
});
