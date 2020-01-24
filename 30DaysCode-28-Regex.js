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
    const N = parseInt(readLine(), 10);
    //array to hold names from gmail addresses
    let gmailArr = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        let pattern = /@gmail\.com$/ig;
        //use regex .test() method to see if string contains pattern
        if (pattern.test(emailID)) {
            gmailArr.push(firstName);
        }
    }
    //sort array and print one line at at time
    gmailArr.sort();
    for (let i = 0; i < gmailArr.length; i++) {
        console.log(gmailArr[i]);
    }
}
