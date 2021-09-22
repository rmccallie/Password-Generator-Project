

function generatePassword(){
  var length = parseInt(prompt("Please choose password length", "Enter numerical value between 8 - 128"));
  if (Number.isNaN(length)){
    alert("Please enter a numerical value");
    return "";
  }
  if (length < 8) {
      alert("Length of password must be at least 8 characters");
      return "";
  }
  if (length > 128) {
      alert("Password must be no longer than 128 characters");
      return "";
  }
  var incLowercase = confirm("Would you like to include lowercase letters? []");
  console.log("incLowercase", incLowercase);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  


