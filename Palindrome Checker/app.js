const btn = document.getElementById(`check-btn`);
const textToShow = document.getElementById(`result`);


let resultat = "";
let miror = "";
let clone = "";


const lowerCaseUserText = (chars) => {

    resultat ="";
    clone = "";

    for (let char of chars){
        clone += char;    
    if(/[a-zA-Z0-9]/.test(char)){
        resultat += char.toLowerCase();
    }
    }
    return resultat;    
};

const  check = (x , y) => {
    if(x == y){
        return true ;
    }else{
        return false;
    }   
};

function Miror(test){
    miror = "";
    for (let i = test.length - 1  ; i >= 0 ; i--){
        let AloneChar = test.slice(0, i + 1);
        let lastIndex = AloneChar[AloneChar.length - 1];
        miror += lastIndex;
    }
    if (check(miror , resultat)){
        textToShow.textContent = `${clone} is a palindrome`;
    }else{
        textToShow.textContent = `${clone} is not a palindrome`;
    }
}

btn.addEventListener("click", function(){

    let textinput = document.getElementById(`text-input`).value;
    let theMirorOfTheText = document.getElementById(`miror`);
    if(textinput == ""){
        alert("Please input a value");
    }else{
    const TextTomakeitlower = lowerCaseUserText(textinput);
    Miror(TextTomakeitlower);
    theMirorOfTheText.textContent = `${miror}`;
    }
});





