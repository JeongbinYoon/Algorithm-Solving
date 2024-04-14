const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on('close', () => {
  const moneys = [25, 10, 5, 1];

  let last = 0;
  input.slice(1).map((c) =>
    console.log(
      moneys
        .reduce((acc, cur, idx) => {
          acc.push(Math.floor((idx === 0 ? c : last) / cur));
          last = (idx === 0 ? c : last) % cur;
          return acc;
        }, [])
        .join(' ')
    )
  );
  process.exit();
});
