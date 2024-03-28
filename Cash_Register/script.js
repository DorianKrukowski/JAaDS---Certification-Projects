let price = 19.5;
let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const button = document.getElementById("purchase-btn");
const input = document.getElementById("cash");
const result = document.getElementById("change-due");

function getIt(prices, cids) {
  let cash = input.value;
  let change = cash - prices;

  cids[0].push(0.01);
  cids[1].push(0.05);
  cids[2].push(0.1);
  cids[3].push(0.25);
  cids[4].push(1);
  cids[5].push(5);
  cids[6].push(10);
  cids[7].push(20);
  cids[8].push(100);

  if (cash < prices) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cash == prices) {
    result.textContent = "No change due - customer paid with exact cash";
    return;
  }

  if (getSum(cids) < change ) {
    result.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }
  const newArr = [];
  for (let i = cids.length - 1; i >= 0; i--) {
    var [name, amount, worth] = cids[i];
    var aw = (amount / worth).toFixed(2);
    if (change != 0) {
      for (let j = aw; j > 0; j--) {
        if ((change - worth * j).toFixed(2) >= 0) {
          newArr.push(`${name}: $${worth * j}`);
          console.log(cids[i][1]);
          cids[i][1] -= worth * j;
          change = (change - worth * j).toFixed(2);
          if (worth * j == amount) {
            break;
          }
        }
      }
    }
  }
  if(change != 0){
    result.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }
  if (getSum(cids) == 0) {
    result.textContent = "Status: CLOSED " + newArr.join(" ");
    return;
  } else {
    result.textContent = "Status: OPEN " + newArr.join(" ");
    return;
  }
}

const getSum = (arr) => {
  var sum = 0;
  arr.forEach((arrs) => {
    sum += arrs[1];
  });
  return sum;
};
button.addEventListener("click", () => {
  getIt(price, cid);
});
