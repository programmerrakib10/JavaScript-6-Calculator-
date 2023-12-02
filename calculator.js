let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let result = document.getElementById("result")

function add() {
    if (inputOne.value && inputTwo.value) {
        let add = parseInt(inputOne.value) + parseInt(inputTwo.value)
    result.innerHTML = add;
    } else {
        alert("Please enter the Value")
    }
    
}
function subtract() {
    if (inputOne.value && inputTwo.value) {
        let subtract = parseInt(inputOne.value) - parseInt(inputTwo.value)
    result.innerHTML = subtract;
    } else {
        alert("Please enter the Value")
    }
}
function multiplication() {
    if (inputOne.value && inputTwo.value) {
        let multiplication = parseInt(inputOne.value) * parseInt(inputTwo.value)
    result.innerHTML = multiplication;
    } else {
        alert("Please enter the Value")
    }
}
function division() {
    if (inputOne.value && inputTwo.value) {
        let division = parseInt(inputOne.value) / parseInt(inputTwo.value)
    result.innerHTML = division.toFixed(4);
    } else {
        alert("Please enter the Value")
    }
}