function performOperation(){
    //get user iput from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);


    //check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)){
        // Perform the operation
        let result = multiply(num1, num2);
        // Display the result
        displayResult(result);

    }else{
        isplayResult('Please enter valid numbers');

    }


}

function multiply(a,b){
    //introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a*b;
}

function displayResult(result){
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}