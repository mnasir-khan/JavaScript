// for loop

// for(let i = 1 ; i <= 10; i++){
//     console.log(i); // forward sequence
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i); // revesre sequence
// }


// print odd numbers

// for (let i = 1; i <= 15; i = i +2){
//     console.log(i);
// }

// console.log("backward");

// for (let i = 15; i >= 1; i = i -2){
//     console.log(i);
// }


// print even numbers

// for (let i = 2; i <=10; i = i + 2){
//     console.log(i);
// }

// console.log("backword");

// for(let i = 10; i >= 2; i = i -2){
//     console.log(i);
// }


// Print multiplication table

// for(let i = 5; i<=50; i = i+5){
//     console.log(i);
// }
// for(let i = 3; i<30; i = i+3){
//     console.log(i);
// }

// let n = +prompt("enter a number");

// for(let i = n; i <= n*10; i = i+n){
//     console.log(i);
// }

// Nested Loop

// for (let i = 1; i <= 3; i ++){
//     console.log("outer loop")
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// }


// **** WHile Loop


// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// console.log("backwords");

// let j = 5;
// while(j >= 1){
//     console.log(j);
//     j--;
// }

// let i = 0;
// while(i <= 20){
//     console.log(i);
//     i++;
// }

// for even numbers

// let i = 0;
// while(i <= 20){
//     console.log(i);
//     i = i +2;
// }

// for odd numbers

// let i = 1;
// while(i <= 20){
//     console.log(i);
//     i = i +2;
// }


// Guess the Fav Movie

// const favMov = "avatar";

// let guess = prompt("guess my fav movie");

// while((guess != favMov) && (guess != "quit")){
//     guess = prompt("wrong guess !! try again");
// }

// if(favMov == guess){
//     console.log("Congrats..")
// }else{
//     console.log("You Quit")
// }


// break

// let i = 1;
// while(i <= 5){
//     if(i == 4){
//         console.log("we used break")
//         break;
//     }
//     console.log(i);
//     i++;
// }

// const favMov = "avatar";

// let guess = prompt("guess my fav movie");

// while(guess != favMov){
//     if(guess == "quit"){
//         console.log("You Quit..")
//         break;
//     }
//     guess = prompt("wrong guess !! try again");
// }

// if(favMov == guess){
//     console.log("Congrats..")
// }

// loops with arrays

// let fruits =["apple", "banana", "orange", "mango"];

// for( let i = 0; i<fruits.length; i ++){
//     console.log(i, fruits[i]);
// }

// let msg = " I am Sorry";

// for(let i = 0; i < 100; i ++){
//     console.log(i, msg)
// }


// Nested Loop with Nested Arrays

// let heroes = [
//     ["ironman", "spiderman","thor"],
//     ['superman', 'wonderwoman', 'flash']
// ]

// for(let i = 0; i < heroes.length; i ++){
//     console.log(i, heroes[i], heroes[i].length);
//     for (let j = 0; j < heroes[i].length; j ++)
//     console.log(`j=${j}, ${heroes[i][j]}`)
// }


// let students = [
//     ["aman", 95],
//     ["sharada", 94],
//     ['karan', 96]
// ]

// for(let i = 0; i< students.length; i++){
//     console.log(`info of student # ${i+1}`)
//     for (let j = 0; j<students[i].length; j++){
//         console.log(students[i][j])
//     }
// }


// **** for of loop for arrays

// let fruits = ['apple', 'mango', 'banana', 'orange'];

// for(fruit of fruits){
//     console.log(fruit);
// }


//***for of loop for string

// for(char of "apnacollege"){
//     console.log(char)
// }

//******Nested for of loop */

let heroes = [['ironman', 'spiderman', 'thor'], ['superman', 'batman', 'flash']]

for (list of heroes){
    // console.log(list)
    for(hero of list){
        console.log(hero);
    }
}