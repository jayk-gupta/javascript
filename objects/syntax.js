// Objects(instances) are instantiated from a class, which functions like a blueprint

const Person = function (firstName, age) {
    console.log(this);
    this.firstName = firstName
    this.age = age 
};

const person = new Person("jay", 23);
console.log(person);
// 1. new empty object is created
//  2. function is called , this = new empty object
//  3. new object is linked to prototype
//  4. returned from constructor function
