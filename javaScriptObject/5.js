class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const volume = Math.PI * this.radius * this.radius * this.height;
      return volume.toFixed(4);
    }
  }
  
  // Example usage:
  const cylinder = new Cylinder(5, 10);
  console.log(`Cylinder volume: ${cylinder.getVolume()}`);
  