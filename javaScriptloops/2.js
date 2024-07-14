const num1 = 3;
const num2 = -7;
const num3 = 2;

let product = num1 * num2 * num3;
let sign;

if (product > 0) {
    sign = '+';
} else if (product < 0) {
    sign = '-';
} else {
    sign = '0';
}

alert(`The sign is ${sign}`);
