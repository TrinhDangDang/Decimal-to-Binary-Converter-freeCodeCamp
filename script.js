const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");


const decimalToBinary = (input) => {
    const remainders = [];

    while(input > 0) {
        const quotient = Math.floor(input/2);
        const remainder = input % 2;
        remainders.push(remainder);
        input = quotient;
    }
    result.innerText = remainders.reverse().join("");
};

const checkUserInput = () => {
    if(!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0) { /*parseInt() function converst a string into an integer or whole number, parseInt() takes at least one argument, a string to be converted into an integer, and retirms either an integer or NaN which stands for Not a Number.*/
        window.alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";

};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
}); /*when an event listener is triggered by an event, an event object is created automatically, we don't always use this object, but it can be useful to access information about the event that was triggered */
