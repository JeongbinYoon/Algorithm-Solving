const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input = line.split(' ').map((el) => parseInt(el));
}).on("close", function(){
    let a = (input[0] + input[1]) % input[2];
    let b = (input[0] % input[2] + input[1] % input[2]) % input[2];
    let c = (input[0] * input[1]) % input[2];
    let d = ((input[0] % input[2]) * (input[1] % input[2])) % input[2] ;
    console.log(a + "\n" + b + "\n" + c + "\n" + d);
});