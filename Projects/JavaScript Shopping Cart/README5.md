Filter, search, count
=====================

filter by top rated
----------------------
```
var topy = []; // array of each likes
var best = 0;

var match = []; // array of highest rated products (names)
var countz = 0;

function toprated() {
  
  for (var i = 0; i < products.product.length; i++) {
    // loop through products object and get the number of likes for each item 
    liker = products.product[i].likes;
  
   topy.push(liker);
   topy.sort().reverse(); // put all likes in an array and sort array of likes in descending order
  best = topy[0] // get the highest rated number from the sorted array
  }

  for (var j = 0; j < products.product.length; j++) {
  if(products.product[j].likes === best) { // find all products that have the highest rating
    var good = products.product[j].name; // get title 
    match.push(good);
    match.sort(); // add highest rated names to array and sort alphabetically
  }
}

for (var l = 0; l < names.length; l++) {
  var span = names[l].getElementsByClassName("shop-item-title")[0];  // get title of all products in the store
  txtValue = span.textContent || span.innerText || span.innerHTML;
  
  for (var m = 0; m < match.length; m++) { // loop through the highest rated product names
    // if array is empty don't display the remaining products
    if(match == '') {
      names[l].style.display = "none"; 
    }
    // if the counter of highest rated names looped has already been set increment it
    if (countz) {
      countz = countz + 1;
    }
   
// if the current highest rated product name matches the current product name display it
    if (match[m] === txtValue) { 
  names[l].style.display = "block";
  if(match.length > 1) {
    var pointer = match.indexOf(match[m]); // if matched find the name position in the array and remove it (so it is no longer in the loop)
    match.splice(pointer, 1);
  }
  
} else {
    
   if(countz == match.length || match.length == 1){ // if not matched and no more to loop through don't display 
    names[l].style.display = "none";
    countz = 0;
    } else {
      if(!countz){ // or if not matched and there is no counter set it to one (as the loop will continue)
      countz = 1;
      }
    }
  }
 
  }}



}
```
