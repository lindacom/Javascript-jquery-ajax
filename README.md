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
course.set('java', {description: 'ui'})
```
Template strings - variables are displayed as ${variable}. When using in a sentece the string is wrapped around both the string text ad the variable using backticks.
The benefit of using a template string is that it recognises spacing and formatting  You also don'ot need to use th plus symbol to join string and text.
N.b. use to $$ symbols to display currency for a variable.

const - a variable which cannot be changed
let - changes pulic variable without affecting original variable value.

Arrays
======
Spread operator - to add an array into another array use a spread operator (three dots). e.g. ["ham", ...name]

Objects
=======
You can access object properties using dot notation e.g. book.title
Spread operator - you can use a spread operator ith objects.  The benefits are the items have their own keys rather than being nested within an array.

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
 
 Session storage
 ===============
 
The localStorage and sessionStorage properties allow you to save key/value pairs in a web browser. The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed). LocalStorage stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

Saving data to session storage - sessionStorage.setItem("key", "value");

Reading data from session storage - var lastname = sessionStorage.getItem("key");

Remove item from session storage - sessionStorage.removeItem("key");

Clear all data from session storage - sessionStorage.clear();

Reload window on click
=======================

onClick="window.location.reload();
 


Tutorials
==========

url search parameters:
https://flaviocopes.com/urlsearchparams/

Set interval:
https://www.youtube.com/watch?v=rDPU5EYYXmg

Local storage:
https://www.youtube.com/watch?v=W8SFylZ8Jh4

Introduction to AJAX and JSON
https://www.youtube.com/watch?v=vz7_6y6zW_M
