function isHappyNumber(num) {
    let seen = new Set();
    
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = String(num).split('').reduce((sum, digit) => sum + digit * digit, 0);
    }
    
    return num === 1;
}

function findFirstNHappyNumbers(n) {
    let count = 0;
    let number = 1;
    let happyNumbers = [];
    
    while (count < n) {
        if (isHappyNumber(number)) {
            happyNumbers.push(number);
            count++;
        }
        number++;
    }
    
    return happyNumbers;
}

const first5HappyNumbers = findFirstNHappyNumbers(5);
console.log("First 5 happy numbers:", first5HappyNumbers.join(', '));
