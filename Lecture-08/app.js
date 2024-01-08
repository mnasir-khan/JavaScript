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


// __________Default Parameter

// function func (a, b = 5){
//    return a + b;
// }

// console.log(func(4));
// console.log(func(5));
// console.log(func(5, 6));

// function func (a = 5, b){
//    return a + b;
// }

// console.log(func(5)); // 5 ki value "b" me jany k bajaye "a" me chali jaye gi or phr "a=5" or b ab b undefined hoga is lie Answer me Nan aye ga.. 

// console.log(func(8, 5)); // 2 value deny se donu ki value update ho jaye gi

// function func (a, b = 10, c = 15){
//    return a + b + c ;
// }

// console.log(func(10));


// function func (b = 10, c = 15, a){
//    return a + b + c ;
// }

// console.log(func(10));


// ________________Spread for Array____________

// let num = (1, 2, 3, 4, 5, 0);

// console.log(Math.min(num));


// let num = (1, 2, 3, 4, 5, 0, -8);

// console.log(Math.min(num));


// Minimum value k liye 
// let arr = [1, 2, 3, 4, 5, 6, 7, -8];

// console.log(Math.min(arr[0], arr[2], arr[4])); // sab ko individual dalna pary ga tab ja k array btaye ga k konsi value sab se choti h.,

// console.log(Math.min(...arr)); // spread method k zariye Array me ye easly kr sakty hn

// Maximim value k liye

// let arr = [1, 2, 3, 4, 5, 6, 7, -8];

// // console.log(Math.max(...arr));
// console.log(arr);
// console.log(...arr);

// ________________Spread for String____________

// let str = 'Nasir Khan';

// console.log(...str);


// __________Spread with Array Literals____________

// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];

// console.log(arr);
// console.log(newArr);


// __________Spread with String Literals_________________

// let newStr = [...'hello'];

// console.log(newStr);


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let mix = [...odd, ...even];

console.log(mix);


// __________Spread with Objects Literals_________________

const data = {
   email : "mynameis@gmail.com",
   password : "abcd",
}

const dataCopy = {...data, id : 123, country : "Pakistan"};

console.log(data);
console.log(dataCopy);


// Array convert to object
let arr = [1, 2, 3, 4, 5];

let obj1 = {...arr};

console.log(obj1)

// String convert to object

let obj2 = {..."hello"};

console.log(obj2);


//__________________Rest______________

function sum(...args){
   //Arguments
   for(let i =0; i < args.length; i++){
      console.log("You give us", args[i]);
   }
};

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));

// Inbuild Array in JavaScript

// function min (a, b, c, d)
function min ()
{
      console.log(arguments); // sary items ka collections arguments k andr aajata h
}

console.log(min(2, 3, 4, 5));
console.log(min(2, 3, 4,));
console.log(min(2, 3, 4,5, 6));


// function sum(){
//    return arguments.reduce((sum, el) => sum + el);
// }

// console.log(sum());
// console.log(sum(1, 2, 3));

// function sum(...args){
//    return args.reduce((sum, el) => sum + el);
// }

// // console.log(sum());
// console.log(sum(1, 2, 3));
// console.log(sum(5, 10, 15, 20));


// function sum(...args){
//    return args.reduce((min, el) =>{
//       if(min > el){
//          return el;
//       }else{
//          return min;
//       }
//    });
// }

// console.log(sum(10, 9, 7, 6, 4));
// console.log(sum(10, 9, 7, 6, 4, 0));


function sum(msg, ...args){
   console.log(msg)
   return args.reduce((min, el) =>{
      if(min > el){
         return el;
      }else{
         return min;
      }
   });
}

console.log(sum("Hello", 1, 3, 9));



//________Destructuring______


// without destructuring

// let names = ["rehman", "ali", "ahmed", "dost"];
// let firstPosition = names[0];
// let secondPosition = names[1];
// let thirdPosition = names[2];
// let fourthPosition = names[3];

// console.log(firstPosition, secondPosition, thirdPosition, firstPosition);

// with destructuring
let names = ["rehman", "ali", "ahmed", "dost"];

let [first, second, third, fourth] = names

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


let namesof = ["rehman", "ali", "ahmed", "dost", 'imran', 'sadiq', 'shahid', 'dani'];

// let [phla, dosra, tesra, baqi] = namesof
let [phla, dosra, tesra, ...baqi] = namesof

console.log(phla);
console.log(dosra);
console.log(tesra);
console.log(baqi);

//________Destructuring Objects______

// without destruturing

const stud = {
   name : 'khan',
   age : 15, 
   class : 8,
   subject : ["urdu", "english", "maths",'science', "SST"],
   userName : "khan123",
   password : "abcd"
}

// let username = stud.userName;
// let password = stud.password;

// console.log(username);
// console.log(password);


// with destruturing

const studt = {
   name : 'khan',
   age : 15, 
   class : 8,
   subject : ["urdu", "english", "maths",'science', "SST"],
   userName : "khan123",
   password : "abcd"
}

// let {userName, password} = studt
// let {userName : user, password :pass} = studt
let {userName : user, password :pass, city = "karachi"} = studt

// console.log(userName);
// console.log(password);
console.log(user);
console.log(pass);
console.log(city);
