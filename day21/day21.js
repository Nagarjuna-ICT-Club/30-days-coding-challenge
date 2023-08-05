// Function Currying in JavaScript

// Function currying is technique used when a function returns a function.
// We can pre-write arguments for future returning functions by using '()()()...'
// Syntax: curriedFunction(arg1)(arg2)(arg3)...;

function first(a)
{
	function second(b)
	{
		function third(c)
		{
			console.log(`Sum is ${a + b + c}`);
		}
		return third;
	}
	// Return 'second()' function without executing it
	return second;					
}
/*
	first(2)(3)(4) = second(3)(4)
	second(3)(4) = third(4)
	third(4) = output				
	'third()' gets '4', then parent data '2' and '3' are accessed 
	from 'Closure'
*/
first(2)(3)(4);			// Output: Sum is 9

