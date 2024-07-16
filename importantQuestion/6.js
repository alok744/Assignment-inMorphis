function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const yearsRemaining = maxAge - age;
    const totalAmount = Math.round(yearsRemaining * amountPerDay * 365.25);
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

calculateSupply(25, 2.5);
calculateSupply(40, 3);
calculateSupply(60, 1.5);
calculateSupply(30, 2.35);
