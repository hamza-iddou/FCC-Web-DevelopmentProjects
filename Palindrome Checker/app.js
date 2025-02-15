//const txt = document.getElementById(`text`).value;
//const btn = document.getElementById(`btn`);
//const resultat = document.getElementById(`resultat`)

let resultat = "";
let miror = "";


const lowerCaseUserText = (chars) => {
    let resultat ="";
    for (let char of chars){
        resultat += char.toLowerCase()
    }
    return resultat
};


const test = lowerCaseUserText("tot");


function Miror(){
    miror = "";
    for (let i = test.length - 1  ; i >= 0 ; i--){
        let AloneChar = test.slice(0, i+1);
        let lastIndex = AloneChar[AloneChar.length - 1];
        miror += lastIndex;
    }
    console.log(miror);
}

Miror()