function handleOne() { console.log("Granny Clicked!"); }
function handleTwo() { console.log("Parent Clicked!"); }
function handleThree() { console.log("Child Clicked!"); }

let granny = document.querySelector(".granny");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// Event Bubbling
granny.addEventListener("click", handleOne, false);
parent.addEventListener("click", handleTwo, false);
child.addEventListener("click", handleThree, false);