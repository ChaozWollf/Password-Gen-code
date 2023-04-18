// Assignment Code
var generateBtn = document.querySelector("#generate");

let megaArray = []
const charaSet1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charaSet2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
charaSet2 = charaSet2.map(function (x) { return x.toUpperCase(); })








function generatePassword() {
  let unpassword = []
  const numChar = +prompt("How many characters would you like to use?")

  if (numChar < 8) {
    console.log("I am sorry that is an invlaid selection");
    alert("That is an invlaid selection, please try again");
    return

  } else if (numChar > 128) {

    console.log("I am sorry that is an invlaid selection");
    alert("That is an invlaid selection, please try again");
    return
  
  }

  else { console.log("That is great! We can do " + numChar + " characters") } 
console.log(numChar)
  let Uppercase = confirm("Do you want UPPER CASE letters(okay/cancel)")

  if (Uppercase) {
    const ranUp = Math.floor(Math.random() * 26)
    unpassword.push(charaSet2[ranUp]);
    const rat=[];
    var bar= rat.concat(charaSet2)
  }


  else if (!Uppercase) {
    console.log("Uppercase letters denied")
  }

  else { alert("that is an invalid selection"); return;}


let Lowercase = confirm("Do you want lower case letters(okay/cancel)")

if (Lowercase) {
  const ranLow = Math.floor(Math.random() * 26)
  unpassword.push(charaSet1[ranLow]);
  var measure = bar.concat(charaSet1);
}

else if (!Lowercase) { console.log("lowercase letters denied") }

else { alert("that is an invalid selection"); return; }



let numberS = confirm("Do you want numbers in this password?(okay/cancel)")

if (numberS) {
  const ranNum = Math.floor(Math.random() * 10)
  unpassword.push(numberSet[ranNum]);
  var megaArray= measure.concat(numberSet)
} else if (!numberS) { console.log("numbers denied") 

}else { alert ("That is an invalid selection") }


confirm("are you sure you want these parameters?\n password lenght: " + numChar +"\n Character set uppercase: " + Uppercase +"\n Character set lowercase: " + Lowercase +"\n Number set: " + numberS)


if (megaArray.length <= numberS.length) 
 { alert("you have not selected a character set for this password") }
  let  middle = []
  for (var i = unpassword.length; i < numChar; i++){

 let  reVal = Math.floor(Math.random() * megaArray.length-1);
 
 
 middle.push(megaArray[reVal])
 middle[Math.floor(Math.random() * reVal.length)] }
unpassword=unpassword.concat(middle).join("")
return unpassword 
  }















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


