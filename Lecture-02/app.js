// ****** Template Literals : They are used to add embedded expression in a string.

// let a = 5;
// let b = 10;

// console.log("Price is ", a + b + " rupees"); // without template literals
// console.log(`Price is ${a + b} rupees`); // with template literals

// ******** Operators in JS

// Arithimatic

// let y = 10;
// let z = 5;

// console.log(y+z);
// console.log(y-z);
// console.log(y*z);
// console.log(y/z);
// console.log(y%z);
// console.log(y**z);

//Unary Operators

// let w = 10;
// let x = 5;

// console.log(w++);
// console.log(++w);

//Assignment Operators
// let c = 10;
// let d = 5;
// d += c;
// // d = d + c;

// console.log(d);

// Comparisson Operators
// >       Greater then
// >=      Greater then & equal too
// <       Less than
// <=      Less than & equal too
//  ==     Equal to (compair value not type)
//  ===    (Compair data type and value) Equal to
// !=      Not equal to

// let a = 10;
// let b = "10";

// console.log(a == b)
// console.log(a === b)

// console.log(a >= 10);
// console.log(a <= 10);

// console.log(a == 12)
// console.log(a != 12)

//*** Conditional Statement */

// if - esle
// nested if - esle
// Switch

// ****** if statement

// console.log("before if statement")
// let age = 25;
// if (age >= 18){
//     console.log("You can Vote");
//     console.log("You can drive");
// }
// if (age < 18){
//     console.log("You can Vote");
//     console.log("You can drive");
// }
// console.log("after if statement")

// let firstName = "Nasir";

// if (firstName == "Nasir"){
//     console.log(`Welcome ${firstName}`);
// }

// ****** Practice Qs (Traffic Light System)

// let color = "red";
// // let color = "yellow";
// // let color = "green";

// // if (color === "red"){
// //     console.log("Stop!! Light color is red");
// // }
// // if (color === "yellow"){
// //     console.log("Slow down, Light color is yellow");
// // }
// // if (color == "green"){
// //     console.log("Go, Light color is green");
// // }

// ******* else if condition

// let userAge = 14;

// if (userAge >= 18){
//     console.log("you can vote")
// }
// else if (userAge < 18) {
//     console.log("you can not vote");
// }

// let marks = 75;
// let marks = 85;
// let marks = 55;
// let marks = 25;

// if (marks >= 80){
//     console.log("A+ Grade")
// }else if(marks >= 60){
//     console.log("A Grade")
// }
// else if (marks >= 33){
//     console.log("B Grade")
// }else if (marks < 33){
//     console.log("Fail")
// }

// let color = "red";
// let color = "yellow";
// let color = "green";

// if (color === "red"){
//     console.log("Stop!! Light color is red");
// }
// else if (color === "yellow"){
//     console.log("Slow down, Light color is yellow");
// }
// else if (color == "green"){
//     console.log("Go, Light color is green");
// }

//****** else statement */

// let age = 17;
// let age = 19;
// if(age >=18){
//     console.log("You are eligible for vote")
// }else{
//     console.log("Sorry!! You can not vote")
// }

// let color = "red";
// let color = "yellow";
// let color = "green";
// let color = "blue";
// let color = "white";

// if (color === "red"){
//     console.log("Stop !")
// }else if ( color === "yellow"){
//     console.log("Slow down")
// }else if(color === "green"){
//     console.log("Go..")
// }else {
//     console.log("Error in System !")
// }

// Practice Qs

// let size = 'XL';
// let size = 'L';
// let size = 'M';
// let size = 'S';
// let size = 'z';

// if (size == 'XL'){
//     console.log("Price is Rs 250")
// } else if (size == 'L'){
//     console.log('Price is Rs 200')
// }else if(size == 'M'){
//     console.log("Price is Rs 100")
// } else if(size == 'S'){
//     console.log("Price is Rs 50")
// } else {
//     console.log("Not Available")
// }

// ****** Nested if else

// let marks = 25;

// if (marks >= 33){
//     console.log("Pass")
//     if(marks>=80){
//         console.log("Grade A+")
//     }else {
//         console.log("Grade A")
//     }
// }else {
//     console.log("Better luck for next time..")
// }

//**** Logical Operators  */

// logical AND &&

// true && true;

// true && false;

// let marks = 75 ;

// if ( marks >= 33 && marks < 80){
//     console.log("Congrats.. You are pass")
// }

// logical or ||

// let marks = 90 ;

// if ( marks >= 33 || marks < 80){
//     console.log("Congrats.. You are pass")
// }

// Practice Qs

// let str = prompt("Enter a word");
// let str = "apple";

// if ((str[0]=== 'a') && (str.length >= 3) ){
//     console.log("Good String");
// } else{
//     console.log("Not a good string");
// }

// ******* Switch Statement ****

// let color = "red";
// let color = "yellow";
// let color = "green";
// let color = "blue";

// switch (color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("slow down");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Error");
// }

// let day = 1;
// let day = 2;
// let day = 3;
// let day = 4;
// let day = 5;
// let day = 6;
// let day = 7;
let day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
    default :
    console.log("Wrong Day")
}


// ******* Alert and Prompt

// alert("Warning")

// let war = alert("Warning...")

// console.log(war);

// prompt("enter your name")

// let userName = prompt("enter your name");

// console.log(userName);

// console.log("simple log");
// console.error("error");
// console.warn("warning...");