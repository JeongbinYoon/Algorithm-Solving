const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  const [arr1, arr2] =
    input.length % 2 === 1
      ? input.split(input[Math.floor(input.length / 2)]).map((x) => x.split(''))
      : [input.slice(0, input.length / 2), input.slice(input.length / 2)].map(
          (x) => x.split('')
        );
  console.log(arr1.join('') === arr2.reverse().join('') ? 1 : 0);
  process.exit();
});
