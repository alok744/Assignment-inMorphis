function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = (i === j) ? 1 : 0;
      }
    }
    return matrix;
  }
  
  console.log(identityMatrix(3));  // Expected Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  