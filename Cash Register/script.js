let price = 1.87;
let totalcid = 335.41;
let cid = [
  ['PENNY', 1.01], //0
  ['NICKEL', 2.05],//1
  ['DIME', 3.1], //2
  ['QUARTER', 4.25], //3
  ['ONE', 90], //4
  ['FIVE', 55], //5
  ['TEN', 20], //6
  ['TWENTY', 60], //7
  ['ONE HUNDRED', 100] //8
];


const olElements = document.querySelectorAll(".ol"); 
const cash = document.getElementById(`cash`);
const change_due = document.getElementById(`change-due`);
const purchase_btn = document.getElementById(`purchase-btn`);
const total = document.getElementById(`total`);
updateUi()
var exchange = [
    ['PENNY', 0], //0
  ['NICKEL', 0],//1
  ['DIME', 0], //2
  ['QUARTER', 0], //3
  ['ONE', 0], //4
  ['FIVE', 0], //5
  ['TEN', 0], //6
  ['TWENTY', 0], //7
  ['ONE HUNDRED', 0]
]; 


function updateUi(){
olElements.forEach((ol, index) => {
    if (cid[index]) { 
        ol.textContent = `${cid[index][0]}: ${cid[index][1]}$`;
    }
});
}

function calculateChange(value) {
    let back = value - price;
    while (back > 0) {
        if (back >= 100 && cid[8][1] >= 100) {
            back = (back - 100).toFixed(2);
            cid[8][1] -= 100;
            exchange[8][1] += 100

        } else if (back >= 20 && cid[7][1] >= 20) {
            back = (back - 20).toFixed(2);
            cid[7][1] -= 20;
            exchange[7][1] += 20

        } else if (back >= 10 && cid[6][1] >= 10) {
            back = (back - 10).toFixed(2);
            cid[6][1] -= 10;
            exchange[6][1] += 10

        } else if (back >= 5 && cid[5][1] >= 5) {
            back = (back - 5).toFixed(2);
            cid[5][1] -= 5;
            exchange[5][1] += 5

        } else if (back >= 1 && cid[4][1] >= 1) {
            back = (back - 1).toFixed(2);
            cid[4][1] -= 1;
            exchange[4][1] += 1

        } else if (back >= 0.25 && cid[3][1] >= 0.25) {
            back = (back - 0.25).toFixed(2);
            cid[3][1] -= 0.25;
            exchange[3][1] += 0.25

        } else if (back >= 0.1 && cid[2][1] >= 0.1) {
            back = (back - 0.1).toFixed(2);
            cid[2][1] -= 0.1;
            exchange[2][1] += 0.1

        } else if (back >= 0.05 && cid[1][1] >= 0.05) {
            back = (back - 0.05).toFixed(2);
            cid[1][1] -= 0.05;
            exchange[1][1] += 0.05

        } else if (back >= 0.01 && cid[0][1] >= 0.01) {
            back = (back - 0.01).toFixed(2);
            cid[0][1] -= 0.01;
            exchange[0][1] += 0.01

        } else {
            console.log("Not enough change available.");
            return;
        }
    }
    updateUi()
    return exchange;
}

total.textContent = `Total : ${price}$`;
purchase_btn.addEventListener("click", ()=>{
    let cash_value = Number(cash.value)
    if(cash_value < price && cash_value != ""){
        change_due.innerHTML = "<p>Customer does not have enough money to purchase the item</p><br>";
    }else{
        calculateChange(cash_value);
        change_due.innerHTML = `<h3>Status: OPEN</h3>`;
        for(let i = exchange.length-1; i >= 0 ; i--){
            if(exchange[i][1] > 0 ){
                change_due.innerHTML += `<ol>${exchange[i][0]} : ${exchange[i][1]}</ol>`
            }
        }
        

        
    }
})








