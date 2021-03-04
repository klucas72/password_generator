// Assigning variables
var generateBtn = document.querySelector("#generate");
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*(<>?\/)-+;=";
var pwordlength;
var pickedUpperCase;
var pickedLowerCase;
var pickedNumber;
var pickedSymbol;

if (pwordlength < 8 || pwordlength >128){
    alert("password must be between 8 and 128 characters");
}else{alert ("Please answer the following questions for passwword criteria.")}

if (pwordlength >= 8 && pwordlength <= 128){
     alert("Please choose from the following:")
}

function UpperCaseUsed(){
     pickedUpperCase = prompt("Do you want Upper Case Characters? (yes/no)");

     if(pickedUpperCase === null || pickedUpperCase === ""){
       alert("please answer yes or no");
       UpperCaseUsed();
      }
     else if(pickedUpperCase === "yes" || pickedUpperCase === "y"){
      pickedUpperCase = true;
      return pickedUpperCase;
     }
     else if(pickedUpperCase === "no" || pickedUpperCase === "n"){
       pickedUpperCase = false;
       return pickedUpperCase;
     }
     else{ 
       alert("Yes or No is required.");
       UpperCaseUsed();
     }
  return pickedUpperCase;
}

 function LowerCaseUsed(){
    pickedLowerCase = prompt("Do you want lower Case Characters? (yes/no)");

    if(pickedLowerCase === null || pickedLowerCase === ""){
     alert("Please pick yes or no.");
      LowerCaseUsed();
    }
    else if(pickedLowerCase === "yes" || pickedLowerCase === "y"){
      pickedLowerCase = true;
      return pickedLowerCase;
    }
    else if(pickedLowerCase === "no" || pickedLowerCase === "n"){
      pickedLowerCase = false;
      return pickedLowerCase;
    }
    else{
      alert("yes or no is required.");
      LowerCaseUsed();
    }
  return pickedLowerCase;
}

function numberUsed(){
  pickedNumber = prompt("Do you want numbers? (yes/no)");

  if (pickedNumber === null || pickedNumber === ""){
    alert("Please pick yes or no");
    numberUsed();
  }
  else if(pickedNumber === "yes" || pickedNumber === "y"){
    pickedNumber = true;
    return pickedNumber;
  }
  else if(pickedNumber === "no" || pickedNumber === "n"){
    pickedNumber = false;
    return pickedNumber;
  }
  else{
    alert("yes or no is required.");
    numberUsed();
  }
}

function symbolUsed(){
  pickedSymbol = prompt("Do you want symbols? (yes/no)");

  if(pickedSymbol === null || pickedSymbol === ""){
    alert("please answer yes or no");
    symbolUsed();
  }
  else if(pickedSymbol === "yes" || pickedSymbol === "y"){
    pickedSymbol = true;
    return pickedSymbol;
  }
  else if(pickedSymbol === "no" || pickedSymbol === "n"){
    pickedSymbol = false;
    return pickedSymbol;
  }
  else{
    alert("yes or no is required.");
    symbolUsed();
  }
  return pickedSymbol;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
