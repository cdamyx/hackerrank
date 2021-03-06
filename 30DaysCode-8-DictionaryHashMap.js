//better answer
function processData(input) {
    input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = []
    for (var k = 0; k< N; k++){
        var line = input[k+1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var k = N+1; k < input.length; k++ ){
        var num = (phonebook[input[k]])
        if (num !== undefined){
            console.log(input[k]+'='+num)
        } else {
            console.log('Not found')
        }
    }

} 


//original answer
/*function processData(input) {
    let inputArr = input.split("\n");
    let phoneBook = [];
    //make sure first input is an integer instead of string
    let n = parseInt(input[0]);
    
    //divide each string into key, value pair and build phonebook hashmap/dictionary/map
    for (let i = 1; i <= n; i++) {
        let splitString = inputArr[i].split(" ");
        phoneBook[splitString[0]] = splitString[1];
    }

    //find key in hashmap and print appropraite value
    for (let i = n + 1; i < inputArr.length; i++) {
        if (phoneBook[inputArr[i]] !== undefined) {
            console.log(inputArr[i] + "=" + phoneBook[inputArr[i]]);
        }
        else {
            console.log("Not found");
        }
    }
} 
*/
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
