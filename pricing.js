const priceinput = document.querySelector('[name=price]');

const quantityinput = document.querySelector('[name=quantity]');

const cost = document.querySelector('.total');



function calculate(){
  
  const price = priceinput.value;
  const quantity = quantityinput.value;
  const bill = price*quantity;
  cost.innerText='$'+bill.toFixed(2);
   
  console.log(bill);

}

priceinput.addEventListener('input',calculate);

quantityinput.addEventListener('input',calculate);