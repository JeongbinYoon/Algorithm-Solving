const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => +el);
  rl.close();
}).on("close", () => {
  const result = input.reduce((accu, curr) => {
    // console.log("accu:", accu, "curr:", curr, "accu[curr]:", accu[curr]);
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  let maxSame = 0;
  let maxNum = 0;
  let number;
  let prize = 0;
  for (let i = 0; i < 3; i++) {
    if (maxSame < result[Object.keys(result)[i]]) {
      maxSame = result[Object.keys(result)[i]];
      number = Number(Object.keys(result)[i]);
    }

    if (maxNum < Number(Object.keys(result)[i])) {
      maxNum = Number(Object.keys(result)[i]);
    }
  }

  if (maxSame === 3) {
    prize = 10000 + number * 1000;
  } else if (maxSame === 2) {
    prize = 1000 + number * 100;
  } else if (maxSame === 1) {
    prize = maxNum * 100;
  }

  // console.log(maxSame, number);
  console.log(prize);
  // console.log("result:", result);
  process.exit();
});
