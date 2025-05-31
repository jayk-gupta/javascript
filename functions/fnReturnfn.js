const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greet2 = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

const fn = greet("hey")
fn("jay");
greet("hello")("ram")
greet2("bonjour")("alex")