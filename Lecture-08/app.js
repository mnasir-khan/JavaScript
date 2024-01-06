// __________________Array Methode_________________________

// ____________________forEach______________________

// ***Method 1
// let arr = [1, 2, 3, 4, 5];

// let print = function (el){
//     console.log(el);
// }

// arr.forEach(print);


// //*** Method 2 */
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (el){
//     console.log(el);
// })


//*** Method 3 */
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
// });


// _________________forEach for Objects__________________

// let arr = [{
//     name : "aman",
//     marks : 95,
// },
// {
//     name : "imran",
//     marks : 94,
// }, 
// {
//     name: "umar",
//     marks : 90,
// }];

// arr.forEach((student)=>{
//     console.log(student.name);
//     console.log(student.marks);
// });


//******____________map();___________ */

//Method 1
// let num = [1, 2, 3, 4];
// // console.log(num);

// let double = num.map(function(el){
//     // return el * 2;
//     return el * el;
// });
// console.log(double);

//Method 2
// let num = [1, 2, 3, 4];
// // console.log(num);

// let double = num.map((el) =>{
//     // return el * 2;
//     // return el * el;
//     return el;
// });
// console.log(double);


let students = [{
    name : "aman",
    marks : 95,
},
{
    name : "imran",
    marks : 94,
}, 
{
    name: "umar",
    marks : 90,
}];

let gpa = students.map((el) =>{
    return el.marks/10;
});

console.log(gpa);


// _______________filter_______________

let nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 12, 13, 14];

// let ans = nums.filter((el) => {
//     return el % 2 == 0; // for even number
// });

// let ans = nums.filter((el) => {
//     return el % 2 != 0; // for odd number
// });

// let ans = nums.filter((el) => {
//     return el < 5;
// });

// let ans = nums.filter((el) => {
//     return el > 5;
// });

// let ans = nums.filter((el) => {
//     return el < 10;
// });

let ans = nums.filter((el) => {
    return el <= 10;
});
console.log(ans);