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