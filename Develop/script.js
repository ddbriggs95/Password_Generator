//Define variables 
var characterLength = 8;
var choiceArray = [];
var specialCharArray = [];
var uppCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L'];
var lowCaseArray = [];
var numberArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generatePassword function to activate button
function generatePassword(){
  //first code to prompt user to input password length
  var passLength = prompt("Enter number of characters between 8 and 128 for password length");
  console.log("passLength = ", passLength);
  passLength = parseInt(passLength);
  var lower = false;
  var upper = false;
  var special = false;
  var num = false;
  if(passLength >= 8 && passLength <= 128) {
    lower = confirm("press OK to include lowercase characters in password");
  }
  else {
    alert("The password must be number between 8-128. Please re write.");
  }

  return "Generated Password will go here"; //return variable for created password here

}

function getPrompts(){

}