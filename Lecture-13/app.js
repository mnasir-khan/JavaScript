//___________________________Async Function________________________________

//___________________________Async Keyword________________________________

// function greet(){

// }

// async function greet(){
//  abc();
// }

// async function greet() {
//   return "NasirKhan";
// }

// async function greet() {
//   // throw "some random error"
//   return "NasirKhan";
// }

// greet()
// .then((Result)=>{
//   console.log("Promise was resolved") // ye wala code run kry ga kiun k koi error nh aya
//   console.log("Result was : ",Result)
// })
// .catch((err)=>{
//   console.log("Promise was rejected with err : ", err)
// })

// async function greet() {
//   throw "weak connection"
//   // return "NasirKhan";
// }

// greet()
// .then((Result)=>{
//   console.log("Promise was resolved")
//   console.log("Result was : ",Result)
// })
// .catch((err)=>{
//   console.log("Promise was rejected with err : ", err) // ab ye wala code chalu ga kiun k eror aya
// })

// ____________Arrow function as a async_________________

// let demo = async () =>{return 5;}

//______________________________Await keyword_______________________________

// function getNum(){
//   // return 5;
//   console.log(5);
// }

// async function demo (){
//   getNum();
// }

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }

//______________Example__________________

// h3 = document.querySelector("h3");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h3.style.color = color;
//       console.log(`color change to ${color}!`);
//       resolve("color changed");
//     }, delay);
//   });
// };

// async function demo(){
//   await changeColor("red", 1000);
//  await changeColor("blue", 1000);
//   await changeColor("yellow", 1000);
//   await changeColor("green", 1000);
// }

//______________________Handling rejections_________________________

// h3 = document.querySelector("h3");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("promise rejected");
//       }
//       h3.style.color = color;
//       console.log(`color change to ${color}!`);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("green", 1000);
//   } catch (error) {
//     console.log("Error caught");
//     console.log(error);
//   }

//   let a = 5;
//   console.log(a);
//   console.log("new number = ", a + 3);
// }

//_______________What is APIs________________

// __________________Accessing some APIs____________________

//_______________What is JSON________________

// ___________________Accessing JSON data_____________________

// let jsonRes =
//   '{"fact":"A female cat can be referred to as a molly or a queen, and a male cat is often labeled as a tom.","length":96}';

// console.log(jsonRes);

// Method 01 ==>  (JSON.parse)

// let validRes = JSON.parse(jsonRes);

// console.log(validRes);
// console.log(validRes.fact);

// Method 02 ==>  (JSON.sringify)

// let student = {
//   name: "nasir",
//   marks: 90,
//   age: 25,
// };

// console.log(JSON.stringify(student));

//________________________Our first request_______________________

// let url = "https://catfact.ninja/fact" // Ok API

// fetch(url)
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log("Error -" , err)
// })

// let url = "https://catfact.ninja/fact2" // if wrong API

// fetch(url)
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log("Error -" , err)
// })

// let url = "https://catfact.ninja/fact" // for Readble data we use JSON

// fetch(url)
// .then((res)=>{
//   console.log(res)
//   console.log(res.json())
// })
// .catch((err)=>{
//   console.log("Error -" , err)
// })

// let url = "https://catfact.ninja/fact"; // for Readble data we use JSON (with .then method)

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("Error -", err);
//   });

// //____________________For Single Data______________________________

// let url = "https://catfact.ninja/fact"; // for Readble data we use JSON (return .then method)

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("Error -", err);
//   });


//____________________For multiple Data______________________________

// let url = "https://www.boredapi.com/api/activity"; // for Readble data we use JSON (return .then method)
// let url = "https://catfact.ninja/fact"; // for Readble data we use JSON (return .then method)

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact)
//   })
//   .catch((err) => {
//     console.log("Error -", err);
//   });

//   console.log("Nasir")

//____________________________using fetch with async & await__________________


let url = "https://catfact.ninja/fact2";

async function getFacts(){
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact)
  } catch (error) {
    console.log("Error ", error)
  }
console.log("bye")
}

//
