const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        
        const multiplication = num1 * num2;
        const division = num1 / num2;
        
        console.log(`Multiplication: ${multiplication}`);
        console.log(`Division: ${division}`);
        
        rl.close();
    });
});
