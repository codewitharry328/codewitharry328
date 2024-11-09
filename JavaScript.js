// const student = {
//     fullName: "Beautyfull",
//     Mark: 94.4,
//     printMark: function() {
//         console.log("Mark = ", this.Mark); // Fixed 'Mark' case sensitivity
//     }
// };

// student.printMark(); // Call the method to print the mark


// const employee = {
//     calcTax1() {
//         console.log("Tax rate is 10%");
//     },
//     // calcTax2: function() {
//         // console.log("Tax rate is 20%");
//     // },
// };

// const KaranArjun = {
//     salary: 4000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     }
// };

// KaranArjun.__proto__ = employee;
// KaranArjun2.__proto__ = employee;
// KaranArjun3.__proto__ = employee;
// KaranArjun4.__proto__ = employee;


// class Toyotacar {
//     Start() {
//         console.log("Start");
//     }

//     Stop() {
//         console.log("Stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand;
//     }

//     getBrand() {
//         return this.brandName;
//     }
// }

// let fortuner = new Toyotacar();
// fortuner.Start(); // Just call Start without passing any argument
// fortuner.setBrand("Fortuner");
// console.log(fortuner.getBrand()); // Output: Fortuner

// let lexus = new Toyotacar();
// lexus.setBrand("Lexus");
// console.log(lexus.getBrand()); // Output: Lexus


// class parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class child extends parent {}

// let obj = new child();


// class Person {
//     constructor(Name) {
//         // console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(Name) {
//         // console.log("enter child constructor");
//         super(Name);      // to invoke parent class construtor 
//         this.branch = branch;
//         // console.log("exit child constructor");
//     }

//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engobj = new Engineer("shradha");  // not worked

// let practice Q

// let DATA = "secret information";

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data =", DATA);
//     }
// }

// class Admin extends user {
//     constructor(name, email) {
//         super(name, email);
//     }

//     editData() {
//         DATA = "some naw value";
//     }
// }

// let student1 = new user("Amit", "mea55629@gmal.com");
// let student2 = new user("meena", "mea562734@gmal.com");

// let Teacher3 = new user("divya", "mea123456@gmal.com");

// let admin1 = new Admin("admin", "Admin@college.com");

// Js error

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// try {
//     console.log("a + b = ", a + c); // error
// } catch(err) {
//     console.log(err);
// }
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);

// Js in sync

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 3000); //timeout

// same Q

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 7000);

// console.log("three");
// console.log("four");  // Asynchronous

// callback

// function sum(a, b) {
//     console.log(a + b);
// }

// function culculator(a, b, sumcallback) {
//     sumcallback(a, b);
// }

// culculator(1, 2, (a, b) => {
//     console.log(a + b);
// });


// const hello = () => {
//     console.log("hello");
// };
// setTimeout(hello, 3000);

// nesting if

// let age = 19;
// if (age >= 18) {
//     if (age >= 40) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");  // if ke ander hi if else ko likhvana nesting kahlata hai
// };

//  nesting loop

// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {  // Changed i++ to j++
//         str = str + j;
//     }
//     console.log(i, str);
// }



// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// /// callback hell
// getData(1, () => {
//     console.log("getting data2 ....");
//     getData(2, () => {
//         console.log("getting data3 ....");
//         getData(3, () => {
//             console.log("getting data4 ....");
//             getData(4);
//         });
//     });  
// });





