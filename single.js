var numbers;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


numbers = [0, 0, 0, 0, 0];
let element_total = document.getElementById('total');
element_total.innerText = [].reduce((a,b) => a+b, 0);


document.getElementById('add_number').addEventListener('click', (event) => {
  let element_number = document.getElementById('number');
  numbers.push(convertToNumber(document.getElementById('number').value));
  numbers.shift();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = numbers;

});