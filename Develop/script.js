//Define variables for characters
var characterLength = 8;
var choiceArray = [];
var specialCharArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '>', '=', '?', '/', "@", '{', '}', '[', ']', '~', '`' ];
var uppCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowCaseArray = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
    if (lower ){
      choiceArray = choiceArray.concat(lowCaseArray);
      alert("Your password will include lowercase characters")
    }
    console.log("choicearray = ", choiceArray); //want to make sure I can see what array is 
    if (upper ){
      choiceArray = choiceArray.concat(uppCaseArray);
      alert("Your password will include lowercase characters")
    }
    console.log("choicearray = ", choiceArray);
  }
  else {
    alert("The password must be number between 8-128. Please re write.");
  }

  return "Generated Password will go here"; //return variable for created password here

}

function getPrompts(){

}