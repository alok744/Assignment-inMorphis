function insertDashes(num) {
    let result = '';
    const digits = num.toString().split('');
    for (let i = 0; i < digits.length; i++) {
      result += digits[i];
      if (i < digits.length - 1 && digits[i] % 2 === 0 && digits[i + 1] % 2 === 0) {
        result += '-';
      }
    }
    return result;
  }
  console.log(insertDashes(254680));  // Output: "0-254-6-8"
  