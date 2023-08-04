/*
fetch() returns a 'Response' from 'Promise'.if 'resolve' 
Afer using 'await', it returns a 'Response' object from 'Promise' if 'resolve'
'Response' object has detail about the response like status, 
fetch() returns 'Error' object if 'reject' 
*/
async function myFunction() {
	try {
		// 1st get the 'Response'
		let response = await fetch("https://reqres.in/api/users?page=2");
		// Convert 'Response' into 'Object'(or Text or other)
		let myObject = await response.json();
		// Then extract data
		let dataArray = myObject.data;
		let data = dataArray[0];
		// Output: michael.lawson@reqres.in
		console.log(data.email);
	}
	catch (err) {
		console.log(err);
	}
}
myFunction();