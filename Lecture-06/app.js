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

// let str = ['hi', 'hello', 'bye', '!'];

// function concat(str){
//     let result = "";

//     for(let i=0; i<str.length; i++){
//         result+= str[i];
//     }
//     return result;
// }

// *********  Scope
// finction scope


// let sum = 50;

// function calFun(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// calFun(2,4);

// console.log(sum);

// block scope

// let blockScopr = 10;
// var blockScopr = 10;
// const blockScopr = 10;
// {
//     console.log(blockScopr);
// }

// {
    // let blockScopr = 15;
    // const blockScopr = 15;
    // var blockScopr = 15;
// }
// console.log(blockScopr)


// Lexical scope

// function outerFunc(){
//     let x = 10;
//     let y = 15;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }


// function outerFunc(){
//     let x = 10;
//     let y = 15;
//     function innerFunc(){
//         let z = 20;
//         console.log(x);
//     }
//     innerFunc();
//     console.log(z);
// }

// Practice Qs

// let greet = "hello";

// function chanheGreet(){
//     let greet = "hey";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }

// console.log(greet);
// chanheGreet();


// Functions expression

// let sum = function(a,b){
    // return a+b;
    // console.log(a+b);
// }

    // sum(2,8);

// console.log(sum());

// let greet = function(){
//     console.log("Hello");
// }
// greet();

// console.log(greet());


// Higher order functions

// let greet = function(){
//     console.log("hello");
// }
// greet();
// greet();
// greet();



// function multipleGreet(func, count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet, 8);


// Higher order functions (return)

// let odd = function(n){
//     console.log(!(n%2==0))
// }

// odd(2);
// odd(5);

// let even = function(n){
//     console.log(n%2==0)
// }
// even(8);
// even(9);


// function oddEvenFsctroy(requiest){
//     if(requiest == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0))
//         }
//         return odd;
//     }else if (requiest== "even"){
//         let even = function(n){
//             console.log(n%2==0)
//         }
//         return even;
//     }else{
//         console.log("wrong requiest")
//     }
// }
// // let requiest = "odd";
// let requiest = "even";


// Methods

// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a, b){
//         return a-b;
//     },
//     mul : function(a, b){
//         return a*b;
//     }  
// };

// mrthods shorthand

const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    }  
};

















