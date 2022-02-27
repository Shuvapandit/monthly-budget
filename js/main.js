//for input field

function getInput(inputId,errormsgg) {
  const input = document.getElementById(inputId);
  const inputAmount = parseFloat(input.value);
   if(inputAmount<0 || isNaN(inputAmount) ){
    const failError = document.getElementById(errormsgg);
        failError.style.display = 'block';
    
  }
  else{
    return inputAmount;
  } 
 input.value=' ';
  
  
}

//  for balance and expanse

function getAmount(amount, amountTotal) {
  const totalAmount = document.getElementById(amount);
  const totalAmountText = totalAmount.innerText;
  totalAmount.innerText = amountTotal;
  return totalAmount.innerText;
}



//declare calculate button
document.getElementById('calculate-btn').addEventListener('click',  function(){
  
  // income calculation 
  const incomeAmount = getInput('income_amount','errormsg0');
 
  // Expenses calculation 
  
  const foodCostAmount = getInput('food_amount','errormsg1');
  const rentCostAmount = getInput('rent_amount','errormsg2');
  const clothCostAmount = getInput('clothes_amount','errormsg3');
 /*  if(incomeAmount.value== '' || incomeAmount==null){
    messages.push('input required')
  } */

  // expense total 
  const expanseTotal = foodCostAmount + rentCostAmount + clothCostAmount;

  //get total expanses
  const expanseAmount = getAmount('total-expense', expanseTotal);
 
  

  //calculate balnce
  const balanceTotal = incomeAmount - expanseTotal;
  const failmsg=document.getElementById('over-exapence')
  if(balanceTotal<expanseTotal){
    failmsg.style.display='block';


  }
  else{
    const  blance = getAmount('total-balance', balanceTotal);

  } 

  

  // savings  claculation
  document.getElementById('save-btn').addEventListener('click', function (){
      const saveInput = getInput('save_amount');
     
      const savingAmount = incomeAmount * (saveInput  / 100);
  

      const savingTotal = getAmount('saving-Amount', savingAmount);


      const remainigBalance = balanceTotal - savingTotal;
      const remainingTotal = getAmount('remaining-Amount', remainigBalance);
  })


})