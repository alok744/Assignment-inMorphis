function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const num = parseInt(prompt('Enter a non-negative integer: '));
if (isNaN(num) || num < 0) {
    console.log('Please enter a valid non-negative integer.');
} else {
    console.log(`Factorial of ${num} is ${factorial(num)}`);
}
