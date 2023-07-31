// Auto updating timer
function displayTime()
{
	let seconds = 10;								// Set timer duration 
	let start = Date.now();							// Set initial time
	let end = new Date(start + seconds*1000);		// Set end time

	console.log("seconds left: ", seconds);
	// Subtract end time with current time to get the number of seconds left
	let stopWatch = setInterval(() =>				
	{
		seconds = Math.round((end - Date.now()) / 1000);
		console.log("seconds left: ", Math.abs(seconds));
		// End the interval when 0 seconds left
		if(seconds == 0) clearInterval(stopWatch);
	}, 1000);
}
displayTime();