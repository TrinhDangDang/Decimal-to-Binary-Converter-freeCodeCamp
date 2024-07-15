const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");


const decimalToBinary = (input) => {
    if (input === 0 || input === 1){
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input/2)) + (input % 2);
    }
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if(!numberInput.value || isNaN(inputInt) || inputInt < 0) { /*parseInt() function converst a string into an integer or whole number, parseInt() takes at least one argument, a string to be converted into an integer, and retirms either an integer or NaN which stands for Not a Number.*/
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";

};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
}); /*when an event listener is triggered by an event, an event object is created automatically, we don't always use this object, but it can be useful to access information about the event that was triggered */
