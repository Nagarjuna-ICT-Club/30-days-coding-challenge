let group1 = ["Ram", "Shyam", "Hari"];
let group2 = ["Ram", "Shyam", "Hari"];
let group3 = ["Ram", "Shyam", "Hari"];

// Add items starting from index 1
group1.splice(1, 0, "Sita", "Gita");			
// Output: [ 'Ram', 'Sita', 'Gita', 'Shyam', 'Hari' ]
console.log(group1);

// Delete 2 items starting from index 1
let deletedItems = group2.splice(1, 2);				
// Output: [ 'Ram' ]
console.log(group2);
// Output: [ 'Shyam', 'Hari' ]
console.log(deletedItems);

// Delete 1 item starting from index 1 and also add 2 items	
deletedItems = group3.splice(1, 1, "Sita", "Gita");	
// Output: [ 'Ram', 'Sita', 'Gita', 'Hari' ]
console.log(group3);
// Output: [ 'Shyam' ]
console.log(deletedItems);