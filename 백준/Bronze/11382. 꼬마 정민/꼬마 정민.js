const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = line.split(' ').map((el) => parseInt(el));
  console.log(input.reduce((acc, cur) => acc + cur, 0));
  process.exit();
});
