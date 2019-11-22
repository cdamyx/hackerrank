'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
	//basic loop solution
	for (let i = 1; i <= 10; i++) {
		let result = n * i;
		console.log(n + " x " + i + " = " + result);
	}
}

/*ES6 template strings solution from other student

for (let i = 1; i <= 10; i += 1) {
    console.log(`${n} x ${i} = ${n * i}`);
}
*/