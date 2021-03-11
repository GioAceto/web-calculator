const numOne = document.getElementById("num-one")
const numTwo = document.getElementById("num-two")
const equalsBtn = document.getElementById("equals-btn");
const clearBtn = document.getElementById("clear");
const digits = document.getElementById("digits");
const operation = document.getElementById("operation")

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    numOne.value = "";
    numTwo.value = "";
    digits.innerText = ""
});

equalsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if ((isNaN(numOne.value)) || (isNaN(numTwo.value))) {
        digits.innerText = "Error";
    } else if (numOne.value === "" && numTwo.value === "") {
        digits.innerText = "Error";
    } else if (numOne.value === "" || numTwo.value === "") {
        digits.innerText = "Error";
    } else if (operation.value === "+") {
        let total = parseFloat(numOne.value) + parseFloat(numTwo.value);
        digits.innerText = total;
    } else if (operation.value === "−") {
        let total = parseFloat(numOne.value) - parseFloat(numTwo.value);
        digits.innerText = total;
    } else if (operation.value === "×") {
        let total = parseFloat(numOne.value) * parseFloat(numTwo.value);
        digits.innerText = total;
    } else if (operation.value === "÷") {
        let total = parseFloat(numOne.value) / parseFloat(numTwo.value);
        digits.innerText = total;
    }
});