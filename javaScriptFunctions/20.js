function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.random() * characters.length | 0;
      result += characters[randomIndex];
    }
    return result;
  }
  
  console.log(generateRandomId(10));  // Example Output: 'aBc123D456'
  