//____________________________Axios____________________________

// ***With fetch***

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact)
//   } catch (error) {
//     console.log("Error ", error)
//   }
// console.log("bye")
// }

// ***With Axios***

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//   try {
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//   } catch (error) {
//     console.log("error - ", error);
//   }
// }

//_____________________Show New Facts cats(Mini Project)___________________

// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//   let fact = await getFacts();
//   // console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
//   // console.log("Button was clicked")
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (error) {
//     console.log("error - ", error);
//     return "No Fact found"
//   }
// };

//__________________________Dog images (Mini Project)______________________

// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//   // console.log("Button was clicked");
//   let link = await getImg();
//   console.log(link);
//   let img = document.querySelector("#result");
//   img.setAttribute("src", link);
// });

// async function getImg() {
//   try {
//     let res = await axios.get(url);
//     // return res.data.fact;
//     return res.data.message;
//   } catch (error) {
//     console.log("error - ", error);
//     return "/";
//   }
// };

//_______________________Sending header with API request______________________

// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//   try {
//     const config = {headers : {Accept:"application/json"} };
//     let res = await axios.get(url, config);
//     console.log(res.data);
//   } catch (error) {
//     console.log("Error - ", error)
//   }
// }

//________________________Activity using Query Strings___________________________

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country)
  let colArr = await getColleges(country);
  // console.log(colArr);
  // console.log("Button Was clicked")
  show(colArr);
});

function show(colArr){
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr){
    console.log(col.name);

    let li  = document.querySelector("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

// let country = "nepal";
// let country = "pakistan";
// let city = "karachi";

async function getColleges(country) {
  try {
    // let res = await axios.get(url+country);
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log("Error - ", error);
    return []
  }
}

//
