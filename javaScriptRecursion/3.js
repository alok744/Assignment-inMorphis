function range(x, y) {
    let result = [];
    for (let i = x + 1; i < y; i++) {
        result.push(i);
    }
    return result;
}

const x = parseInt(prompt('Enter the start of the range (x): '));
const y = parseInt(prompt('Enter the end of the range (y): '));

if (isNaN(x) || isNaN(y) || x >= y) {
    console.log('Please enter valid integers where x < y.');
} else {
    console.log(`The integers in the range (${x}, ${y}) are: ${range(x, y).join(', ')}`);
}
