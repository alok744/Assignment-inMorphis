// Method to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Method to calculate the perimeter (circumference) of a circle
  function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Example usage
  const radius = prompt("Enter the radius of the circle:");
  const area = calculateArea(parseFloat(radius));
  const perimeter = calculatePerimeter(parseFloat(radius));
  
  console.log(`Area of the circle: ${area.toFixed(2)}`);
  console.log(`Perimeter of the circle: ${perimeter.toFixed(2)}`);
  