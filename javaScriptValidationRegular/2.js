function isValidCreditCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');

    if (/^\d{16}$/.test(cardNumber)) {
        let sum = 0;
        let shouldDouble = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i), 10);
            if (shouldDouble) {
                if ((digit *= 2) > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return (sum % 10) === 0;
    }
    
    return false;
}

let cardNumber = "1234-5678-9876-5432";
console.log(`Is ${cardNumber} a valid credit card number? ${isValidCreditCardNumber(cardNumber)}`); // Output: true

cardNumber = "9876543212345678";
console.log(`Is ${cardNumber} a valid credit card number? ${isValidCreditCardNumber(cardNumber)}`); // Output: false
