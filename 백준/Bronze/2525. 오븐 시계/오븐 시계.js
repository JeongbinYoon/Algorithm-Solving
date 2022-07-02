const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const time = input[0].split(" ").map((el) => +el);
  const require = Number(input[1]);
  let hour = time[0]; // 현재 시간
  let minute = time[1]; // 현재 분
  let rHour = 0; // 더할 시간
  let rMinute = 0; // 더할 분
  let newTimeHour = 0;
  let newTimeMinute = 0;

  if (require > 59) {
    rHour = Math.floor(require / 60);
    rMinute = require % 60;
  } else {
    rMinute = require;
  }

  // 더한 분이 59 이상일 때
  if (minute + rMinute > 59) {
    rHour += 1;
    rMinute = minute + rMinute - 60;
    minute = 0;
  }

  newTimeHour = hour + rHour;
  newTimeMinute = minute + rMinute;

  if (hour + rHour > 23) newTimeHour = hour + rHour - 24;

  const newTime = `${newTimeHour} ${newTimeMinute}`;

  console.log(newTime);
  process.exit();
});
