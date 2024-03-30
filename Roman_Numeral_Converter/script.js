const output = document.getElementById("output");
function convert() {
  const num = document.getElementById("number").value;
  if (num == "") {
    output.innerHTML = "Please enter a valid number";
  } else if (num < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    const t = ["", "M", "MM", "MMM"];
    const h = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const te = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const o = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const roman = `${t[Math.floor(num / 1000)]}${
      h[Math.floor((num % 1000) / 100)]
    }${te[Math.floor((num % 100) / 10)]}${o[num % 10]}`;

    output.style.visibility = "visible";
    output.innerHTML = roman;
  }
}
