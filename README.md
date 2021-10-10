Variables and data strutures
============================
Sets - collection of unique values.  Methods that can be used ith et include .size and .has 

```
let books = new set();
books.add('history');
console.log(books);

```
Map - holds key value pairs. Use .set to set keys ad values Access items by using.keys or .values. Methods that can be used with map include .foreach

```
let course = new map();
course.set('java', {description: 'ui'});

```
Template strings - variables are displayed as ${variable}. When using in a sentece the string is wrapped around both the string text ad the variable using backticks.
The benefit of using a template string is that it recognises spacing and formatting  You also don'ot need to use th plus symbol to join string and text.
N.b. use to $$ symbols to display currency for a variable.

const - a variable which cannot be changed
let - changes pulic variable without affecting original variable value.

Arrays
======
Arrays are lists. JavaScript array methods are includes, some, every etc.

some() and every() return a boolean value and can be used to compare multiple items in array

Find only returns the coparison for one item in the array.

Spread operator - to add an array into another array use a spread operator (three dots). e.g. ["ham", ...name]

stacks and queues
-----------------
array methods are push and pop. The methods add and remove data from an array.

push - adds to end of array
pop - pops the last item out of the array

queue - first in, first out.  uses unshift and shift to add and remove from beginning of array.

Map
---
map - this method returns new array based on the function of each element in array. e.g.

```
movies = ["jaws", "thriller", "batman"];

const movieTitles = movies.map((movie)-> movie.title);

console.log(movieTitles);

```

Filter
------
e.g. return items that meet criteria

```
movies = ["jaws", "thriller", "batman"];

const films = movies.filter((movie) => movie.rating === PG-13;

console.log(films);

```

Reduce
-----
reduce each value returning single value. e.g. total all items in an array. Find out how many items meet criteria
The structure for the array method is as follows:

array.reduce(accumulator, current value, index, array), initial vaue

N.b. index, array and initial values are optional

```
const sales = [2.50, 4, 5.50, 1.75, 2, 2.50, 6];

const totalSales = sales.reduce((total, amound) => total + amount);

```
Te above returns const totalSales = 24.5

FlatMap
-------
Each item and flatten to one level

N.b. uses map then flat to reurn result.

Objects
=======

An object is a variable which can contain many values. Values are written as key value pairs and separated by a comma.  An object has properties and methods. Declare an object using the const keyword.

```
var colors = (
black:0,
white:255,
);
console.log(colors);

```
```
var colors = ();
colors.black = 0;
colors.white = 255;
console.log(colors.black);

```
object properties
------------------

You can access object properties using dot notation e.g. book.title
you can access object properties like book["title"]; also

Spread operator - you can use a spread operator ith objects.  The benefits are the items have their own keys rather than being nested within an array.

Object methods
-------------
Methods are stored in properties as function definitions.A method is a function stored as a property.

```
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

```

You access an object method with the following syntax: objectName.methodName()

classes
---------

Classes - create a class ith a constructor inside. Set properties with this e.g. this.desciption = description;To inherit a class use extends keyword. Create a method. 
You can use get and set methods on class values.

Functions
=========
Available functions include.map, .join

Asynchronous JavaScript
-----------------------
Promise - Promises re used to load data. Resolve is what happens when true then executes. 

Promise with fetch - you can retur proises with fetch function.  In a function enter:

```
fetch("http://example.com").then((res) => res.json() );

```

Fetch can be used instead of an http request.

Async - Async function uses the async keyword.  It waits for the function to complete before sending response using await keyword. The benefit is it uses less resources

Fetch with async/await:

```
const githubRequest = async(login) => {
let response = await fetch(`https://api.github/users/${login}`);
let json = await response.json();
let summary = `${json.name}, ${json.company}`;
console.log(summary);
};

```
To call enter:

```
githubRequest("githubusername");

```


Return JSON response from AJAX using jQuery and PHP
======================================================
```
$( document ).ready(function() {
  var api_url = 'http://example.com/wordpress/wp-json/wp/v2/posts'
 $.ajax({
        url: api_url,
        contentType: "application/json",
        dataType: 'json',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var date = response[i].date;
                var slug = response[i].slug;
                var excerpt = response[i].excerpt.rendered;
                
                

                var tr_str = "<tr>" +
                    "<td align='center'>" + (i+1) + "</td>" +
                    "<td align='center'>" + date + "</td>" +
                    "<td align='center'>" + slug + "</td>" +
                    "<td align='center'>" + excerpt + "</td>" +
                    
                    
                    "</tr>";

                $("#results").append(tr_str);       
                
        }    
        } 
    });
 });
 
```
 
 String methods
 ===============
 methods that can be used include .starts with, .ends with, .includes and .search.
 
 Client side storage
 ====================
 Web storage:
 Local storage - stores forever
 Session storage - stores unti browser is cloed
 
 IndexedDB - ful database with structured data with support for images. Has max local storage size
 indexed with key, object oriented.
 Web storage is used to set, remove or get data
 
 When to use
 no privacy, maintain state - use local storage e.g. shopping cart
 need privacy - session storage
 
 Session storage
-----------------
 
The localStorage and sessionStorage properties allow you to save key/value pairs in a web browser. The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed). LocalStorage stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

Saving data to session storage - sessionStorage.setItem("key", "value");

Reading data from session storage - var lastname = sessionStorage.getItem("key");

Remove item from session storage - sessionStorage.removeItem("key");

Clear all data from session storage - sessionStorage.clear();

IndexedDB
-------------
using dexie.js library

Dexie.js is a wrapper for indexedDB. see information at dexie.org

to use the library:

1. put script tag in the head of the htm file
2. initiate the database in the javascript file
3. view application > indexedDB in the browser

```
const db = new Dexie('MyDatabase');

db.version(1).stores({
  contacts: '++id', firstName, lastName'     // ++ means autoincrement
  });
  
  // add items
  
  db.contacts.put({
     firstName: "Manny", lastName: "henric"
     });
     
```     

Functions
=======================

Reload window on click
--------------------------

onClick="window.location.reload();

On click
--------
document.getElementById("btnBack").onclick = function () {
      window.history.back()
    };
    
    change innerhtml of multiple elements with same class
    ------------------------------------------------------
    
```
 var total = document.querySelectorAll('.total');
 
    total.forEach(function ( div ) {
      div.innerHTML += len;
});
```
on load
------------
run a function when page loads:

```
 window.onload = function getPage(page) {
 }
```

run a function when an image has finished loading:

```
<img id="myImage" src = ""></img>

const myImage1 = document.getElementById("myImage");
myImage1.addEventListener('load', function () {
alert("image loaded");
});
```

on focus
------------
clear input field value on focus:

```
var hobby = document.getElementById("hobby");
  hobby.onfocus = function(){hobby.value = '';};
```



url parameters
=====================
get parameter using window.location.search

1, create a url parameters object
2. get parameters needed by their name

```
const params = new URLSearchParams(window.location.search)
params.get('q');
```

N.b params.keys returns an iterator that allows you to loop over and extract the values

```
Array.from(params.keys()).reduce(acc, key) => ({
...acc, [key]: params.get(key) }), ());
```

on submit
----------

get url parameters on form submission and enter in text field

```
 document.getElementById("btnSubmit").onclick = function myFunction() {
   var myText = document.getElementsByClassName("bottom-right");

   const params = URLSearchParams(window.location.search)
var hello =  params.get('fname');

   myText.innerHTML = `Howdy ${hello}`;
    }
```

Error handling
==============
The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.
JavaScript Error object provides error information and has two properties: name and message.


Tutorials
==========
JavaScript tutorials:
https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc

url search parameters:
https://flaviocopes.com/urlsearchparams/

Set interval:
https://www.youtube.com/watch?v=rDPU5EYYXmg

Local storage:
https://www.youtube.com/watch?v=W8SFylZ8Jh4

Introduction to AJAX and JSON
https://www.youtube.com/watch?v=vz7_6y6zW_M

Introduction to JavaScript Fetch
https://developers.google.com/web/updates/2015/03/introduction-to-fetch
