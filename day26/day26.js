// Storing Data using Session Storage
sessionStorage.setItem("user", "Ram Nepali");
sessionStorage.setItem("age", "20");			
// Output: Ram Nepali
console.log( sessionStorage["user"] );
// Output: 20
console.log( sessionStorage.age );

let data = sessionStorage.getItem("user");
// Output: Ram Nepali
console.log(data);
// Removing a Data
sessionStorage.removeItem("age");
// Clearing all data
sessionStorage.clear();


