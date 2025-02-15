
const btn = document.getElementById(`check-btn`);
const textToShow = document.getElementById(`result`);

let resultat = "";
let miror = "";


const lowerCaseUserText = (chars) => {
    resultat ="";
    for (let char of chars){
        resultat += char.toLowerCase()
    }
    return resultat
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
        if( lastIndex.charCodeAt(0) >= 97 && lastIndex.charCodeAt(0) <= 122){
        miror += lastIndex;
        }
    }
    
    if (check(miror , test)){
        textToShow.textContent = `The Word is Palindrome`;

    }else{
        textToShow.textContent = `The Word is'nt Palindrome`;
    }
}

btn.addEventListener("click", function(){
    let textinput = document.getElementById(`text-input`).value.trim();
    let theMirorOfTheText = document.getElementById(`miror`);

    if(textinput == ""){
        alert("Please input a value");
    }else{
    const TextTomakeitlower = lowerCaseUserText(textinput);
    Miror(TextTomakeitlower);
    theMirorOfTheText.textContent = `${miror}`;
    }
});





