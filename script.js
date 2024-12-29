const display = document.querySelector('.display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.buttons button').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.textContent;
  
      if (!isNaN(value) || value === '.') {
        handleNumber(value);
      } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        handleOperator(value);
      } else if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearCalculator();
      }
    });
  });
  
  function handleNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
  }
  
  function handleOperator(selectedOperator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
      calculate();
    }
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
  }
  
  function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
    }
  
    updateDisplay(result);
    previousInput = result.toString();
    currentInput = '';
    operator = '';
  }
  
  function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
  }
  
  function updateDisplay(value) {
    display.textContent = value;
  }
  
 
  