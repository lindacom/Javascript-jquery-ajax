Use Fetch API to request data
==============================

N.b. the first .then method needs to return the payload, the second .then method can work with the data.
N.b. every .then method needs to use return in order to pass data to the next method
N.b. fetch only catches request and response errors so you need to add your own handling methods (catch statement) (otherwise you get no data and no error)

```
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
```

Limit and offset pagination
============================
```
<button id="next">next</button>

<script>
var page = 1;
var limit = 12;
var offset = 0;

document.getElementById('next').addEventListener("click", function() {
 page ++;
offset = (limit * page) - limit;
  // call function that accesses the api
 getPage(page);
});
  
  </script>
```
