const result = document.getElementById("result");
const regExp = /[^a-z|0-9]/g;
function isPalindrome() {
  const input = document.getElementById("text-input").value;
  if (input !== "") {
    var arr = input.toLowerCase().replace(regExp, "").split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[arr.length - 1 - i]) {
        result.innerHTML = `${input} is a palindrome`;
      } else {
        result.innerHTML = `${input} is not a palindrome`;
        return;
      }
    }
  } else {
    alert("Please input a value");
  }
}
