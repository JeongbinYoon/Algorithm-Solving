const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  rl.close();
}).on("close", function () {
  const A = input[0];
  const B = input[1];
  const V = input[2];

  console.log(Math.ceil((V - B) / (A - B)));

  process.exit();
});
