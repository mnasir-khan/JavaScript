//__________________Call Stack___________________________________

// function hello(){
//     console.log("inside hello func")
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello func")
//     hello();
// }

// console.log("calling demo func")
// demo();

// console.log("done, Bye")


//__________________Visulizing the Call Stack___________________________________

// function one (){
//     return 1;
// }

// function two (){
//     return one() + one();
// }

// function three(){
//     let ans = two () + one ();
//     console.log(ans);
// }
// three();

//__________________Breakpoint___________________________________

// function one (){
//     return 1;
// }

// function two (){
//     return one() + one();
// }

// function three(){
//     let ans = two () + one ();
//     console.log(ans);
// }
// three();


//_____________________JS is Single Threaded___________________________________

// let a = 10;
// console.log("a", a);

// let b = 15;
// console.log("b", b);

// let sum = a+b;
// console.log("sum", sum);



// setTimeout(()=>{
//     console.log("Muhammad Nasir Khan");
// }, 3000);

// console.log("Hello....")

setTimeout(()=>{
    console.log("Muhammad Nasir Khan");
}, 1500);

setTimeout(function(){
    console.log("from Karachi Pakistan")
}, 1500)

console.log("Hello....")






