function nthLargest(arr, n) {
    const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
    return uniqueSorted[n - 1]; // n-1 because array indices are zero-based
  }
  
  // Test data
  console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // Output: 89
  