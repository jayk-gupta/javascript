// The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

// let i = 0;
// setInterval(() => {
//   if (i == 5) return;
//   console.log(i);
//   i++;
// }, 1000);


setInterval(() => {
     let i = 0;
     if (i == 4) return;
     console.log(i);
     i++;
}, 1000)


const date = new Date(); // current date
const date2 = Date.now(); //time stamp
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date2);

// const birthday = new Date(1995, 11, 17, 3, 24, 0);
// console.log("birthday "+ birthday);\
// setInterval(() => {
//   let date3 = new Date();
//   console.log(date3.getHours(),date3.getMinutes(),date3.getSeconds());  
// }, 1000);