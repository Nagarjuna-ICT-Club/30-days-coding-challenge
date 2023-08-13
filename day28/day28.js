function handleOne() { console.log("Granny Clicked!"); }
function handleTwo() { console.log("Parent Clicked!"); }
function handleThree() { console.log("Child Clicked!"); }

let granny = document.querySelector(".granny");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// Event Capturing
granny.addEventListener("click", handleOne, true);
parent.addEventListener("click", handleTwo, true);
child.addEventListener("click", handleThree, true);