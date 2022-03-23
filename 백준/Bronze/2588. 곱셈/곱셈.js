const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(line);
    // input = line.split(' ').map((el) => parseInt(el));
}).on("close", function(){
    for(let i=2; i>=0; i--){
        console.log(input[0] * input[1].charAt(i));
    }
    console.log(input[0] * input[1]);
    process.exit();
})