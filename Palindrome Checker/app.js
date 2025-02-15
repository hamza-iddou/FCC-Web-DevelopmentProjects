const textinput = document.getElementById(`text`).value;
const btn = document.getElementById(`btn`);
const textToShow = document.getElementById(`resultat`);

let resultat = "";
let miror = "";


const lowerCaseUserText = (chars) => {
    resultat ="";
    for (let char of chars){
        resultat += char.toLowerCase()
    }
    return resultat
};


const TextTomakeitlower = lowerCaseUserText(textinput);


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
    check(miror , test);
    if (check){
        textToShow.textContent = `The Word is Palindrome`;

    }else{
        textToShow.textContent = `The Word is'nt Palindrome`;
    }
}


btn.addEventListener("click", function(){
    Miror(TextTomakeitlower);
});





