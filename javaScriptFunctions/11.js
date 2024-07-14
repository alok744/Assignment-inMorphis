function secondLowestAndGreatest(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr[uniqueArr.length] = arr[i];
      }
    }
    uniqueArr.sort();
    for (let i = 0; i < uniqueArr.length; i++) {
      uniqueArr[i] = Number(uniqueArr[i]);
    }
    uniqueArr.sort((a, b) => a - b);
    return [uniqueArr[1], uniqueArr[uniqueArr.length - 2]];
  }
  
  console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]));  // Expected Output: [2, 4]
  