// variables for password criteria

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '!@#$%^&*()_+=-';

passwordLower = lowercase.split('');
passwordUpper = uppercase.split('');
passwordNumeric = numeric.split('');
passwordSpecial = special.split('');

// function to generate checklist for password

function createPassword() {

  var passLower = confirm("Would you like any lowercase letters?");
  var passUpper = confirm("Would you like any uppercase letters?");
  var passNumeric = confirm("Would you like any numbers?");
  var passSpecial = confirm("Would you like any special characters?");
  var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  

  if (passLength < 8 || passLength > 128) {
    alert("Your password length does not match the required amount, please try again");
    var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  } 

  else if (passLower === false && passUpper === false && passNumeric === false && passSpecial === false) {
    alert("Please select from the password criteria");
    var passLower = confirm("Would you like any lowercase letters?");
    var passUpper = confirm("Would you like any uppercase letters?");
    var passNumeric = confirm("Would you like any numbers?");
    var passSpecial = confirm("Would you like any special characters?");
    var passLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  }
  
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
