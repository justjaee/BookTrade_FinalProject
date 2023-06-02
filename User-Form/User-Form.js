// LOGIN FUNCTION IS EMPTY  !!!!

// Below only for the Student Information



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
  document.getElementById('email').value = '';
  document.getElementById('studentID').value = '';
  document.getElementById('school').value = '';
  document.getElementById('major').value = '';
});