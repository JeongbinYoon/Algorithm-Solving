const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input;

rl.on("line", function(line){
    input = line.split(' ').map(Number);
    rl.close();
}).on("close", function(){
    if(input[1]<45){
        input[0] != 0 ? input[0] -= 1 : input[0] = 23;
        input[1] = 60-(45-input[1]);
    }else{
        input[1] -= 45;
    }
    console.log(input.join(' '));
    process.exit();
})