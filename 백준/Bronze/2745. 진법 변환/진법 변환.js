const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
console.log(parseInt(input[0], +input[1]));