/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;             // variable has no value assigned 
console.log(a);


// Example 2
function sayHello() {
    let message = "Hello";     // no return value inside the function
}

let hello = sayHello();  
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);   // no argument
}

sayHelloToUser();


// Example 4
let arr = [1,2,3];    // index [3] not assigned the value in array
console.log(arr[3]);
