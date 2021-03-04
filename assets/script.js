// Assigning variables
var generateBtn = document.querySelector("#generate");
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*(<>?\/)-+;=";
var pwordlength;

if (pwordlength < 8 || pwordlength >128){
    alert("password must be between 8 and 128 characters")
}

if (pwordlength >= 8 && pwordlength <= 128){
     alert("Please choose from the following:")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
