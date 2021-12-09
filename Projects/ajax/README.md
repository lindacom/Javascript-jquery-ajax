make an ajax request to an api
================================

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
