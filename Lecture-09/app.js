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
// let get = document.getElementById('Para');

// console.log(get);
// console.dir(get);
// console.dir(get.id);
// console.dir(get.tagName);


// ________getElementByClass____________

let divClass = document.getElementsByClassName("divpara");

console.log(divClass);


// ________getElementByTagName__________

// let getTag = document.getElementsByTagName("p");

// console.log(getTag)
// console.log(getTag[1]);
// console.log(getTag[1].innerHTML = "abcd");
// console.log(getTag[2].innerText = "efgh");


//_______Query Selectors__________

// let querySelc = document.querySelector("p");
// let querySelc = document.querySelector("h1");

// console.log(querySelc);
// console.dir(querySelc);

// let qs = document.querySelector("div p");

// console.log(qs);
// console.dir(qs);


// //_______Query Selectors all__________

// let qsa = document.querySelectorAll("div");

// console.log(qsa);
// console.dir(qsa);


// let querySelcAll = document.querySelectorAll("p");

// console.log(querySelcAll);


// //______Using Properties and Methods_________

// // 1. innerText

// let q = document.querySelector("p");
// console.log(q);
// let qinnerTxt = q.innerText; 
// console.log(qinnerTxt); 

// // 2. innerHtml

// let qh = document.querySelector("p");
// console.log(qh);
// let qinnerTxth = q.innerHTML; 
// console.log(qinnerTxth);

// // 3. textContent

// let c = document.querySelector("p");
// console.log(c);
// let qinnerTxtc = q.textContent; 
// console.log(qinnerTxtc); 


// //___________Manipulating Attributes__________

// // getAttribute

// let getter = document.querySelector("span");
// // console.log(getter);

// let getter1 = getter.getAttribute('id');
// console.log(getter1);


// // setAttribure

// let setter = getter.setAttribute('id', 'folder');

// console.log(setter);


// // _________Manipulating Style______________

// let heading = document.querySelector('h1');

// let headingStyle = heading.style.color = 'red';

// let headingStylebg = heading.style.backgroundColor = 'yellow';

// console.log(heading);


// //______using classList_________


// let clasList = document.querySelector('span');

// let clasList1 = clasList.classList

// console.log(clasList1);


// let heading2 = document.querySelector('h1');

// let head = heading2.classList;

// console.log(head);

// for Adding class

// let heading2 = document.querySelector('h1');

// let head = heading2.classList.add('abcd');

// let head1 = heading2.classList

// console.log(head);
// console.log(head1);

// for removing

// contains

// let heading2 = document.querySelector('h1');

// let head = heading2.classList.contains('ab');

// let head1 = heading2.classList

// console.log(head1);
// console.log(head);

// toggle ==> switch

// let heading2 = document.querySelector('h1');

// // let head = heading2.classList.toggle('abcd');
// let head = heading2.classList.toggle('xyz');

// let head1 = heading2.classList

// console.log(head1);
// console.log(head);


//_______________Navigation___________

// parentElement

// let h2 = document.querySelector('h2');

// let h2kabap = h2.parentElement;

// console.log(h2kabap);
// console.log(h2);

// children

// let h2 = document.querySelector('h2');

// let h2kabap = h2.children;

// console.log(h2kabap);
// console.log(h2);

// let bap = document.querySelector('div');

// let bapkbachy = bap.children;

// console.log(bapkbachy);

// child count

// let bap = document.querySelector('div');

// let bapkbachy = bap.childElementCount;

// console.log(bapkbachy);


//previousElementSibling

// let bhai = document.querySelector("p");

// let bigbro = bhai.previousElementSibling;

// console.log(bigbro);


//nextElementSibling

// let bhai = document.querySelector("h2");

// let bigbro = bhai.nextElementSibling;

// console.log(bigbro);


// __________________Adding Element______________

// creatElement

// let newP = document.createElement("p");
// console.log(newP);

// newP.innerText = "Hi.. I am new Para";
// console.log(newP);
// console.dir(newP);


// for insertind new element

// appendChild

// let body = document.querySelector('body');

// body.appendChild(newP);

// console.log(body);

// let div = document.querySelector('div');

// div.appendChild(newP);

// // // console.log(div);

// div.append("recently i am created");

// console.log(div);


// _______Removing Element_______

// div.removeChild('p');

// console.log(div);

// p.remove();
// div.remove();

// body.remove();


// ______Practice Qs____________

let para1 = document.createElement('p');
para1.innerText = "hey this is red";
document.querySelector("body").appendChild(para1);


let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I am in a div";
para2.innerText = "me too";

div.append(h1);
div.append(para2);

document.querySelector("body").appendChild(div);
document.querySelector("body").append(div);
document.querySelector("body").prepend(div);