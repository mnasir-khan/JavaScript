// // functions

// function myName (){
//     console.log("Nasir");
// }

// // myName();
// // myName();
// // myName();
// // myName();
// // myName();

// function namePrint(){
//     console.log("Nasir Khan");
//     console.log("Khan");
// }

// // namePrint();


// // for loopin function

// function fun1to5(){
//     for(let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }

// // fun1to5();

// // if else in function

// function isAdult (){
//     // let age = 18;
//     let age = 15;
//     if(age >= 18 ){
//         console.log("Adult");
//     }else{
//         console.log("Not Adult");
//     }
// }

// // isAdult();

// // practice Qs

// function printPoem(){
//     console.log("Twinkle Twinkle, litter star")
//     console.log("How I wonder whats you are")
// }

// // printPoem();


// // var x = 10;
// // function testValue (){
// //     console.log(x);
// //     var x = 20;
// // }

// // testValue()


// // practice no 02



// function rollDice(){
//     let rand = Math.floor( Math.random()*6) + 1;
// console.log(rand);
// }

// rollDice();
// rollDice();


// // functions with arguments

// function funcName(name){
//     console.log(`My Name is ${name}`)
// }

// // funcName("Nasir");
// funcName("Khan");
// funcName("Ali");


// function studInfo(name, age, marks){
//     console.log(`${name}'s age is ${age} years old and his marks ${marks}`);
// }

// studInfo("ahmed", 22, 95);
// studInfo("ali", 23, 98);
// studInfo("ali", 23,);
// studInfo("ali",);
// studInfo(12);
// studInfo();

// function sum(a, b){
//     console.log(a+b);
//     console.log(a-b);
// }

// // sum(12, 8);
// // sum(14, 6);
// // sum(18, 10);


// // Practicwe Qs no 03

// function calcu (x, y, z){
// //    let avg = (x+y+z)/3
//      avg = (x+y+z)/3
//     console.log(avg);
// }
// calcu(2,4,6)


// // Practice no 04 print a table

// function printTable(n){
//     for(let i = n; i<= n*10; i= i+ n){
//         console.log(i);
//     }
// }
// printTable(3);
// printTable(2);


// // return keyword

// function sum(a, b){
//     return a+b;
//     console.log(sum);
// }
// console.log(sum(2,5));


// function sum (x, z){
//     return x;
// }

// console.log(sum(10,20));


// function isAdult(age){
//     if(age >=18){
//         return "Adult";
//     }else {
//         return "Not Adult"
//     }
// }
// console.log(isAdult(20));
// console.log(isAdult(17));


// Practice Qs no 05

// function getSum(n){
//     let sum = 0;

//     for(let i = 1; i<= n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getSum(3));

// practice Qs no 06

let str = ['hi', 'hello', 'bye', '!'];

function concat(str){
    let result = "";

    for(let i=0; i<str.length; i++){
        result+= str[i];
    }
    return result;
}