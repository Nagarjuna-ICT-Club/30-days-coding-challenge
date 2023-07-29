 //Swap two numbers without using temporary variable
 let x = 10, y = 5; 
 // x now becomes 15
 x = x + y;
 // y becomes 10
 y = x - y;
 // x becomes 5
 x = x - y;
 // Output: 5
 console.log(x);
 // Output: 10
 console.log(y);