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
    let arr = Array(6);
    let newArr = [];
    let count = 0;

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    //iterate 4 rows and 4 columns, sum the hourglass positions, and put in new array
    for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
            newArr[count] = arr[j][k] + arr[j][k+1] + arr[j][k+2] + arr[j+1][k+1] + arr[j+2][k] + arr[j+2][k+1] + arr[j+2][k+2];
            count++;
        }
    }
    //sort the new array, always use the compare function for sorting numbers in JS
    newArr.sort(function(a, b){return b-a});
    console.log(newArr[0]);
}
