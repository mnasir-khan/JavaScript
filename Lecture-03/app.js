// STRING METHODS

// Trim Method

// let pass = prompt("Enter Password");

// let newPass = pass.trim();

// console.log(newPass);

// console.log(pass);

// toUpperCase and toLowerCase

// let msg = "Nasir Khan";

// let msgUpp = msg.toUpperCase();

// console.log(msgUpp);

// let msgLower = msg.toLocaleLowerCase();

// console.log(msgLower);

// console.log(msg);


//*********Methods with arguments */

// indexOf()

// let msg = "ILovePakistan";
// let msg1 = msg.indexOf("Love");
// let msg2 = msg.indexOf("Karachi");
// let msg3 = msg.indexOf("p");
// let msg4 = msg.indexOf("P");
// console.log(msg);
// console.log(msg1);
// console.log(msg2);
// console.log(msg3);
// console.log(msg4);


// slice

// let msg = "ilovePakistan";

// let msg1 = msg.slice(0, 5);
// let msg2 = msg.slice(5);
// let msg3 = msg.slice(-4);

// console.log(msg);
// console.log(msg1);
// console.log(msg2);
// console.log(msg3);



// replace

// let str = "IlovePakistan";

// let str1 = str.replace("Pakistan", "Karachi");

// console.log(str);
// console.log(str1);


// repeate

// let str = "Mango";
// let str1 = str.repeat(5);

// console.log(str1);
// console.log(str)


// Practice Qs
// Q1
// let msg = 'help!';

// let msg1 = msg.trim().toUpperCase()
// console.log(msg);
// console.log(msg1);


//Q 2

// let name = "ApnaCollege";

// let name1 = name.slice(4,9);

// let name2 = name.indexOf("na");

// let name3 = name.replace("Apna", "Our")

// console.log(name);
// console.log(name1);
// console.log(name2);
// console.log(name3);

// Q3

// let str = "ApnaCollege";
// let str1 = str.slice(4).replace("l", "t").replace("l", "t");

// console.log(str);
// console.log(str1);



//*****Array */

// let studen1 = "ahmed";
// let studen2 = "ali";
// let studen3 = "umar";

// let students = ["ahmed", "ali", "umar"];

// let students1 = students[1];
// console.log(studen1);
// console.log(studen2);
// console.log(studen3);

// console.log(students);
// console.log(students1);


// creating Arrays

// let names = ["nasir", "rehman", "khan"];
// let nums = [10, 49, 70];
// let info = ["nasir", 86, 10, 10.4];
// let newArr = [];

// let arr = ['apple', 'banana', 'mango'];
// console.log(arr);

//  arr[0] = 'orange';
 
//  console.log(arr);


 // Array Methods
 
  // let fruits = ['apple', 'mango', 'banana'];
 // //  console.log(fruits);
 
 //  let addFru = fruits.push('orange');
 
 //  console.log(fruits);


// let fruits = ['apple', 'mango', 'banana'];

// let fru = fruits.pop();

// console.log(fruits);
// console.log(fru);

// let fruits = ['apple', 'mango', 'banana'];
// let fru = fruits.unshift('orange');

// console.log(fruits);
// console.log(fru);

// let fruits = ['apple', 'mango', 'banana'];
// let fru = fruits.shift();

// console.log(fruits);
// console.log(fru);

// Practice Qs

// let months = ["january", "july", "march", "august"];

// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");

// console.log(months)


//indexOf()

// let fruits = ['apple', 'mango', 'banana'];

// let newfru = fruits.indexOf("mango");
// let newfru = fruits.indexOf("orange");
// console.log(fruits);
// console.log(newfru);


// includes

// let fruits = ['apple', 'mango', 'banana'];
// // let newfru = fruits.includes('mango');
// let newfru = fruits.includes('orange');

// console.log(fruits);
// console.log(newfru);


// concat

// let primary = ["red", "yellow", "green"];
// let secondary = ["blue", "white", "black"];


// reverse

// // let mix = primary.concat(secondary);
// let mix = primary.reverse();
// let mix1 = secondary.reverse();

// console.log(mix)
// console.log(mix1)

// slice in array

// let colors = ["red", 'blue', 'yellow', 'white', 'black', 'orange'];

// let upcolor = colors.slice();
// let upcolor = colors.slice(2);
// let upcolor = colors.slice(2, 5);
// let upcolor = colors.slice(-2);

// console.log(colors);
// console.log(upcolor);


// splice in array

// let colors = ["red", 'blue', 'yellow', 'white', 'black', 'orange'];
// // let upcolor = colors.splice(5);
// // let upcolor = colors.splice(1, 2);
// let upcolor = colors.splice(0, 2, "pink", "purple");

// console.log(upcolor);
// console.log(colors);


// sort in arrays

// let char = ['a', 'c','d','e','b'];

// let sortcha = char.sort();
// console.log(char);
// console.log(sortcha);


// Practice Qs

// let months = ["january", "july", "march", "august"];

// let upmnth = months.splice(0, 2, "july", "june");

// console.log(months);
// console.log(upmnth);

// let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

// // let newLang = lang.reverse();
// let newLang = lang.reverse().indexOf('javascript');

// console.log(lang);
// console.log(newLang);


//Nested Arrays

// let arr =[[2,3], [5,6], [8,9]];

// console.log(arr)
// console.log(arr[0])
// console.log(arr[0][1])


//const in Arrays

// const arr =[2,3,4,5];

// arr.push(6);
// arr.pop();

// console.log(arr)