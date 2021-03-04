// Assigning variables
var generateBtn = document.querySelector("#generate");
var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['1','2','3','4','5','6','7','8','9'];
var symbol = ['!','@','#','$','%','^','&','*','(',')','+','=','<','>','?','/'];
var options;
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
  // console.log(pwordlength);
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

//check to see if user didn't choose perferences

if(!pwordlength && !pickedUpperCase && !pickedLowerCase && !pickedNumber && !pickedSymbol){
  options = alert("you must choose at least one criteria");
}

//4 options chosen
else if(pickedUpperCase && pickedLowerCase && pickedNumber && pickedSymbol){
  options = uCase.concat(lCase, number, symbol);
}
//3 options chosen
else if(pickedUpperCase && pickedLowerCase && pickedNumber){
  options = uCase.concat(lCase, number);
}
else if(pickedUpperCase && pickedNumber && pickedSymbol){
  options = uCase.concat(number, symbol);
}
else if(pickedLowerCase && pickedNumber && pickedSymbol){
  options = lcase.concat(number, symbol);
}
else if(pickedUpperCase && pickedLowerCase && pickedSymbol){
  options = uCase.concat(lcase, symbol);
}
//2 options chosen
else if(pickedUpperCase && pickedLowerCase){
  options = uCase.concat(lcase)
}
else if(pickedUpperCase && pickedNumber){
  options = uCase.concat(number);
}
else if(pickedUpperCase && pickedSymbol){
  options = uCase.concat(symbol);
}
else if(pickedLowerCase && pickedSymbol){
  options = lcase.concat(symbol);
}
else if(pickedLowerCase && pickedNumber){
  options = lcase.concat(number);
}
else if(pickedSymbol && pickedNumber){
  options = symbol.concat(number);
} 
//1 option chosen
else if(pickedSymbol){
  options = symbol;
}
else if(pickedUpperCase){
  options = uCase;
}
else if(pickedLowerCase){
  options = lcase;
}
else if(pickedNumber){
  options = number;
}


//define a function to generate a password

function generatePassword(){
  console.log("inside new function");
  //get user preferences for password criteria
  var characterPreferences = getPreferences();
  console.log(characterPreferences);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
