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
