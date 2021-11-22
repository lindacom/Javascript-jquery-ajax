Asynchronous programming - async await
=======================================

There are two parts of using async/await: the async keyord and the await keyword

Async
======
You put this keyword in front of a function declaration to turn it into an async function. 
An async function returns a promise rather than directly returning the value.

In the console examine these two different function calls:

```
function hello() {return "Hello"};
hello();
```

```
async function hello() {return "hello"};
hello();
```

The async function returns a promise. (the return value is converted to a promse).

To consume the value returned when the promise fulfills use a then() block

```
hello().then((value) => console.log(value));

async function exression
------------------------

```
lt hello = async funcion() {return "hello"};
hello();
```

arrow functions
---------------
```
let hello = async () => "Hello";
```

Await
========
Await only works inside async functions within regular JavaScript code (however it can be used on its own with JavaScript modules)

await can be put in front of any async promise-based function to pause the code on that line until the promise fulfils, then return the resulting value.

Tutorial
==========
async await https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await 
