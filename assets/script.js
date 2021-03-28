// Arrays
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const symbols = "~!@#$%^&*()[]{}|\:;_-+=./<>?".split("");


// Password Button Criteria
const generateBtn = document.querySelector("#generate");
const isLowercase = document.querySelector("#lowercase");
const isUppercase = document.querySelector("#uppercase");
const isNumber = document.querySelector("#numbers");
const isSymbol = document.querySelector("#symbols");
let checkbox = document.querySelector("form");

// Generate Random Password
function generatePassword() {
  let pswdLength = document.querySelector("#length").value;

  if (pswdLength < 8 || pswdLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  if (
    (!checkbox[1].checked) &&
    (!checkbox[2].checked) &&
    (!checkbox[3].checked) &&
    (!checkbox[4].checked)
  ) {
    alert("Please choose at least one character type.");
    return;
  }

  let pswdOption = [];
  let pswdResult = [];

  // Selecting Character Types (Checkbox)
  if (isLowercase.checked) {
    pswdOption = pswdOption.concat(lowercase);
  }
  if (isUppercase.checked) {
    pswdOption = pswdOption.concat(uppercase);
  }
  if (isNumber.checked) {
    pswdOption = pswdOption.concat(numbers);
  }
  if (isSymbol.checked) {
    pswdOption = pswdOption.concat(symbols);
  }

  // Create Random Combination of Characters
  for (i = 0; i < pswdLength; i++) {
    pswdResult.push(pswdOption[Math.floor(Math.random() * pswdOption.length)]);
  }

  return pswdResult.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);