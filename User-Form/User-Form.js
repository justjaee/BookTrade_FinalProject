document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Retrieve the values entered in the form
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var studentID = document.getElementById('studentID').value;
  var school = document.getElementById('school').value;
  var major = document.getElementById('major').value;

  // Do something with the retrieved values (submit the form data to a server)
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Email:', email);
  console.log('Student ID:', studentID);
  console.log('School:', school);
  console.log('Major:', major);

  // Clear the form inputs
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('studentID').value = '';
  document.getElementById('school').value = '';
  document.getElementById('major').value = '';

  // Remove the email field from the DOM
  var emailInput = document.getElementById('email');
  emailInput.style.display = 'none';

  // Reset the form to clear the email field value and show the email field again
  document.getElementById('studentForm').reset();
  emailInput.style.display = 'block'; // Show the email field again after resetting the form

  // Show pop-up notification
  alert("✅ Congratulations! You have been registered.");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Retrieve the values entered in the form
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate the email and password (you can add your own validation logic here)

  // Clear the username and password fields
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';

  // Redirect to the mainpage if the email and password are valid
  if (email && password) {
    window.location.href = ''
  }
});