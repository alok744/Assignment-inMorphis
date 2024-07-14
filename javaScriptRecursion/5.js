function power(base1, exp) {
    return exp === 0 ? 1 : base1 * power(base1, exp - 1);
}

const base1 = parseInt(prompt('Enter the base number:'));
const exp = parseInt(prompt('Enter the exponent:'));

if (isNaN(base1) || isNaN(exp)) {
    console.log('Please enter valid numbers.');
} else {
    console.log(`${base1}^${exp} = ${power(base1, exp)}`);
}
