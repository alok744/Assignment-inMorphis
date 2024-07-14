function computeGCD(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

const number1 = 24;
const number2 = 36;

const gcd = computeGCD(number1, number2);
console.log(`The GCD of ${number1} and ${number2} is: ${gcd}`);
