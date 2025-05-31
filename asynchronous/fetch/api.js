/*
The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

 It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers

*/
// return a promise
// then method is called on promise
// json return a promise, call then method again on it
// Whatever we return from then it becomes the fulfilled value of promise
// const request = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => {
//     // res is the response
//     console.log(res);
//     // json returns a new promise
//     return res.json();
//   })
//   .then((data) => console.log(data));
// // This logs the Promise return by fetch
// console.log(request);



// asycn await
async function fn() {
    // await will stop the code execution until promise is fulfilled
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res);
    const data = res.json()
    console.log(data);
    // code bewlo await is only executed when the async operations are completed
    console.log("execute only after promises");
}
fn();
console.log("hello");