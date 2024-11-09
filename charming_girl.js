// let arr = ["delhi", "kolkata", "kotpuli", "narehda"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

// practice Q
/*let nums = [2, 3, 4, 5, 6];

let calcSquare = (nums) => {
    console.log(nums * nums);
};

nums.forEach(calcSquare);*/

// map arrary

// let nums = ["39", "40", "41"];

// let newArr = nums.map((val) => {
//     // console.log(val);
//     return val * 2
// });
// console.log(newArr);

////// filter arrary

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val) => {
//     // return val % 2 !== 0;  //old 
//     return val < 3;
// });
// console.log(evenArr);

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);

// practice Q

// let n = prompt("enter a number :");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = 1;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("sum = ", sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("factorial = ", factorial);

// Dom chapter

// console.dir(window.document);
// console.dir(document.body);
// console.dir(document.head);
// console.dir(document.body.childNodes[1]);
// document.body.style.background = "blue";
// document.body.childNodes[3].innerText = "abcd";/

// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let firstEL = document.querySelector("p"); //first element
// console.log(firstEL);

// let allEl = document.querySelectorAll("p"); //all elements
// console.log(allEl);

// practice Q

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "i am kotpuli";

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
//     div.innerText = 'new unique value ${idx}';
//     idx++;
// }

// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new class"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "pink";

// div.style.fontSize = "26";

// div.innerText = "Hello!";

// let newBtn = document.createElement("botton");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let p = document.querySelector("p"); //div, p
// p.after(newBtn); //append, prepand, before, after

// let newheading = document.createElement("hi");
// newheading.innerHTML = "<i>Hii, i am amit</i>"

// document.querySelector("body").prepend(newheading);

// let para = document.querySelector("p");
// para.remove();

// newheading.remove();

// Dom practice Q

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "blue";

// document.querySelector("body").prepend(newBtn);

// // Q 2

// let para = document.querySelector("p");

