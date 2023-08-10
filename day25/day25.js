// Storing data pair usinf Local storage 
localStorage.setItem("name", "NICT Club");
localStorage.setItem("message", "Greetings, everyone!");

// Access local storage data in two ways
console.log(localStorage["name"]);
console.log(localStorage.message);

// Delete specific data from Local storage 
localStorage.removeItem("name");
// Delete all data from Local storage 
localStorage.clear();
