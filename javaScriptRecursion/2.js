function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const a = parseInt(prompt('Enter the first positive number: '));
const b = parseInt(prompt('Enter the second positive number: '));

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log('Please enter valid positive numbers.');
} else {
    console.log(`The GCD of ${a} and ${b} is ${gcd(a, b)}`);
}
