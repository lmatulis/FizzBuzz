//get values from user and parse. check for input issues. Then call functions to generate array of numbers and display that array
function getValues() {
    //initialize variables for user input
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let stopValue = document.getElementById("stopValue").value;

    //parse variables
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    //check for input that is incorrect or out of bounds
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && stopValue <= 5000) {

        //generate numbers funciton
        let numbers = generateFizzBuzz(stopValue);

        //display numbers funciton
        displayFizzBuzz(numbers, fizzValue, buzzValue);

        //check the type of input error. Display message
    } else if(stopValue > 5000) {
        alert("The Stop Value exceeded the bounds. Enter a number that is less than or equal to 5000.");
    } else {
        alert("Input must be a number. Please enter a number to continue.");
    }
}

//generate numbers
function generateFizzBuzz(stopValue) {
    //initialize array
    let numbers = [];

    //loop to add items to array
    for(i = 1; i <= stopValue; i++) {
        numbers.push(i);
    }

    return numbers;

}

//display numbers
function displayFizzBuzz(numbers, fizzValue, buzzValue) {
    //templates for divs
    //"`<div class="border border-2 p-3 text-center">${numbers[index]}</div>`"    base     condition
    //"<div class="fizz border border-2 p-3 text-center">Fizz</div>"              fizz     condition
    //"<div class="buzz border border-2 p-3 text-center">Buzz</div>"              buzz     condition
    //"<div class="fizz-buzz border border-2 p-3 text-center">FizzBuzz</div>"     fizzbuzz condition

    //initialize variable for html
    let output = "";

    //loop through the array
    for( let index = 0; index < numbers.length; index++) {

        if (numbers[index] % fizzValue == 0 && numbers[index] % buzzValue ==0){

            output += '<div class="fizz-buzz border border-2 p-3 text-center">FizzBuzz</div>';

        } else if(numbers[index] % fizzValue == 0) {

            output += '<div class="fizz border border-2 p-3 text-center">Fizz</div>';

        } else if(numbers[index] % buzzValue == 0) {

            output += '<div class="buzz border border-2 p-3 text-center">Buzz</div>';

        } else {

            output += `<div class="border border-2 p-3 text-center">${numbers[index]}</div>`;

        }

    }
    
    document.getElementById("resultsDisplay").innerHTML = output;

}