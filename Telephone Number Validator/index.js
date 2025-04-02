const result = document.getElementById("results-div");
const checkbtn = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");

function checkPhoneNumber(value) {
    let trimmedValue = value.trim();
    let validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return validPattern.test(trimmedValue) 
        ? `Valid US number: ${trimmedValue}` 
        : `Invalid US number: ${trimmedValue}`;
}

checkbtn.addEventListener("click", () => {
    let inputField = document.getElementById("user-input");
    let input = inputField.value.trim();

    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    let resultText = checkPhoneNumber(input);
    result.innerHTML += resultText + "<br>";
    inputField.value = ""; 
});

clear.addEventListener("click", () => {
    result.innerHTML = ""; 
});
