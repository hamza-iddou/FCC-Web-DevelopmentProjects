const result = document.getElementById(`results-div`);
const checkbtn = document.getElementById(`check-btn`);
const clear = document.getElementById(`clear-btn`);

function checkPhoneNumber(value) {
    let trimmedValue = value.trim();
    let validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return validPattern.test(trimmedValue) ? `Valid number: ${trimmedValue}` : `Invalid number: ${trimmedValue}`;
}

checkbtn.addEventListener("click", () => {
    const input = document.getElementById("user-input").value.trim();
    checkPhoneNumber(input)
    result =  checkPhoneNumber(input)
    

});

