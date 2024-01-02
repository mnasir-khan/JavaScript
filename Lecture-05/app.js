// creating object literals

const student = {
    name : "ahmad",
    city : "Karachi",
    age : 24,
    marks : 90
}


console.log(student);

let stud = ['ahmad', 'karachi', 24, 90];

console.log(stud);


const post = {
    username : "@nasirkhan",
    content : "This is my #first_post",
    likes : 150,
    tags : ["@khan", "@ahmad", "@ali"],
    repost : 5
}

console.log(post);


// conversion in get value

let obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : 'f',
}

console.log(obj);


// add and update value

const student1 = {
    name : 'shradha',
    city : "dehli", 
    marks : 94,
    age : 23,
    fav : "biryani"
}
// student1.city = "Mumbai";
student1["city"] = "Mumbai";
// student1.gender = "female";
student1["gender"] = "female";
student1.marks = "A";
delete student1.fav;

console.log(student1);


// objects of objects

let studentsinfo = {
    aman : {
        grade : "A+",
        city : "dehli"
    },
    shradha : {
        grade : "A",
        city : "Pune"
    },
    karan : {
        grade : "O",
        city : "Mumbai"
    }
}

console.log(studentsinfo);


// array of objects

const classInfo = [
    {
        name : "aman",
        city : "dehli",
        grade : "A+"
    },
    {
        name : "shradha",
        city : "pune",
        grade : "A"
    },
    { 
        name : "Karan",
        city : "Mumbai",
        graden : "O"
    }
]

console.log(classInfo);


// Math objects

// let math = Math;
// let math = Math.PI;
// let math = Math.E;
// let math = Math.floor(4.5);
// let math = Math.floor(4.8);
// let math = Math.ceil(4.8);
// let math = Math.ceil(4.2);

let math = Math.random();
console.log(math);
console.log(math);


// random integers (from 1 to 10)

let num = Math.random();

num = num * 10;

num = Math.floor(num);

num = num + 1;


console.log(num);

let random = Math.floor(Math.random() *10) + 1;

console.log(random);


// practice Qs

let num1 =Math.floor( Math.random() * 100) + 1;
console.log(num1);

let numb =Math.ceil( Math.random() * 5);
console.log(numb);