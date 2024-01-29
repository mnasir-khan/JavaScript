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


function savetoDb (data, success, failure){
 let internetSpeed = Math.floor(Math.random() * 10) + 1;
 if (internetSpeed > 4){
    success();
 }else{
    failure();
 }
}

savetoDb(
    "Nasir Khan",
    () => {
        console.log("Success : Your Data was saved : ");
        savetoDb(
            "hello world",
            () =>{
                console.log("Success2 : Data2 saved");
                savetoDb(
                    "khan",
                    () =>
                    {
                        console.log('Success3 : data3 saved');
                    },
                    () =>{
                        console.log("failure3 : weak connection");
                    }
                )
            },
            () =>{
                console.log("Failure2 : Weak connection");
            }
        )
    },
     ()=>{
        console.log("Failure : Weak connection : Data not saved!");
    })









//