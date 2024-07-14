function alphabetOrder(str) {
    let arr = str.split('').sort();
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  
  console.log(alphabetOrder("webmaster"));  // Expected Output: 'abeemrstw'
  