function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");
    let result = "";
    for (let i = 1; i < inputArr.length; i++) {
        let n = inputArr[i];
        for (let j = 2; j <= Math.sqrt(n); j++) {
            if (n % j == 0) {
                result = "false";
                break;
            }
            else {
                result = "true";
            }
        }

        if (n >= 2 && result == "true") {
            console.log("Prime");
        }
        else if (n == 2) {
            console.log("Prime");
        }
        else {
            console.log("Not prime");
        }

    }
} 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
