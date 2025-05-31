let i = 0;
const id = setInterval(() => {
  setTimeout(() => {
    console.log("timeout");
    clearInterval(id);
  }, 5000);
  console.log(i);
  i++;
}, 5000);
