// Destructuring values from array and objects. 

// Traditonal Way
let numbers = [2, 3, 4];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
// Destructuring Array in modern way
let [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

// Traditonal Way
let car = {model: "Supra", color: "Golden", fuel: "Premium"}
let x = car.model;
let y = car.color;
let z = car.fuel;
// Destructuring Object in modern Way
let {model: prop1, color: prop2, fuel: prop3} = car;
console.log(prop1);
console.log(prop2);
console.log(prop3);