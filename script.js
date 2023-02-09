let points = 0;
let history = [];

// Login function
function login() {
  // Validate the user's credentials
  // ...
  
  // Show the main page
  document.getElementById("login-form").style.display = "none";
  document.getElementById("main-page").style.display = "block";
  
  // Update the point total
  document.getElementById("total-points").innerHTML = points;
}

// Assign Points function
function assignPoints() {
  // Get the points and note from the form
  let newPoints = parseInt(document.getElementById("points").value);
  let newNote = document.getElementById("note").value;
  
  // Update the point total
  points += newPoints;
  document.getElementById("total-points
