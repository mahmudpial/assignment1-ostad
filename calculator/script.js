  document.getElementById("btn").addEventListener('click',function(){ 
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const operator = document.getElementById("operator").value;
    const result = document.getElementById("result");
    if (operator == 1 ) {
      const add = num1 + num2;  
      result.innerText = add;
    } else if (operator == 2 ) {
     const subtraction = num1 - num2;  
      result.innerText = subtraction;
    } else if (operator == 3 ) {
      const multiplication = num1 * num2;  
      result.innerText = multiplication;
    } else if (operator == 4) {
     const division = num1 / num2;  
      result.innerText = division;
    } else {
      result.innerText = 'Inputs are not defined . . . . . !';
      
    }
    
});

