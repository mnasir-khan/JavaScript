// _________DOM Events___________

// ***********onclick

// let btn = document.querySelector("button");

// console.log(btn);
// console.dir(btn);

// btn.onclick = function(){
    //     console.log("button was clicked")
    //     alert("button was clicked")
    // }
    
    // function sayHello (){
        //     // console.log('Hello');
    //     alert('Hello');
    // }
    
    // btn.onclick = sayHello;
    
    
    // let btns = document.querySelectorAll("button");
    // // console.log(btns);
    // console.dir(btns);
    
    // for(btns of btns){
    //     btns.onclick = sayallhello;
    // }
    
    // function sayallhello (){
    //     console.log('hello');
    //     alert("hello");
    // }
    
    // btns.onclick = sayallhello;


    // ***********on mouse enter*****

    // let btns = document.querySelectorAll("button");
    // // console.log(btns);
    // console.dir(btns);
    
    // for(btns of btns){
    //     btns.onclick = sayallhello;
    //     btns.onmouseenter = function(){
    //         console.log('you enter a button')
    //     }
    // }

    // function sayallhello (){
    //     console.log('hello');
    //     alert("hello");
    // }
    
    // btns.onclick = sayallhello;


    //________Event Listners________

    // let btns = document.querySelectorAll("button");
  
    
    // for(btns of btns){
    //     btns.onclick = sayname; // onclick k method me hum sirf 1 kam krwa sakty hn..
    //     btns.onclick = sayallhello; // ya "sayname" or ya "sayallhello"
    //    }

       
    //    function sayname (){
    //        alert("nasir");
    //     }
        
    //     function sayallhello (){
    //         alert("hello");
    //     }

 
// ******addEventListner

// //single click
// let btns = document.querySelectorAll("button");
  
    
//     for(btn of btns){
//         // btns.onclick = sayname;
//         // btns.onclick = sayallhello;
//         btn.addEventListener('click', sayallhello)
//         btn.addEventListener('click', sayname)
//        }

//        function sayname (){
//            alert("nasir");
//         }
        
//         function sayallhello (){
//             alert("hello");
//         }

// //double click
// let btns = document.querySelectorAll("button");
  
    
//     for(btn of btns){
//         // btns.onclick = sayname;
//         // btns.onclick = sayallhello;
//         // btn.addEventListener('dblclick', sayallhello)
//         btn.addEventListener('dblclick', function (){
//             console.log("you clicked twice")
//         })
//        }

//        function sayname (){
//            alert("nasir");
//         }
        
//         function sayallhello (){
//             alert("hello");
//         }

//mouse enter
// let btns = document.querySelectorAll("button");
  
    
//     for(btn of btns){
//         btn.addEventListener('mouseenter', function (){
//             console.log("you clicked enter")
//         })
//        }

//        function sayname (){
//            alert("nasir");
//         }
        
//         function sayallhello (){
//             alert("hello");
//         }


//________________________________________________________________________________________

////________________________Activity____________________

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandom();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated")
// })

// function getRandom(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`
//     return color;
// }


// ______________________Event Listener for Element_____________

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("Paragraph was clicked")
// });

// let div = document.querySelector('.box');
// div.addEventListener('mouseenter', function(){
//     console.log("mouse inside box");
// });


// _____________this in Event Listening________________

// let btn = document.querySelector("button");
// btn.addEventListener('click', function(){
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"
// })



//Long Method

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h2 = document.querySelector("h2");
// let h4 = document.querySelector("h4");


// btn.addEventListener('click', function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"
// })

// p.addEventListener('click', function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"
// })
// h2.addEventListener('click', function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"
// })
// h4.addEventListener('click', function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"
// })


//Short Method

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue"
}

btn.addEventListener('click', changeColor);

p.addEventListener('click', changeColor);

h2.addEventListener('click', changeColor);

h4.addEventListener('click', changeColor);
