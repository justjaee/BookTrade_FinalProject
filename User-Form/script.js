const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting

  // Retrieve login values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;