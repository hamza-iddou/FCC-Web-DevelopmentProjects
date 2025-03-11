const input = document.getElementById(`number`).value;
const btn = document.getElementById(`convert-btn`);
const output = document.getElementById(`output`);
let romannu = ["I", "IV", "V", "IX", "X", "XL", "L", "XV", "C", "CD", "D", "CM", "M"];
//              1     4    5    9     10    40   50    90   100  400   500   900  1000
let result = [];



function decimals(input_value) {
    let result = [];
      while( input_value > 0 ){

        if(input_value <= 3){
            result.push("I");
            input_value --;
        }else if( input_value == 4){
            result.push("IV");
            input_value -= 4;
        }else if(input_value >= 5 && input_value != 9){
            result.push("V");
            input_value -= 5;
        }else if( input_value == 9){
            result.push("IX")
            input_value -= 9;
        }
    }
        return result;
}



function  roman(x){

    if(Number(x) < 4000){

    if(x.includes("e") && x.includes(".")){
        return "pleas Enter a Valid Number !";
    }
    else if(Number(x) <= 0){
        return "Please enter a number greater than or equal to 1.";
    }else {
        let new_x = x.split('').map(num => num * 1);
        
    }
    }
    else{
        return "Please enter a number less than or equal to 3999."
    }
}

btn.addEventListener("click", function(){
    const input = document.getElementById(`number`).value;
    let y = Number(input);
    console.log(decimals(y));

})