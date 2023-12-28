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


// if statement 

console.log("before if statement")
let age = 25;
if (age >= 18){
    console.log("You can Vote");
    console.log("You can drive");
}
if (age < 18){
    console.log("You can Vote");
    console.log("You can drive");
}
console.log("after if statement")

let firstName = "Nasir";

if (firstName == "Nasir"){
    console.log(`Welcome ${firstName}`);
}

// ****** Practice Qs (Traffic Light System)

let color = "red";
// let color = "yellow";
// let color = "green";

if (color === "red"){
    console.log("Stop!! Light color is red");
}
if (color === "yellow"){
    console.log("Slow down, Light color is yellow");
}
if (color == "green"){
    console.log("Go, Light color is green");
}