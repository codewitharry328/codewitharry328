// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         let mea = "Promise resolved"; // Define mea or use a different value
//         resolve("success");
//         // reject("network error");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// })


// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("succcess");
//         }, 5000);
//     });
// }

// console.log("faching data1....");
// asyncFunc1().then((res)=> {
//     console.log("faching data2....");
//     asyncFunc2().then((res) => {});
// });

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("succcess");
//         }, 5000);
//     });
// }

// async function hello() {
//     console.log("hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if (getNextData) {
//                 getNextData();
//             }
//             resolve("success");
//         }, 2000);
//     });
// }

// // async await
// async function getDataAll() {
//     console.log("getting data1 ....");
//     await getData(1);
//     console.log("getting data2 ....");
//     await getData(2);
//     console.log("getting data3 ....");
//     await getData(3);
//     console.log("getting data4 ....");
//     await getData(4);
//     console.log("getting data5 ....");
//     await getData(5);
// }

// (async function () {
//     console.log("getting data1 ....");
//     await getData(1);
//     console.log("getting data2 ....");
//     await getData(2);
//     console.log("getting data3 ....");
//     await getData(3);
//     console.log("getting data4 ....");
//     await getData(4);
//     console.log("getting data5 ....");
//     await getData(5);
// })();

// // promise chain
// console.log("getting data1 ....");
// getData(1).then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);
// }).then((res) => {
//     console.log("getting data3 ....");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })


const URL = "https://cat-fact.herokuapp.com";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); // Json format
    let data = await response.json();
    console.log(data[1].text);
};

/// promise chaining
// function getFacts() {
//     fetch(URL)
//     .then((Response) => {
//         return Response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data[1].text);
//     });
// }

btn.addEventListener("click", getFacts);
