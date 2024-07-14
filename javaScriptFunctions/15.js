function computePower(b, n) {
    return b ** n;
  }
  
  const base = prompt("Enter the base (b):");
  const exponent = prompt("Enter the exponent (n):");
  const result = computePower(Number(base), Number(exponent));
  console.log(result);
  