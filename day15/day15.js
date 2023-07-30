// Simple Calculator using eval() method
function calculate(expression) {
	try {
		return eval(expression);
	}
	catch (error) {
		return "Invalid expression";
	}
}
// Compute any kind of arithmetic operations
const input = "2 + (5 - 3) * 3";
const result = calculate(input);
// Output: 8
console.log(result);