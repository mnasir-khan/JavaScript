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


// let students = [{
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

// let gpa = students.map((el) =>{
//     return el.marks/10;
// });

// console.log(gpa);


// _______________filter Method_______________

// let nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 12, 13, 14];

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

// let ans = nums.filter((el) => {
//     return el <= 10;
// });
// console.log(ans);


// ___________every Method_____________


// let mixNum = [1, 2, 3, 4];
// let evenNum = [6, 2, 8, 4];
// let oddNum = [1, 3, 5, 7];

// // let test = mixNum.every((el) => el %2 == 0);
// // let test = evenNum.every((el) => el %2 == 0);
// // let test = oddNum.every((el) => el %2 != 0);
// let test = mixNum.every((el) => el %2 != 0);

// console.log(test);


// _______some Method_________

// let mixNum = [1, 2, 3, 4, 5];
// let evenNum = [ 2, 4, 6, 8];
// let oddNum = [1, 3, 5, 7];

// let test = mixNum.some((el) => el % 2 == 0);
// let test = mixNum.some((el) => el % 2 != 0);
// let test = evenNum.some((el) => el % 2 == 0);
// let test = oddNum.some((el) => el % 2 == 0);
// let test = oddNum.some((el) => el % 2 != 0);

// console.log(test);


// __________reduce Method_______


// Method 1
// let num = [1, 2, 3, 4];
// let finalValue = num.reduce((res, el) => res + el);

// console.log(finalValue);

// Method 2
// let num = [1, 2, 3, 4];
// let finalValue = num.reduce((res, el) => {
//   console.log(res);
//   console.log(el);
//   return res + el;
// });

// console.log(finalValue);

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let finalValue = num.reduce((res, el) => {
// //   console.log(res);
// //   console.log(el);
//   return res + el;
// });

// console.log(finalValue);



// __________Maximum in Array_________________

// With Loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // let max = -1;
// // let max = 0;
// let max = "";

// for(let i = 0; i < arr.length; i++) {
//     if (max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// with reduce function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = arr.reduce((max, el) =>{
//     if (max < el){
//         return el;
//     }else{
//         return max;
//     }
// });

// console.log(ans);


// _______ Practice Qs________
// Q1

// let nums = [10, 20, 30 ,40];
// let ans = nums.every((el) => (el % 10 == 0));

// console.log(ans); //true


// let nums = [5, 10, 20, 30 ,40];
// let ans = nums.every((el) => (el % 10 == 0));

// console.log(ans); // false


// Q2
// let nums = [5, 10, 20, 30 ,40];

// let min = nums.reduce((min, el) =>{
//     if (min < el){
//         return min;
//     }else{
//         return el;
//     }
// });

// console.log(min);

// in function

// function getMin(nums){
//     let min = nums.reduce((min, el) =>{
//         if (min < el){
//             return min;
//         }else{
//             return el;
//         }
//     });
    
//     return min;
// };

let nums = [5, 10, 20, 30 ,40];

function getMin (){
    let min = nums.reduce((min, el) => {
 if(min < el){
    return min;
 }else{
    return el;
 }
    });
    return min;
}