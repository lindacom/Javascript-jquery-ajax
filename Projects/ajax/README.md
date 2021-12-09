make an ajax request to an api (vanilla javascript)
======================================================

```
// SEND AJAX REQUEST TO THE API (read the following code from bottom up)
const url = 'http://localhost:8090/api/customers';

const updateUISuccess = function(data) {
    console.log(data);
};

const updateUIError = function(error) {
    console.log(error);
};

// if request is ready and has status 200 call the function passing in request and response text
const responseMethod = function(httpRequest) {
    if(httpRequest.readyState === 4) {
        if(httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        } else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
}

const createRequest = function(url) {
    // make a new request and store i the httpRequest variable
    const httpRequest = new XMLHttpRequest(url);
    // listen for state change and call the responseMethod function
    httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
    // make a get request to the url
    httpRequest.open('GET', url);
    // send the get request
    httpRequest.send();    
};

// call the function passing in the url
createRequest(url);
```

updating the DOM
===================

```
const updateUISuccess = function(data) {
    console.log(data);

    // add a for loop
   var modify = document.getElementById("demo");
   modify.innerText += data;
};
```

Make a request to an api (Jquery)
==================================
```
// returns an array of objects
$.getJSON('http://localhost:8090/api/customers', function(data) {
console.log(data);
});
```

Loop through data (key value pairs) and add to DOM (Jquery)
=============================================================
```
$.getJSON('http://localhost:8090/api/customers', function(data) {
var output = '<ul>';
$.each(data, function(key, val) {
// returns the customer name property
    output += '<li>' + val.CustomerName + '</li>';
});
output += '</ul>';
// add the output to the dom
$('#demo').html(output);
});
```

bind using jquery keyup event
==================================
when search box is clicked  the function will run and display json data

$('#search').keyup(function() { 
$.getJSON('http://localhost:8090/api/customers', function(data) {
  //  console.log(data);
var output = '<ul class="searchresults">';
$.each(data, function(key, val) {
    output += '<li>';
    output += '<h2>' + val.CustomerName + '</h2>';
    output += '<img src="images/avatar.jpg" alt="' + val.CustomerName + '" style="width:250px"/>';
    output += '<p>' + val.town + '</p>';
    output += '</li>';
});
output += '</ul>';
$('#demo').html(output);
});
});

View requests and responses in the browser
=============================================
in the browser open developer tools
refresh the webpage
in dev tools go to the network tab

headers tab - shows requests and responses sent 
preview tab - shows the response (JSON)

Proxy servers explained
=========================
When making a request to an api using an api key that key is visible in developer tools and can be used by hackers.
To avoid this you could use a proxy srver

A proxy server is a web server that receives a request, makes some modification to it, and then forwards it. You can set up a proxy server to store
your api credentials and append them to requests that it receives.

the request in your application would target the proxy server that would add credentias and forward request to the api.
The proxy would also receive the response from the api and forward it to the client.
Therefore credentials do not pass through the browser and cannot be viewed by users.

Documentation
===============
Ajax (jquery) - https://api.jquery.com/category/ajax/
Jquery events - https://api.jquery.com/category/events/

