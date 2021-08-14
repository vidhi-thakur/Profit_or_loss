const purchasePrice = document.querySelector('#purchasePrice');
const quantityOfStocks = document.querySelector('#quantityOfStocks');
const currentPrice = document.querySelector('#currentPrice');
const submitButton = document.querySelector('#submitButton');
const result = document.querySelector('#result');
const body = document.querySelector('.body');

function checkProfitOrLoss(initialPrice, quantity, currentPrice) {
  if (initialPrice - currentPrice < 0) {
    let profit = (currentPrice - initialPrice) * quantity;
    let profitPercentage = (profit / initialPrice) * 100;
    showOutput(`Your total profit is ₹${profit}. Your profit percentage is ${profitPercentage}%`);
    body.classList.add('happy')
    body.classList.remove('sad')
    body.classList.remove('noPainNoGain')
    
  } else if (initialPrice - currentPrice > 0) {
    let loss = (initialPrice - currentPrice) * quantity;
    let lossPercentage = (loss / initialPrice) * 100;
    showOutput(`Your total loss is ₹${loss}. Your loss percentage is ${lossPercentage}%`)
    body.classList.remove('happy')
    body.classList.add('sad')
    body.classList.remove('noPainNoGain')
  } else if(initialPrice === currentPrice) {
    showOutput("No pain no gain, no gain no pain!")
    body.classList.add('noPainNoGain')
    body.classList.remove('happy')
    body.classList.remove('sad')
  } else{
    showOutput("Something went wrong!")
  }
}

function showOutput(msg) {
  result.innerText = msg;
}

function onSubmitHandler(e) {
  e.preventDefault();
  pp = purchasePrice.value;
  qty = quantityOfStocks.value;
  cp = currentPrice.value;
  
  if(cp > 0 && qty > 0 && pp > 0) {
    checkProfitOrLoss(pp, qty, cp)
  } else {
    showOutput("Enter value greater than 0.");
    result.style.color = "red";
  }
} 

submitButton.addEventListener("click", onSubmitHandler)