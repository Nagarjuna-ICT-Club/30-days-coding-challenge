// Sorting in Alphabetic (Default) Order
let group = ["Strawberry", "Watermelon", "Mango", "Pineapple"];
let numbers = [20, 100, 400, 50, 1];
group.sort();
numbers.sort();

// ✅ Output: [ 'Mango', 'Pineapple', 'Strawberry', 'Watermelon' ]
console.log(group);
// ❌ Alphabetically Ordered Output: [ 1, 100, 20, 400, 50 ]
console.log(numbers);

// Sorting in Numerical order
function numerical(a, b) { 				// Comparison Function
	return (a - b);
}		
numbers.sort(numerical);
// ✅ Numerically Ordered Output: [ 1, 20, 50, 100, 400 ]
console.log(numbers);