function parent()
{
	let parentData = 10;
	console.log("Parent Data is: ", parentData);

	function child()
	{
		console.log("I got the data: ", parentData);
	}
	console.log("Accessing Parent Data inside Parent Function");
	child();
	return child;		// Returns (child + parent's data) as 'Closure'
}


let outerChild = parent();			// Parent returns 'child' function 

console.log("Accessing Parent Data outside Parent Function");
outerChild();			// Using 'child' function outside 'parent' function