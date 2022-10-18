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

  var userlower = window.confirm("Do you want your password to include lowercase characters?");
  var userupper = window.confirm("Do you want your password to include uppercase characters?");
  var usernumbers = window.confirm("Do you want your password to include numbers?");
  var userspecial = window.confirm("Do you want your password to include special characters?");

  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var special = ["!","#","$","%","&","'","()","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","~"];

  var userpref = [];

  if (userlower === true) {
   userpref.push(lower)
  }

  if (userupper === true) {
    userpref.push(upper)
  }
  if (usernumbers === true) {
    userpref.push(numbers)
  }
  if (userspecial === true) {
    userpref.push(special)
  }
  if(userpref.length === 0) {
    window.alert("Please refresh and select at least one charater type")
  }

  //Select a random integer and select the charater in that position length number of times
  var generatePassword = ""

  for (i = 0; i < passwordlength; i++) {
    var randomCharacter = getRndItem(userpref)
    var newuserpref = getRndItem(randomCharacter)
    generatePassword += newuserpref
    console.log(generatePassword)
  }
  
  return generatePassword

 
}

function getRndInteger(min, max) {
  if (!max) {
    max  =min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max) ;
}

function getRndItem(list) {
  return list[getRndInteger(list.length)]
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
