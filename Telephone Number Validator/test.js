let input = "1 (555) 555-5555" 
let newInput = "";

function checkvalid(value){
    let arr = value.split('');
    let letters = arr.every(e =>{
        let c = e.charCodeAt(0);
        return ((c >= 48 && c <= 57 || c == 40 || c == 41 || c == 45 || c == 32))
    })
    return letters
}
function lenght_valid(value){
    let cpt = 0
    for(let i = 0 ; i <= value.length-1; i++){
        if(value[i] != ")" && value[i] != "(" && value[i] != "-" && value[i] != " "){
            cpt ++
        }
    }
    if(cpt >= 10 && cpt <= 11){
        return true
    }
    return false
}

function checkbraquet(value){
    for(let i = 0; i <= value.length; i++){
        let r = value.lastIndexOf("(");
        let r2 = value.lastIndexOf(")");
        if(r > r2 || r == r2 || r2 > 7 || r2-4 != r){
            return false;
        }
    return true
}
}

function checkspace(value){
    let cpt = 0;
    let new_string = "";
    let new_array = []
    for(let i = 0 ; i <= value.length-1 ; i++){
        if(value[i] != ")" && value[i] != "(" && value[i] != "-" && value[i] != " "){
            cpt ++
        }
    }
    if(cpt > 10){
        new_array = value.split("")
        new_array.splice(0, 1);
        if(new_array[0] = " "){
            new_array.splice(0, 1);
        }
    }else{
        new_array = value.split("")
    }
    for(let i = 0; i<= value.length-1 ; i++){
        if(value[i] = " " && value[i+1]!=" "){
            return true
        }else{
            return false
        }
    }
}



console.log(checkspace(input))


