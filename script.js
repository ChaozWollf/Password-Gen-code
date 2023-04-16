// Assignment Code
var generateBtn = document.querySelector("#generate");
var unpassword = []
let megaArray = []
const charaSet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numberSet = ["1","2","3","4","5","6","7","8","9","0"];
var charaSet2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
charaSet2 = charaSet2.map(function(x){return x.toUpperCase();})








function generatePassword() 
{


let numChar = prompt("How many characters would you like to use?")

if (numChar < 8) {
  console.log("I am sorry that is an invlaid selection");
alert("That is an invlaid selection, please try again");

} else if (numChar > 128) {
   
console.log("I am sorry that is an invlaid selection");
alert("That is an invlaid selection, please try again")
}

else { console.log("That is great! We can do " + numChar +" characters") }


let Uppercase = prompt ("Do you want UPPER CASE letters(y/n)")
 
if (Uppercase == "y") {const ranUp = Math.floor(Math.random() * 26) 
  unpassword.push(charaSet2[ranUp]);
  megaArray.push(charaSet2)}
  
  else {console.log ("Uppercase letters denied")}

let Lowercase = prompt ("Do you want lower case letters(y/n)")

if  (Lowercase == "y") {
  const ranLow = Math.floor(Math.random() * 26)
  unpassword.push(charaSet1[ranLow]);
  megaArray.push(charaSet1) }
else {console.log("lowercase letters denied") }



let numberS = prompt("Do you want numbers in this password?(y/n)")

if (numberS == "y") {const ranNum = Math.floor(Math.random() * 10)
  unpassword.push(numberSet[ranNum]);
  megaArray.push(numberSet)}
else {console.log("numbers denied")}

let  (unpassword.length -1) === numChar { 
  for (let i = unpassword.length; i < numChar.length; i++){
  const ranChar =Math.floor(Math.Random() * numChar.length)
  unpassword.push(megaArray)}}
console.log(unpassword);

 
console.log (unpassword);}
















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

  

    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


