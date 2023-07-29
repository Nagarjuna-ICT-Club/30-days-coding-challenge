// Spread Operator with Arrays
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7, 8]; 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(moreNumbers); 

// Rest Operator in Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
const result = sum(1, 2, 3, 4, 5);
// Output: 15 (Sum of all numbers)
console.log(result);