function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");
    for (let i = 1; i < inputArr.length; i++) {
        let n = inputArr[i]
        if (n > 1 && n <= 3) {
            console.log("Prime");
            continue;
        }
        else if (n % 2 == 0 || n % 3 == 0) {
            console.log("Not prime");
            continue;
        }

        for (let j = 5; j * j < n; j += 6) {
            if (n % j == 0 || n % (j + 2) == 0) {
                console.log("Not prime");
                continue;
            }
        }
        console.log("Prime");
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
