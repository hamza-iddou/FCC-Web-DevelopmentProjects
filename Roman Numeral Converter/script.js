const btn = document.getElementById(`convert-btn`);
const output = document.getElementById(`output`);
let romannu = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

var decimalsR = [];
var moreXR = [];
var morCR = [];
var moreMR = [];



function decimals(input_value){
    while( input_value > 0 ){
      if(input_value <= 3){
          decimalsR.push("I");
          input_value --;
      }else if( input_value == 4){
          decimalsR.push("IV");
          input_value -= 4;
      }else if(input_value >= 5 && input_value != 9){
          decimalsR.push("V");
          input_value -= 5;
      }else if( input_value == 9){
          decimalsR.push("IX")
          input_value -= 9;
      }   
  }
}

function moreX(input_value){
    while(input_value > 9){
       if(input_value  < 40){
           moreXR.push("X");
           input_value -= 10;
       }else if(input_value >= 40 && input_value < 50){
           moreXR.push("XL");
           input_value -= 40;
       }else if(input_value >= 50 && !(input_value >= 90)){
           moreXR.push("L");
           input_value -= 50;
       }else if(input_value >= 90){
           moreXR.push("XC");
           input_value -= 90;
       }
    }     
    decimals(input_value);
}

function moreM(input_value){
    while(input_value > 999){
         moreMR.push("M")
         input_value -= 1000
    }
     moreC(input_value);
 }

 function moreC(input_value){

    while(input_value > 99){
        if(input_value < 400){
            morCR.push("C");
            input_value -= 100;
        }else if(input_value >= 400 && input_value < 500){
            morCR.push("CD");
            input_value -= 400;
        }else if(input_value >= 500 && !(input_value >= 900)){
            morCR.push("D");
            input_value -= 500;
        }else if(input_value >= 900){
            morCR.push("CM");
            input_value -= 900 
        }else if(input_value >= 1000){
            moreMR(input_value);
        }
    }
    moreX(input_value);
  
}

function roman(values){

    if(values < 4000){
        if(values < 10 ){
            decimals(values);
            
        }else if(values < 100){
            moreX(values);
        }else if(values < 1000){
            moreC(values);
        }else if(values > 999){
            moreM(values);
        }
    }
    }
    

btn.addEventListener("click", function(){
    const input = document.getElementById(`number`).value;
    
    
     
    moreMR = [];
    morCR = [];
    moreXR = [];
    decimalsR = [];
    if (input == "" || input.includes("e") || input.includes(".")){
        output.textContent =  "Please enter a valid number";


    }else if(input <= 0){
        output.textContent =  "Please enter a number greater than or equal to 1";
    }else if(input > 3999){
        output.textContent =  "Please enter a number less than or equal to 3999";
    }else{
    roman(input)
    let resault_affich = (String(moreMR)+String(morCR)+String(moreXR)+String(decimalsR)).split(",").join("");
    output.textContent = resault_affich;
}
output.style.display = 'block';
    
})