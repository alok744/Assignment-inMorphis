const num1 = parseInt(prompt('Enter the first integer:'));
const num2 = parseInt(prompt('Enter the second integer:'));

if (!isNaN(num1) && !isNaN(num2)) {
    const larger = (num1 > num2) ? num1 : num2;
    console.log(`The larger integer is: ${larger}`);
} else {
    console.log('Please enter valid integers.');
}
