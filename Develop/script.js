//Define variables for characters to be used in password generation if user chooses 'OK'
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
  passLength = parseInt(passLength); //parsing from string to number
  var lower = false;
  var upper = false;
  var special = false;
  var num = false;
  var index = 0;
  var randomChar = "";
  var password = "";
  choiceArray = [];  //clearing the array for each generation attempt by user

  if(passLength >= 8 && passLength <= 128) {

    //lowercase character prompt code to determine if lowercase characters will be added to choiceArray 
    lower = confirm("press OK to include lowercase characters in password");
    if (lower){
      choiceArray = choiceArray.concat(lowCaseArray);
      alert("Your password will include lowercase characters");
    }
    console.log("choicearray = ", choiceArray);

    //uppercase character prompt code to determine if uppercase characters will be added to choiceArray
    upper = confirm("press OK to include uppercase characters in password");
    if (upper){
      choiceArray = choiceArray.concat(uppCaseArray);
      alert("Your password will include uppercase characters");
    }
    console.log("choicearray = ", choiceArray);

    //special character prompt code to determine if special characters will be added to choiceArray
    special = confirm("press OK to include special characters in password");
    if (special){
      choiceArray = choiceArray.concat(specialCharArray);
      alert("Your password will include special characters")
    }
    console.log("choicearray = ", choiceArray);

    //number prompt code to determine if numbers will be added to choiceArray
    num = confirm("press OK to include numbers in password");
    if (num){
      choiceArray = choiceArray.concat(numberArray);
      alert("Your password will include numbers");
    }
    console.log("choicearray = ", choiceArray);
  

   //password generation code on last user prompt click
  if(lower && upper && special && num){
    for(var i = 0; i < passLength; i++){
      index = Math.floor(Math.random() * choiceArray.length);
      randomChar = choiceArray[index];
      password += randomChar;
    }
    return password;
  } else {
    alert("atleast 1 character type should be included for password generation. Please retry");
  }
  }
  else {
    alert("The password must be number between 8-128. Please re write.");
  }

  return password; //return variable for created password here

}

