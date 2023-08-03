// Object to JSON string conversion
let myObject1 = 
{
	clubName: "NCIT ICT Club",
	field: "IT",
	college: "NCIT"
}

// 'stringify()' converts 'Object' into JSON string
let myJSON1 = JSON.stringify(myObject1);			
console.log(myJSON1);

// "parse()" converts JSON string into 'Object' 
let myObject2 = JSON.parse(myJSON1);
console.log(myObject2);