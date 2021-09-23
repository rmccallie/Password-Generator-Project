var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specials = "?!@#$%^&*()"

function generatePassword(){
  var length = parseInt(prompt("Please choose password length", "Enter numerical value between 8 - 128"));
  if (Number.isNaN(length)){
    alert("Please enter a numerical value");
    return "";
  }
  if (length < 8) {
      alert("Password must be 8 characters minimum");
      return "";

  }
  if (length > 128) {
      alert("Password must be 128 characters maximum");
      return "";
      
  }
  var incLowercase = confirm("Would you like to include lowercase letters? [OK/Cancel]");
  console.log("lower case", incLowercase);
  var incUppercase = confirm("Would you like to include uppercase letters? [OK/Cancel]");
  console.log("upper case", incUppercase);
  var incNumbers = confirm("Would you like to include numbers? [OK/Cancel]");
  console.log("numbers", incNumbers);
  var incSpecials = confirm("Would you like to include special characters? [OK/Cancel]");
  console.log("special characters", incSpecials);
  if (!incLowercase && !incUppercase && !incNumbers && !incSpecials){
    alert("Please select at least one criteria");
    return "";
  }
  if (incLowercase || incUppercase || incNumbers || incSpecials){
    
  }
    
  
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
  


