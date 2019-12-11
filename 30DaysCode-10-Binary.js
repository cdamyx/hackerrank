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
    let n = parseInt(readLine(), 10);
    let binaryArr = [];
    let max = 0;
    let current = 0;
    
    //create binary number by taking remainder of n / 2 and pushing to array
    while (n != 0) {
        if (n % 2 == 0) {
            binaryArr.push(0);
        }
        else {
            binaryArr.push(1);
        }
        n = Math.floor(n / 2);
    }
    
    //iterate through array and get longest string of 1's
    for (let i = 0; i <= binaryArr.length; i++) {
        if (binaryArr[i] == 1) {
            current++;
        }
        else {
            if (current >= max) {
                max = current;
            }
            current = 0;
        }
    }
    
    if (current >= max) {
        max = current;
    }
    console.log(max);
    
}

