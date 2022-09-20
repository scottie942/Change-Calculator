function calculateChange(amountDue, amountReceived){
   return amountReceived - amountDue;
}

let calculate = document.getElementById("calculate-change");

calculate.onclick = function handleClickEvent(){
   let amountDue = document.getElementById("amount-due").value;
   let amountReceived = document.getElementById("amount-received").value;
   let change = calculateChange(amountDue, amountReceived);
   let dollars = parseInt(change);
   let cents = parseInt((change % 1).toFixed(2).substring(2));
   let quarters = Math.floor(cents/25);
   let quarterValue = quarters * 25; 
   let dimes = Math.floor((cents - quarterValue)/10);
   let dimeValue = dimes * 10;
   let nickels = Math.floor((cents - quarterValue - dimeValue)/5);
   let nickelValue = nickels * 5;
   let pennies = Math.floor((cents - quarterValue - dimeValue - nickelValue)/1);
   let afterDecimal = amountDue.toString().split(".")[1];

   if (cents > 24){
       document.getElementById("quarters-output").innerHTML = quarters;
    } else {
      document.getElementById("quarters-output").innerHTML = 0;
    }

   if (cents > 9){
      document.getElementById("dimes-output").innerHTML = dimes;
    } else {
      document.getElementById("dimes-output").innerHTML = 0;
    }

   if (cents > 4){
      document.getElementById("nickels-output").innerHTML = nickels;
    } else {
      document.getElementById("nickels-output").innerHTML = 0;
    }

   if (cents >= 1){
      document.getElementById("pennies-output").innerHTML = pennies; 
   } else {
      document.getElementById("pennies-output").innerHTML = 0;
   }

   if (amountDue == "" || amountReceived == ""){
      document.getElementById("cents-output").innerHTML = "";
      document.getElementById("dollars-output").innerHTML = ""; 
      document.getElementById("quarters-output").innerHTML = ""; 
      document.getElementById("dimes-output").innerHTML = "";
      document.getElementById("nickels-output").innerHTML = ""; 
      document.getElementById("pennies-output").innerHTML = "";
      document.getElementById("change-output").innerHTML = ""; 
      document.getElementById("dollars").innerHTML = ""; 
      document.getElementById("quarters").innerHTML = ""; 
      document.getElementById("dimes").innerHTML = ""; 
      document.getElementById("nickels").innerHTML = ""; 
      document.getElementById("pennies").innerHTML = "";
      document.getElementById("due-title").innerHTML = ""; 
      document.getElementById("received-title").innerHTML = ""; 
   } else if ((change < 0) && (!afterDecimal || afterDecimal.length < 3)){
      document.getElementById("dollars-output").innerHTML = "";
      document.getElementById("quarters-output").innerHTML = ""; 
      document.getElementById("dimes-output").innerHTML = ""; 
      document.getElementById("nickels-output").innerHTML = ""; 
      document.getElementById("pennies-output").innerHTML = "";
      document.getElementById("change-output").innerHTML = 
      `Amount received is short by <span class = "text-color"> $${(amountDue - amountReceived).toFixed(2)}</span>`; 
      document.getElementById("dollars").innerHTML = "";
      document.getElementById("quarters").innerHTML = ""; 
      document.getElementById("dimes").innerHTML = ""; 
      document.getElementById("nickels").innerHTML = ""; 
      document.getElementById("pennies").innerHTML = "";  
   } else  if (!afterDecimal || afterDecimal.length < 3){
      document.getElementById("dollars-output").innerHTML = dollars; 
      document.getElementById("change-output").innerHTML = `Change = <span class = "text-color">$${change.toFixed(2)}</span>`;
      document.getElementById("cents-output").innerHTML = ""; 
      document.getElementById("dollars").innerHTML = "Dollars"; 
      document.getElementById("quarters").innerHTML = "Quarters"; 
      document.getElementById("dimes").innerHTML = "Dimes"; 
      document.getElementById("nickels").innerHTML = "Nickels"; 
      document.getElementById("pennies").innerHTML = "Pennies";
      document.getElementById("due-title").innerHTML = "Amount Due:"; 
      document.getElementById("received-title").innerHTML = "Amount Received:"; 
   } else {
      document.getElementById("dollars-output").innerHTML = ""; 
      document.getElementById("quarters-output").innerHTML = ""; 
      document.getElementById("dimes-output").innerHTML = ""; 
      document.getElementById("nickels-output").innerHTML = ""; 
      document.getElementById("pennies-output").innerHTML = "";
      document.getElementById("change-output").innerHTML = "Please enter a valid amount"; 
      document.getElementById("dollars").innerHTML = "";
      document.getElementById("quarters").innerHTML = ""; 
      document.getElementById("dimes").innerHTML = ""; 
      document.getElementById("nickels").innerHTML = ""; 
      document.getElementById("pennies").innerHTML = "";
   }
}

let clear = document.getElementById("clear-button");

clear.onclick = function clearClickEvent(){
   document.getElementById("dollars").innerHTML = ""; 
   document.getElementById("quarters").innerHTML = ""; 
   document.getElementById("dimes").innerHTML = ""; 
   document.getElementById("nickels").innerHTML = ""; 
   document.getElementById("pennies").innerHTML = "";
   document.getElementById("due-title").innerHTML = ""; 
   document.getElementById("received-title").innerHTML = ""; 
   document.getElementById("cents-output").innerHTML = "";
   document.getElementById("dollars-output").innerHTML = ""; 
   document.getElementById("quarters-output").innerHTML = ""; 
   document.getElementById("dimes-output").innerHTML = ""; 
   document.getElementById("nickels-output").innerHTML = ""; 
   document.getElementById("pennies-output").innerHTML = "";
   document.getElementById("change-output").innerHTML = "";
   
   inputs = document.getElementsByClassName("form-control");
   for(input of inputs){
      input.value = "";
   }
}