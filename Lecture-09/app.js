//_________DOM_________

let win = window
let wind = Window

console.log(win);
console.log(wind);

let doc = document

console.log(doc);
console.log(document);
console.dir(document);


console.dir(document.all);
console.dir(document.all[6]);
// console.dir(document.all[6].innerHTML);
// console.dir(document.all[6].innerText = "Hello DOM");
// console.dir(document.all[6].innerHTML = "Hello DOM");
// console.log(document.all[6].innerHTML = "Hello DOM");
console.log(document.all[6].innerHTML = "DOM Manipulation");


//_________getElementbyId________

// let get = document.getElementById(Para);
let get = document.getElementById('Para');

console.log(get);
console.dir(get);
console.dir(get.id);
console.dir(get.tagName);


// ________getElementByClass____________

let divClass = document.getElementsByClassName("divpara");

console.log(divClass);


// ________getElementByTagName__________

let getTag = document.getElementsByTagName("p");

console.log(getTag)
console.log(getTag[1]);
console.log(getTag[1].innerHTML = "abcd");
console.log(getTag[2].innerText = "efgh");


//_______Query Selectors__________

let querySelc = document.querySelector("p");
// let querySelc = document.querySelector("h1");

console.log(querySelc);
console.dir(querySelc);

let qs = document.querySelector("div p");

console.log(qs);
console.dir(qs);


//_______Query Selectors all__________

let qsa = document.querySelectorAll("div");

console.log(qsa);
console.dir(qsa);


let querySelcAll = document.querySelectorAll("p");

console.log(querySelcAll);