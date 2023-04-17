// Assignment Code
var generateBtn = document.querySelector("#generate");
let unpassword = []
let megaArray = []
const charaSet1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charaSet2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
charaSet2 = charaSet2.map(function (x) { return x.toUpperCase(); })








function generatePassword() {
  
  const numChar = +prompt("How many characters would you like to use?")

  if (numChar < 8) {
    console.log("I am sorry that is an invlaid selection");
    alert("That is an invlaid selection, please try again");

  } else if (numChar > 128) {

    console.log("I am sorry that is an invlaid selection");
    alert("That is an invlaid selection, please try again")
  }

  else { console.log("That is great! We can do " + numChar + " characters") } 
console.log(numChar)
const numChar2 = new Array(numChar);
console.log(numChar2.length)
  let Uppercase = prompt("Do you want UPPER CASE letters(y/n)")

  if (Uppercase == "y") {
    const ranUp = Math.floor(Math.random() * 26)
    unpassword.push(charaSet2[ranUp]);
    const rat=[];
    var bar= rat.concat(charaSet2)
  }


  else if (Uppercase == "n") {
    console.log("Uppercase letters denied")
  }

  else { alert("that is an invalid selection"); return;}


let Lowercase = prompt("Do you want lower case letters(y/n)")

if (Lowercase == "y") {
  const ranLow = Math.floor(Math.random() * 26)
  unpassword.push(charaSet1[ranLow]);
  var measure = bar.concat(charaSet1);
}

else if (Lowercase == "n") { console.log("lowercase letters denied") }

else { alert("that is an invalid selection"); return; }



let numberS = prompt("Do you want numbers in this password?(y/n)")

if (numberS == "y") {
  const ranNum = Math.floor(Math.random() * 10)
  unpassword.push(numberSet[ranNum]);
  var megaArray= measure.concat(numberSet)
} else if (numberS == "n") { console.log("numbers denied") 

}else { alert ("That is an invalid selection") }


confirm("are you sure you want these parameters?, password lenght: " + numChar +", Character set uppercase: " + Uppercase +", Character set lowercase: " + Lowercase +", Number set: " + numberS)

console.log(megaArray);

if (megaArray.length <= numberS.length) 
 { alert("you have not selected a character set for this password") }

  
  for (var i = unpassword.length; i < numChar2.length; i++){

 let  reVal = Math.floor(Math.random() * megaArray.length);
 
 const middle = []
 middle.push(reVal)
 middle[Math.floor(Math.random() * reVal.length)]
 console.log(middle)}
console.log(unpassword)

 return 
  }















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


