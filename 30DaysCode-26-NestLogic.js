function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");
    let returnedArr = inputArr[0].split(" ");
    let dueDateArr = inputArr[1].split(" ");
    let returnedDate = new Date (returnedArr[2], returnedArr[1], returnedArr[0]);
    let dueDate = new Date (dueDateArr[2], dueDateArr[1], dueDateArr[0]);
    let fine = 0;

    if (returnedDate <= dueDate) {
        fine = 0;
    }
    else if (returnedArr[2] == dueDateArr[2] && returnedArr[1] == dueDateArr[1]) {
        fine = 15 * (returnedArr[0] - dueDateArr[0]);
    }
    else if (returnedArr[2] == dueDateArr[2]) {
        fine = 500 * (returnedArr[1] - dueDateArr[1]);
    }
    else {
        fine = 10000;
    }

    console.log(fine);



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
