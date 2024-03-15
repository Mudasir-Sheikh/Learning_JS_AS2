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


// var char = prompt("Enter only one letter or character")
// if (char.length === 1 && char.match(/[a-zA-Z]/)) {
//     if (char.toLowerCase() == "a" || char.toLowerCase() == "e" || char.toLowerCase() == "i" || char.toLowerCase() == "o" || char.toLowerCase() == "u") {
//         console.log("Character is Vowel")
//     }
//     else {
//         console.log("Character is Consonant")
//     }
// }
// else {
//     console.log("Input is Not a letter or Character")
// }



// //Question 05
// // Account Login Password Checker
// var inp_username = prompt("Enter Your Username")
// var savedpassword = "javascript";
// var inp_password;
// inp_password = prompt("Enter your Password")
// if (inp_password.length==0){
//     console.log("Please enter your Password")
// }
// else if (inp_password == savedpassword){
//     console.log("Your Password Matched the Original password \n Account Login Successfully")
// }
// else{
//     console.log("Your Password is incorrect \n Try again")
// }


// //Question 06
// //Corrected Version
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


//Question 07
// Greetings with Time
var time = +prompt("Enter The Time in 24-hour Format" , "Example: 1900")
if (time > 2359 || time < 0){
    console.log("Please Input Valid time")
}
else if (time >= 0 && time < 1200){
    console.log("Good Morning!")
}
else if (time>=1200 && time<=1700){
    console.log("Good Afternoon!")
}
else if (time>=1700 && time<=2100){
    console.log("Good Evening!")
}else if (time>=2100 && time<=2359){
    console.log("Good Night :)")
}