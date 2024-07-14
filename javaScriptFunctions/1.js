function reverseNumber(num) {
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);
    return reversedNum;
  }
  
  let x = 32243;
  console.log(reverseNumber(x));
  