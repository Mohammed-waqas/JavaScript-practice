var fullName = "Muhammad waqas";
var fullName = "Muhammad zawr";
//console.log(fullName);

// var : Variable can be re-declared & updated. A global scope variable.

let age = 25;
    age = 30;
//console.log(age);

// let : Variable cannot be re-declared but can be updated. A block scope variable.

const PI=3.14;
console.log(PI);
// const : Variable cannot be re-declared or updated. A block scope variable.

//Data Types in Js
//Primitive Datatypes = Number, String, Bolean , BigInt, Symbol, Undefine , Null
//Non Primitive Datatypes = Object (Function, Array)

/* let Name = "Muhammad Waqas";
console.log(typeof Name)
 */

/* isFollow = false;
console.log(typeof isFollow) */

/* let x = null;
console.log( x)
console.log(typeof x) */

const Student ={
    Name : "Muhammad Waqas",
    age : 24,
    cgpa : 2.4,
    ispassed: true
}
//Student["age"] = Student["age"] + 1;
Student["Name"] = "Muhammad Zawar";
console.log(Student["Name"]);
