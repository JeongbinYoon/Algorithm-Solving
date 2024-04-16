const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => +x));
}).on('close', () => {
  const nums = input.flat();
  const max = Math.max(...nums);
  const xy = nums.findIndex((n) => n === max) / 9;
  console.log(max);
  console.log(Math.floor(xy) + 1, Math.floor((xy - parseInt(xy)) * 10) + 1);

  process.exit();
  4;
});
