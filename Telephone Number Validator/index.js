const result = document.getElementById(`results-div`);
const checkbtn = document.getElementById(`check-btn`);
const clear = document.getElementById(`clear-btn`);

function checkPhoneNumber(value) {
    let trimmedValue = value.trim();
    let validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return validPattern.test(trimmedValue) ? `Valid number: ${trimmedValue}` : `Invalid number: ${trimmedValue}`;
}

checkbtn.addEventListener("click", () => {
    let inputField = document.getElementById("user-input")
    let input = inputField.value.trim();
    checkPhoneNumber(input)
    result.innerHTML +=  checkPhoneNumber(input) + "<br>";
    inputField.value = "";
});

clear.addEventListener("click", ()=>{
    result.textContent =  "";
})


