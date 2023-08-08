
function fetchData() {
	return new Promise(resolve => {
		// Simulating a delay of 2 seconds 
		setTimeout(() => {
			resolve('Data fetched successfully');
		}, 2000);
	});
}
// An asynchronous function that uses async-await 
async function fetchDataAsync() {
	// Using await to pause the function execution until 
	// The Promise returned by fetchData is resolved.
	const data = await fetchData();
	console.log(data);
}
fetchDataAsync();


