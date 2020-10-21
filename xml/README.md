How to access xml file 
=======================

Javascript
----------

```
// set request object

var request;

if (window.XMLHTTPRequest) {
request = new XMLHttpRequest();
} else {
request = new ActiveXObject("Microsoft.XMLHTTP");
}

// send request

request.open('GET', 'myfile.xml');

request.onreadystatechange = function () {

if((request.readyState === 4) &&
    (request.status === 200)) {
    
    // get response
    
    var items = request.responseXML;
    
    // add response to an html element
    
    document.getElementById('result').innerHTML = items;
    
    }
    
    }
    
    // send the resonse
    request.send();
    
```

Get elements
-----------

var id = request.responseXML.getElemetsByTagName('id');

var id = request.responseXML.getAttribute('value');

loop through elements
----------------------
var output = '';

for (var i = 0; i < items.length; i++) {
output += items[i].firstChild.nodeValue
   }




