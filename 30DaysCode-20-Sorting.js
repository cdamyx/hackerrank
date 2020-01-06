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

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    //moved numberOfSwaps outside loop so it isn't reset
    let numberOfSwaps = 0;
    //handy print function to keep from repeating
    function printer(x, y) {
        console.log("Array is sorted in " + x + " swaps.");
        console.log("First Element: " + y[0]);
        console.log("Last Element: " + y[y.length - 1]);
    };
    //2D loop
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                numberOfSwaps++;
            }
        }
        //break so that outer loop doesn't continue if array is already sorted
        if (numberOfSwaps == 0) {
            printer(numberOfSwaps, a);
            break;
        }
        //reach the end, print results
        else if (i == a.length - 1) {
            printer(numberOfSwaps, a);
        }

    }
}

