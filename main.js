function updateTimeAndDay() {
  const currentTimeElement = document.getElementById("current-time");
  const currentDayElement = document.getElementById("current-day");

  // Create a new Date object and add one hour to it
  const now = new Date();
  now.setHours(now.getHours());

  // Get the options for displaying the weekday in full
  const options = { weekday: "long" };

  // Update the time and day elements
  currentTimeElement.textContent = now.toTimeString().split(" ")[0]; // Get time in HH:MM:SS format
  currentDayElement.textContent = now.toLocaleDateString("en-US", options); // Get full weekday name
}

// Call the function once to set the initial values
updateTimeAndDay();

// Set an interval to update the time and day every second
setInterval(updateTimeAndDay, 1000);
