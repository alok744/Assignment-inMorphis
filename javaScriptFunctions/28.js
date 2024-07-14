function executeFunction(func) {
    console.log("Function Name: " + func.name);
    func();
  }
  
  function sayHello() {
    console.log("Hello, World!");
  }
  
  executeFunction(sayHello); // Expected Output: "Hello, World!"
  