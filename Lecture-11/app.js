// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked")
// });


// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked")
// });

// for (li of lis){
// li.addEventListener("click", function(e){
//     e.stopPropagation();
//     console.log("li was clicked")
// });
// }


//__________________________Todo________________________________________

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item)
//     // console.log(inp.value);
//     inp.value = "";
// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON"){
//     let listItem = event.target.parentElement;
//     listItem.remove()
//         console.log("deleted");
//     }
// })


//______________________________________________________________________________


//_________________________Simon Says Game___________________________________

let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`; 
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function checkAns(idx){
    // console.log("current level : ", level)    
    if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
    setTimeout(levelUp, 1000)
    }
    } else {
    h2.innerText = `Game over! Press any key to start.`; 
    }
}

function btnPress (){
    console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}; 

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}