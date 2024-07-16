//These solutions to fizzbuzz are from the Bobby Davis.



//This function does not change between solutions
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let stopValue = document.getElementById("stopValue").value;

    //validate input
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
        //generate fizzbuzz
        let fbValues = generateFizzBuzzA(fizzValue, buzzValue, stopValue);
        
        //display fizzbuzz
        displayFizzBuzz(fbValues);
    }
}

//multiple solutions here

//generate fizzbizz values with if statement
function generateFizzBuzzA(fizzValue, buzzValue, stopValue) {
    let fbValues =[];

    for(let i = 1; i <= stopValue; i++) {

        if(i % fizzValue == 0 && i % buzzValue == 0) {
            fbValues.push("FizzBuzz");
        } else if(i % fizzValue == 0) {
            fbValues.push("Fizz");
        } else if(i % buzzValue ==  0) {
            fbValues.push("Buzz");
        } else {
            fbValues.push(i);
        }

    }

    return fbValues;
}

//generate fizzbuzz with a switch
function generateFizzBuzzB(fizzValue, buzzValue, stopValue) {
    let fbValues = [];
    let Fizz = false;
    let Buzz = false;

    for(let i = 1; i <= stopValue; i++) {
        Fizz = (i % fizzValue == 0);
        Buzz = (i %buzzValue == 0);

        switch(true) {
            case Fizz && Buzz: {
                fbValues.push('FizzBuzz');
                break;
            }
            case Fizz: {
                fbValues.push('Fizz');
                break;
            }
            case Buzz: {
                fbValues.push('Buzz');
                break;
            }
            default: {
                fbValues.push(i);
            }
        }
    }
    return fbValues;
}

//the one liner
//fizzbuzz with a terinary
function generateFizzBuzzC(fizzValue, buzzValue, stopValue) {
    let fbValues = [];

    for(let i = 1; i <= stopValue; i++) {
        let value = (i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") || i;
        fbValues.push(value);
    }

    return fbValues;
}

function displayFizzBuzz(fbValues) {
    let results = document.getElementById("resultsDisplay");
    results.innerHTML = "";
    let content = "";

    for(let i = 0; i < fbValues.length; i++) {
        let dataValue = fbValues[i];
        let cssClass = "";
        

        if(cssClass != 'Fizz' || cssClass != 'Buzz' || cssClass != 'FizzBuzz') {
            cssClass = "noFB";
        } else {
            cssClass = dataValue;
        }
        let divElement = `<div class="col ${cssClass}">${dataValue}</div>`;
        content += divElement;
    }
    results.innerHTML = content;
}