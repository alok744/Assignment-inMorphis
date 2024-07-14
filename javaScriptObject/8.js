function startClock() {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }
  
  // Start the clock
  startClock();
  