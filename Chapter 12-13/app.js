// var num1 = +prompt("Enter the Integer 1:")
// var num2 = +prompt("Enter the Integer 2:")
// if (num1 > num2){
//     console.log(num1+" is greater than "+ num2)
// }
// else if(num1<num2){
//     console.log(num2 +" is greater than "+ num1)
// }
// else{
//     console.log("Both are Equal")
// }


// //Question 03
// var number = +prompt("Enter a number")
// if (number>0){
//     console.log("Number is Positive")
// }
// else if (number<0){
//     console.log("Number is Negative")
// }
// else{
//     console.log("Number is Zero")
// }


var char = prompt("Enter only one letter or character")
if (char.length === 1 && char.match(/[a-zA-Z]/)) {
    if (char.toLowerCase() == "a" || char.toLowerCase() == "e" || char.toLowerCase() == "i" || char.toLowerCase() == "o" || char.toLowerCase() == "u") {
        console.log("Character is Vowel")
    }
    else {
        console.log("Character is Consonant")
    }
}
else {
    console.log("Input is Not a letter or Character")
}
