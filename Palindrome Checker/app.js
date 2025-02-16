
const btn = document.getElementById(`check-btn`);
const textToShow = document.getElementById(`result`);

let resultat = "";
let miror = "";


const lowerCaseUserText = (chars) => {
    resultat ="";
    for (let char of chars){
    if((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)){
        resultat += char;
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
}

function Miror(test){
    miror = "";
    for (let i = test.length - 1  ; i >= 0 ; i--){
        let AloneChar = test.slice(0, i+1);
        let lastIndex = AloneChar[AloneChar.length - 1];
        miror += lastIndex;
    }
    
    if (check(miror , test)){
        textToShow.textContent = `${test} is a palindrome`;

    }else{
        textToShow.textContent = `${test} is not a palindrome`;
    }
}

btn.addEventListener("click", function(){
    let cleartextinput = document.getElementById(`text-input`).value;
    let textinput = document.getElementById(`text-input`).value.trim().toLowerCase();
    let theMirorOfTheText = document.getElementById(`miror`);

    if(textinput == ""){
        alert("Please input a value");
    }else{
    const TextTomakeitlower = lowerCaseUserText(textinput);
    Miror(TextTomakeitlower);
    theMirorOfTheText.textContent = `${miror}`;
    }
});





