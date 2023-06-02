// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts the user for what the length of the password should be, accepted input being a number in the range 8-128
function getPasswordLength(){
    var passwordLength = parseInt(prompt("Length of password:"));
    
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(prompt("Please enter a number within the range 8-128 for the length of the password:"));
    }

    return passwordLength;
}

// Generates a random password that includes special characters
function generatePassword(){
    var passwordLength = getPasswordLength();    

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
