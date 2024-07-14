function amountToCoins(amount, coins) {
    let result = [];
    for (let coin of coins) {
      while (amount >= coin) {
        result.push(coin);
        amount -= coin;
      }
    }
    return result;
  }
  
  console.log(amountToCoins(46, [25, 10, 5, 2, 1]));  // Expected Output: [25, 10, 10, 1]
  