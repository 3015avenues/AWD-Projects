
const calcu = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calcu;
  
    if (waitingForSecondOperand === true) {
      calcu.displayValue = digit;
      calcu.waitingForSecondOperand = false;
    } else {
      calcu.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  

  function inputDecimal(dot) {
    if (calcu.waitingForSecondOperand === true) {
        calcu.displayValue = "0."
      calcu.waitingForSecondOperand = false;
      return
    }
  
    if (!calcu.displayValue.includes(dot)) {
      calcu.displayValue += dot;
    }
  }
  

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calcu
    const inputValue = parseFloat(displayValue);
    
    if (operator && calcu.waitingForSecondOperand)  {
      calcu.operator = nextOperator;
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calcu.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calcu.displayValue = `${parseFloat(result.toFixed(7))}`;
      calcu.firstOperand = result;
    }
  
    calcu.waitingForSecondOperand = true;
    calcu.operator = nextOperator;
  }
  

  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  

  function resetCalculator() {
    calcu.displayValue = '0';
    calcu.firstOperand = null;
    calcu.waitingForSecondOperand = false;
    calcu.operator = null;
  }
  

  function updateDisplay() {
    const display = document.querySelector('.calcu-sc');
    display.value = calcu.displayValue;
  }
  
  updateDisplay();
  

  const keys = document.querySelector('.calcu-k');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'all-clear':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }
  
    updateDisplay();
  });