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

// setTimeout(()=>{
//     console.log("Muhammad Nasir Khan");
// }, 1500);

// setTimeout(function(){
//     console.log("from Karachi Pakistan")
// },1500)

// console.log("Hello....")

//_____________________Callback Hell___________________________________

// h2 = document.querySelector("h2");

// setTimeout(()=>{
//     h2.style.color = "red";
// },1000)

// setTimeout(()=>{
//     h2.style.color = "blue";
// },2000);

// setTimeout(()=>{
//     h2.style.color = "green";
// },3000);

//_____________________Callback Hell (Nesting callbacks)___________________________________

// h2 = document.querySelector("h2");

// function changeColor(color, delay, nextColorChane){
//     setTimeout(()=>{
//         h2.style.color = color;
//         if (nextColorChane) nextColorChane()
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000, ()=>{
//                 changeColor("Blue", 1000)
//             })
//         })
//     });
// });
// changeColor("orange", 2000);
// changeColor("green", 3000);

//_____________________Promises________________________________-

// function savetoDb (data){
//     let internetSpeed = Math.floor(Math.random() * 10)+ 1;
//     if (internetSpeed > 4){
//         console.log("Your data is saved : ", data);
//     }else{
//         console.log("Weak Connection, Data not saved");
//     }
// }
// savetoDb("Nasir Hun yar")

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Nasir Khan",
//   () => {
//     console.log("Success : Your Data was saved : ");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("Success2 : Data2 saved");
//         savetoDb(
//           "khan",
//           () => {
//             console.log("Success3 : data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2 : Weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("Failure : Weak connection : Data not saved!");
//   }
// );

// function savetoDb (){
//     return new Promise ((success, failure) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             success("success : data was saved");
//         }else{
//             failure("failure : weak connections");
//         };
//     });
// };

// function savetoDb (){
//     return new Promise ((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         }else{
//             reject("failure : weak connections");
//         };
//     });
// };

//____________________.then() & .catch()__________________

// function savetoDb() {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connections");
//     }
//   });
// }

// Detailed Method

// let request = savetoDb("apnaname"); // req = promise object
// request
//   .then(() => {
//     console.log("Promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//     console.log(request);
//   });

// Short Method

// savetoDb("apnaname")
//   .then(() => {
//     console.log("Promise was resolved");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

//______________________Promises chaining____________________

// function savetoDb() {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connections");
//     }
//   });
// }

// savetoDb("apnaname")
//   .then(() => {
//     console.log("data 1 saved. ");
//     return savetoDb("hello world").then(() => {
//       console.log("data 2 saved");
//     });
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

// Improved version

// savetoDb("apnaname")
//   .then(() => {
//     console.log("data 1 saved. ");
//     return savetoDb("hello world");
//   })
//   .then(() => {
//     console.log("data 2 saved");
//     return savetoDb("nasirkhan");
//   })
//   .then(() => {
//     console.log("data 3 saved");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

//__________________________Results and errors in Promises______________

//   function savetoDb() {
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random() * 10) + 1;
//       if (internetSpeed > 4) {
//         resolve("success : data was saved");
//       } else {
//         reject("failure : weak connections");
//       }
//     });
//   }

//   savetoDb("apnaname")
//   .then((result) => {
//     console.log("data 1 saved. ");
//     console.log("result : ", result)
//     return savetoDb("hello world");
//   })
//   .then((result) => {
//     console.log("data 2 saved");
//     console.log("result : ", result);
//     return savetoDb("nasirkhan");
//   })
//   .then((request) => {
//     console.log("data 3 saved");
//     console.log("result : ", result);
//   })
//   .catch((error) => {
//     console.log("Promise was rejected");
//     console.log("error : ", error);
//   });

//____________________________Refactoring old code_____________________________

h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
.then(() => {
  console.log("red color was completed");
  return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  })

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000, ()=>{
//                 changeColor("Blue", 1000)
//             })
//         })
//     });
// });

//
