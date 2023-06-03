// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts the user for what the length of the password should be and returns it
// accepted input being a number in the range 8-128
function getPasswordLength(){
    var passwordLength = parseInt(prompt("Length of password:"));
    
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(prompt("Please enter a number within the range 8-128 for the length of the password:"));
    }

    return passwordLength;
}

// Prompts the user for the character types that should be included in the password and returns a string of selected character types
// accepted input being at least one type
function getPasswordCharacters() {
    var charTypes = [false, false, false, false];
    var passwordCharacters = "";

    while (!charTypes[0] && !charTypes[1] && !charTypes[2] && !charTypes[3]){
        charTypes[0] = confirm("Should the password include lowercase characters?");
        charTypes[1] = confirm("Should the password include uppercase characters?");
        charTypes[2] = confirm("Should the password include numeric characters?");
        charTypes[3] = confirm("Should the password include special characters?");

        if (charTypes[0]){
            passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
        }
        if (charTypes[1]){
            passwordCharacters += "ABCDEFGHIJKLMOPQRSTUVWXYZ";
        }
        if (charTypes[2]){
            passwordCharacters += "0123456789";
        }
        if (charTypes[3]){
            passwordCharacters += " !\"#$%&'()*+,-./:;<=>?@[\\^_`{|}~";
        }

        if (!charTypes[0] && !charTypes[1] && !charTypes[2] && !charTypes[3]){
            confirm("Please select at least one type of characters for the password.");
        }
    }

    return passwordCharacters;
}

// Generates a random password that includes special characters
function generatePassword(){
    var password = "";
    var passwordLength = getPasswordLength();
    var passwordCharacters = getPasswordCharacters();
    var randInt;

    for (let i = 0; i < passwordLength; i++){
        randInt = Math.floor(Math.random() * (passwordCharacters.length));
        password += passwordCharacters.substring(randInt, randInt + 1);
    }

    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
