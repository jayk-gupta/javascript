let i = 0;

const id = setInterval(() => {
  console.log(i);
//   function add() {
//     const a = 1;
//     const b = 4;
//     console.log(a + b);
//   }
//   add();
  i++;
}, 5000);

setTimeout(() => {
  clearInterval(id);
  console.log("timeout");
}, 5000);






















// setInterval(() => {
//   if (j == 6) return;
//   console.log(j);
//   j++;
// }, 1000);
