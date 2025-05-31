let i = 0;
let j = 1;

setInterval(() => {
  if (j == 6) return;
    console.log(j);
    j++;
}, 1000);

const id = setInterval(() => {
  setTimeout(() => {
    console.log("timeout");
    clearInterval(id);
  }, 5000);
  console.log(i);
  i++;
}, 5000);
