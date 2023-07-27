function check(value) {
	if (value) console.log(`truthy.`);
	else console.log(`falsy.`);
}

check(false);      			// Output: falsy.
check(0);         			 // Output: falsy.
check("");         			// Output: falsy.
check(null);       			// Output: falsy.
check(undefined);  			// Output: falsy.
check(NaN);        			// Output: falsy.

check(true);					// Output: truthy
check("Hello");					// Output: truthy
check(1234);					// Output: truthy
check([]);						// Output: truthy
check({});						// Output: truthy
check(-1);						// Output: truthy
check("0");						// Output: truthy