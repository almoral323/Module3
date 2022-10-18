// Assignment code here
function generatePassword() {

  var userInput = window.prompt("How many charaters long would you like your password to be?");
  var passwordlength = userInput
  if (passwordlength > 128) {
    window.alert("Please select a charater length lower than 129");
    return
  } if(passwordlength < 8){
    window.alert("Please select a character length higher than 7");
    return
  } ;

  var userlower = window.confirm("Do you want your password to include lowercase characters");
  var userupper = window.confirm("Do you want your password to include uppercase characters");
  var usernumbers = window.confirm("Do you want your password to include numbers?");
  var userspecial = window.confirm("Do you want your password to include special characters");

  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var special = ["!","#","$","%","&","'","()","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","~"];

  var userpref = [];

  if (userlower === true) {
   var userpref = userpref.concat(lower)
  }

  if (userupper === true) {
    var userpref = userpref.concat(upper)
  }
  if (usernumbers === true) {
    var userpref = userpref.concat(numbers)
  }
  if (userspecial === true) {
    var userpref = userpref.concat(special)
  }
  console.log(userpref);

  //Select a random integer and select the charater in that position length number of times



  

 

 

 
  

 
}

function randomnumber () {
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
