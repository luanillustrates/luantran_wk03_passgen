// Assignment code here

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '!@#$%^&*()_+=-';
var passwordLength = 0;

passwordLower = lowercase.split('');
passwordUpper = uppercase.split('');
passwordNumeric = numeric.split('');
passwordSpecial = special.split('');

// passwordCriteria = [passwordLower, passwordUpper, passwordNumeric, passwordSpecial];



generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwordLower = confirm("Would you like any lowercase letters?");
  passwordUpper = confirm("Would you like any uppercase letters?");
  passwordNumeric = confirm("Would you like any numbers?");
  passwordSpecial = confirm("Would you like any special characters?");

  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
