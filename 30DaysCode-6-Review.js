function processData(input) {
	//create array from stdin stream based on each new line
	let inputArr = input.split("\n");
    //Enter your code here
	//loop through test cases
	for (let j = 1; j < inputArr.length; j++) {
	
		//string manipulation
		let even = "";
		let odd = "";
		for (let i = 0; i < inputArr[j].length; i++) {
			if (i % 2 == 0) {
				even += inputArr[j][i];
			}
			else {
				odd += inputArr[j][i];
			}
		}
		console.log(even + " " + odd);
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
