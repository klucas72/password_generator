// Assigning variables
var generateBtn = document.querySelector("#generate");
var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['1','2','3','4','5','6','7','8','9'];
var symbol = ['!','@','#','$','%','^','&','*','(',')','+','=','<','>','?','/'];
var pwordlength;
var pickedNumber;
var pickedLowerCase;
var pickedUpperCase;
var pickedSymbol;

//get character preferences from users
function getPreferences(){
  // console.log("prefences function");
  //get password length from user
  var pwordlength = prompt("how many characters desired?");
  //check to see if user put in anything other than a number
  if(isNaN(pwordlength) === true){
    alert("please enter a number");
    return;
  }
  //password length is valid
  if (pwordlength < 8 || pwordlength >128){
    alert("password must be between 8 and 128 characters");
    return;
  }
  //choose upper case
  var pickedUpperCase = confirm("do you want upper case letters?");
  //choose lower case
  var pickedLowerCase = confirm("do you want lower case letters?");
  //choose numbers
  var pickedNumber = confirm("do you want numbers?");
  //choose symbol
  var pickedSymbol = confirm("do you want symbols?");

  //store user preferences in an object
  var preferences = {
     pwordlength: pwordlength,
     pickedUpperCase: pickedUpperCase,
     pickedLowerCase: pickedLowerCase,
     pickedNumber: pickedNumber,
     pickedSymbol: pickedSymbol
  };
  return preferences;
}

//define a function to generate a password
function generatePassword(){
  //get user preferences for password criteria
  var characterPreferences = getPreferences();
   console.log(characterPreferences);
  //create an empty array to store possible PW characters based on user preferences
   const possibleChar = [];
   //push upper case characters variable into new `possibleChar` variable
   if(characterPreferences.pickedUpperCase === true) {
     possibleChar.push(...uCase);
   };
   if(characterPreferences.pickedLowerCase === true) {
     possibleChar.push(...lCase);
   };
   if(characterPreferences.pickedNumber === true) {
     possibleChar.push(...number);
   };
   if(characterPreferences.pickedSymbol === true){
     possibleChar.push(...symbol);
  };
  //create an empty array to store the password as it is being generated
    password = " ";

  for (var i = 0; i<parseInt(characterPreferences.pwordlength); i++){
    // console.log(parseInt(characterPreferences.pwordlength))
    var randomChar = Math.floor(Math.random() * possibleChar.length);
    password = password.concat(possibleChar[randomChar]);
  } 
  return password;
};
// var passstring = password.join('')
  
// Write password to the #password input
function writePassword() {
  var passsword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
