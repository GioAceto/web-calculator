const numOne = document.getElementById("num-one")
const numTwo = document.getElementById("num-two")
const equalsBtn = document.getElementById("equals-btn");
const clearBtn = document.getElementById("clear");
const digits = document.getElementById("digits");
const operation = document.getElementById("operation")

//Click event for the clear button
clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    numOne.value = "";
    numTwo.value = "";
    digits.innerText = ""
});

//Click event for the equals button
equalsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    //Checks if entries are numbers or empty
    if ((isNaN(numOne.value)) || (isNaN(numTwo.value))) {
        digits.innerText = "Error";
    } else if (numOne.value === "" && numTwo.value === "") {
        digits.innerText = "Error";
    } else if (numOne.value === "" || numTwo.value === "") {
        digits.innerText = "Error";
        //checks for addition
    } else if (operation.value === "+") {
        let total = parseFloat(numOne.value) + parseFloat(numTwo.value);
        digits.innerText = total;
        //checks for subtraction
    } else if (operation.value === "−") {
        let total = parseFloat(numOne.value) - parseFloat(numTwo.value);
        digits.innerText = total;
        //checks for multiplication
    } else if (operation.value === "×") {
        let total = parseFloat(numOne.value) * parseFloat(numTwo.value);
        digits.innerText = total;
        //checks for division
    } else if (operation.value === "÷") {
        let total = parseFloat(numOne.value) / parseFloat(numTwo.value);
        digits.innerText = total;
    }
});