var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(arr) {
  var frequency = {};
  var maxCount = 0;
  var mostFrequentItem = null;

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (frequency[item] === undefined) {
      frequency[item] = 1;
    } else {
      frequency[item]++;
    }
    
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem + ' (' + maxCount + ' times)';
}

console.log(mostFrequent(arr1));  // Output: "a (5 times)"
