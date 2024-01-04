// this keyword

const student = {
    name : "Nasir",
    age : 26,
    eng : 75,
    pys : 85,
    math : 100,
    getAvg(){
        console.log(this)
        let avg = (this.eng + this.pys + this.math)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg(){
    console.log(this)
}

//  try and catch


  // without try catch
// console.log("Hello 1")
// console.log("Hello 2")
// console.log("Hello 3")
// console.log(a);
// console.log("Hello 4")
// console.log("Hello 5")


// with try catch but a is not difine
// console.log("Hello 1")
// console.log("Hello 2")
// console.log("Hello 3")
// try{

//     console.log(a);
// } catch{
//     console.log("caught an error...")
// }
// console.log("Hello 4")
// console.log("Hello 5")


// with try catch but a difine

console.log("Hello 1")
console.log("Hello 2")
console.log("Hello 3")

let a = 10;
try{
 console.log(a);
} catch{
    console.log("caught an error...")
}
console.log("Hello 4")
console.log("Hello 5")


//****** */ Miscellaneous topic

// Arrow Functions

// function sum (a,b){    // normal function
//     console.log(a+b);
// }

// sum(2,8);

// method
// const sum = (a,b)=>{console.log(a+b)}
// sum(10,8);

// method 02
// const sum = (a,b)=>{
//     console.log(a+b)
// }
// sum(10,8);

// const cube = (n)=>{
//     return n*n*n;
// };

// let result = cube(2);
// let result = cube(8);
// console.log(result);

// const pow = (a, b)=> {
//     return a**b;
// }

// let results = pow(2,4);

// console.log(results);


// Inplicit return in arrow functions

// const mul = (a,b) => (
//     a+b
// );

// const mul = (a,b) => (a+b);


// set Timeout Function


// console.log("Hi there..!");
// setTimeout(() => {
//     console.log("Apna College")
// }, 4000);
// console.log("Welcome to");

console.log("salam");
setTimeout(()=>{
    console.log("Nasir")
}, 4000)
console.log("Khush Amdid");


// SetIntervall

// setInterval(()=>{
//     console.log("Nasir");
// }, 2000);

let id = setInterval(()=>{
        console.log("Nasir");
    }, 2000);
    
    clearInterval(id);

let id1 = setInterval(()=>{
        console.log("Khan");
    }, 1500);
    
    clearInterval(id1);
    
