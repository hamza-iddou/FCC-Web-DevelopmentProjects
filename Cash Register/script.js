let price = 1.87;
let totalcid = 335.41;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const olElements = document.querySelectorAll(".ol"); 


olElements.forEach((ol, index) => {
    if (cid[index]) { 
        ol.textContent = `${cid[index][0]}: ${cid[index][1]}$`;
    }
});

const cash = document.getElementById(`cash`);
 
const change_due = document.getElementById(`change-due`);
const purchase_btn = document.getElementById(`purchase-btn`);
const total = document.getElementById(`total`);

total.textContent = `Total : ${price}$`;
purchase_btn.addEventListener("click", ()=>{
    let cash_value = cash.value
    if(cash_value < price && cash_value != ""){
        change_due.innerHTML = "<p>Customer does not have enough money to purchase the item</p><br>";
    }else{

    }
})








