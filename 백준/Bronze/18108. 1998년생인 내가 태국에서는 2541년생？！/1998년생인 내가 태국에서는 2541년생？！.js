const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  let input = Number(line) - 543;
  console.log(input);
  rl.close();
}).on("close", () => {
  process.exit();
});
