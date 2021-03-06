process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

//this exercise shows JS not throwing errors on NaN or undefined, so you have to use trickery. 

function main() {
    const S = readLine();
    let N = Number(S);

    try {
        //this is the suggested code trick from hackerrank in the comment above
        S != N && err();
        console.log(N);
    }

    catch(err) {
        console.log("Bad String");
    }
}




/*original answer
function main() {
    const S = readLine();
    let N = Number(S);

    try {
        //without the new Array line, JS does not throw error on NaN. JS is weird
        new Array(N);
        console.log(N);
    }

    catch(err) {
        console.log("Bad String");
    }
}
*/
