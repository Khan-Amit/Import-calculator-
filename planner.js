/* SHIPMENT PROFIT PLANNER */

function shipmentPlan(){

let unitCost = parseFloat(document.getElementById("unitCost").value);

let sellPrice = parseFloat(document.getElementById("sellPlanner").value);

let container = document.getElementById("containerPlanner").value;


/* GET CONTAINER CAPACITY */

let capacity = containerCapacity[container];


/* TOTAL COST */

let totalCost = unitCost * capacity;


/* TOTAL REVENUE */

let revenue = sellPrice * capacity;


/* PROFIT */

let profit = revenue - totalCost;


/* SHOW RESULT */

document.getElementById("planner").innerHTML =

"Units per Shipment: " + capacity +
"<br>Total Shipment Cost: " + totalCost.toFixed(2) +
"<br>Total Revenue: " + revenue.toFixed(2) +
"<br>Estimated Profit: " + profit.toFixed(2);

}
