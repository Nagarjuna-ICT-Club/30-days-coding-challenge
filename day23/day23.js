let success = true;
// Function to fetch data asynchronously using a Promise
const fetchData = () => {
	return new Promise((resolve, reject) => {
		// Simulate an async operation and check if operation is successful
		if (success) {
			resolve('Data fetched successfully');
		} else {
			reject('Error fetching data');
		}
	});
};

// Output: Data fetched successfully
fetchData()
	// Showing the resolved data if successful
	.then(data => console.log(data)) 
	// Showing the rejected error if error
	.catch(error => console.log(error)); 
