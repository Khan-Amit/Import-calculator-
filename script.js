/* LOAD HS DATABASE INTO DROPDOWN */

window.onload = function(){

let select = document.getElementById("hsSelect");

hsDatabase.forEach(function(item){

let option = document.createElement("option");

option.value = item.hs;
option.text = item.name + " (HS " + item.hs + ")";

select.appendChild(option);

});

};


/* MAIN IMPORT COST CALCULATOR */

function calculate(){

let country = document.getElementById("country").value;

let hs = document.getElementById("hsSelect").value;

let price = parseFloat(document.getElementById("price").value);

let qty = parseFloat(document.getElementById("qty").value);

let freight = parseFloat(document.getElementById("freight").value);

let insurance = parseFloat(document.getElementById("insurance").value);

let sell = parseFloat(document.getElementById("sell").value);

let container = document.getElementById("container").value;


/* FIND PRODUCT FROM HS DATABASE */

let product = hsDatabase.find(p => p.hs === hs);


/* ADD CONTAINER SHIPPING COST */

let shippingCost = containerShipping[container].cost;

freight = freight + shippingCost;


/* CIF CALCULATION */

let cif = (price * qty) + freight + insurance;


/* DUTY RATE BASED ON COUNTRY */

let dutyRate = 0;

if(country === "thailand")
dutyRate = product.thailandDuty;

if(country === "bangladesh")
dutyRate = product.bangladeshDuty;


/* DUTY VALUE */

let duty = cif * dutyRate / 100;


/* VAT */

let vat = 0;

if(country === "thailand")
vat = (cif + duty) * 0.07;

if(country === "bangladesh")
vat = (cif + duty) * 0.15;


/* TOTAL LANDING COST */

let totalCost = cif + duty + vat;


/* COST PER UNIT */

let unitCost = totalCost / qty;


/* PROFIT */

let revenue = sell * qty;

let profit = revenue - totalCost;


/* SHOW RESULT */

document.getElementById("result").innerHTML =

"HS Code: " + product.hs +
"<br>Product: " + product.name +
"<br>CIF Value: " + cif.toFixed(2) +
"<br>Import Duty: " + duty.toFixed(2) +
"<br>VAT: " + vat.toFixed(2) +
"<br>Total Landing Cost: " + totalCost.toFixed(2) +
"<br>Cost Per Unit: " + unitCost.toFixed(2) +
"<br>Estimated Profit: " + profit.toFixed(2);

  }
