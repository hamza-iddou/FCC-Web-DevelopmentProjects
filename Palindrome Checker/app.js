const txt = document.getElementById(`text`).value;
const btn = document.getElementById(`btn`);
const resultat = document.getElementById(`resultat`)
let SpaceChars = "";

// make the value that intrend by user to lowercase

const lowerCaseUserText = (chars) => {
    let resultat = '';
    for (let char of chars){
        resultat += char.toLowerCase()
    }
    return resultat
};

// make avarible with the same lenght of the main value 
const Replace = (text) => {
    for(let i = 0 ; i < text.length ; i++){
        text[i];
        SpaceChars += " "
    }
    return SpaceChars;
}
// 
function Miror(){
    for (let i = 0 ; i > SpaceChars ; i++){
        let lastIndex = lowerCaseUserText.length - 1
         
    }
}

