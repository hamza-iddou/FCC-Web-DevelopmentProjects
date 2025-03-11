const input = document.getElementById(`number`).value;
const btn = document.getElementById(`convert-btn`);
const output = document.getElementById(`output`);
let romannu = ["I", "IV", "V", "IX", "X", "XL", "L", "XV", "C", "CD", "D", "CM", "M"];
//              1     4    5    9     10    40   50    90   100  400   500   900  1000
let result = [];



const decimals = (x)=>{
    result = [];
    for (let i =0; i <= x.length ; i++){
        switch (x[i]){
            case x[i] == 1:
                result.push("I");
                break;
            case x[i] == 2:
                result.push("II");
                break;
            case x[i] == 3 :
                result.push("III");
                break
            case x[i] == 4 :
                result.push("IV");
                break;
            case x[i] == 5 :
                result.push("5");
                break;
            case x[i] == 9:
                result.push("IX")
        }
    }
}


function  roman(x){
    if(Number(x) < 4000){
    if(x.includes("e") && x.includes(".")){
        return "pleas enter a valid number !";
    }else{
        let new_x = x.split('').map(num => num * 1)
        
    }
    }else{
        return "Please enter a number less than or equal to 3999."
    }
}

btn.addEventListener("click", function(){
    const input = document.getElementById(`number`).value;
    let x = Number(input);

})