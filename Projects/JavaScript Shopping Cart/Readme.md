Products page functionality
===========================
create an object
=================
```
const products = {
  product: [
    { name: "Mince", image: "/images/mince.jpg", price: 2.74, likes: 1, category: "meat" },
    { name: "Chocolate", image: "/images/chocolate.jpg", price: 2.00, likes: 3, category: "sweets" },
    { name: "Lemon", image: "/images/lemon.jpg", price: 0.30, likes: 5, category: "fruit" },
    { name: "Lemonade", image: "/images/lemonade.jpg", price: 0.90, likes: 2, category: "drinks" },
  ],
}
```
set all variables at once
--------------------------
```
for (var i = 0; i < products.product.length; i++) {

  var { name, image, price, likes, category } = products.product[i]; 
  }
```

get the value from a hash parameter
=====================================
```
var type = window.location.hash.split('#');
var newy = type[1];
console.log(newy);
```
Button click 
============

alert
------
```
<button class="hollow-button" id="shopFavourites" data-url="favourites.html">shop from favourites</button>
```
```
document.getElementById("shopFavourites").onclick = () => {
  alert("hello");
}
```
change url
-----------
```
document.getElementById("shopFavourites").onclick = () => {
  window.location = "payment.html";
}
```

Show/hide alert message
-------------------------
```
  if(heart.style.color === 'black') {
    heart.style.color = 'green';
   // alert
   var alert = document.getElementById("alert");
   setTimeout(function() {alert.style.display = "block";}, 600);
   setTimeout(function() {alert.style.display = "none";}, 3000);
 ```
 
 Search and filter functionality
 ================================

Search filter
--------------
```
// captures typed characters (event) in searchbox

const searchBox = document.getElementById('search_box');

// when user types in searchbox get vlue and change to uppercase
searchBox.addEventListener('keyup', (e) => {
  var filter = e.target.value.toUpperCase();

  var names = document.getElementsByClassName('shop-item');
  // loop over items and get the title
  for (var i = 0; i < names.length; i++) {
    span = names[i].getElementsByClassName("shop-item-title")[0];
    txtValue = span.textContent || span.innerText || span.innerHTML;
    
    //checks if search is contained in the list value
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      names[i].style.display = "";
    } else {
      names[i].style.display = "none";
    }
  }

})
```
Display top rated products
---------------------------
```
function toprated() {

  for (var i = 0; i < products.product.length; i++) {
    // loop through products object and get the number of likes for each item 
    liker = products.product[i].likes;

    topy.push(liker);
    topy.sort().reverse(); // put all likes in an array and sort array of likes in descending order
    best = topy[0] // get the highest rated number from the sorted array
  }

  for (var j = 0; j < products.product.length; j++) {
    if (products.product[j].likes === best) { // find all products that have the highest rating
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
      if (match == '') {
        names[l].style.display = "none";
      }
      // if the counter of highest rated names looped has already been set increment it
      if (countz) {
        countz = countz + 1;
      }

      // if the current highest rated product name matches the current product name display it
      if (match[m] === txtValue) {
        names[l].style.display = "block";
        if (match.length > 1) {
          var pointer = match.indexOf(match[m]); // if matched find the name position in the array and remove it (so it is no longer in the loop)
          match.splice(pointer, 1);
        }

      } else {

        if (countz == match.length || match.length == 1) { // if not matched and no more to loop through don't display 
          names[l].style.display = "none";
          countz = 0;
        } else {
          if (!countz) { // or if not matched and there is no counter set it to one (as the loop will continue)
            countz = 1;
          }
        }
      }

    }
  }



}
```

Sort product names alphabetically 
----------------------------------
```
function alphabetical() {
  switching = true;
   /* Make a loop that will continue until no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
     // Loop through products div collection:
  for (let l = 0; l < names.length; l++) {
     // start by saying there should be no switching:
    
    let a = getProductLabel(names[l]);

    let b = getProductLabel(names[l + 1]);

    if (a > b) {
      names[l].parentNode.insertBefore(names[l + 1], names[l]);
      switching = true;
    }
  }
  }
}


function getProductLabel(div) {
  var span = div.getElementsByClassName("shop-item-title")[0];  // get title of all products in the store
  return span.textContent || span.innerText || span.innerHTML;
}
```
count items in session storage
------------------------------
```
function updateBadge() {
    badgeCount = JSON.parse(sessionStorage.getItem("allItems"));
   document.getElementById("badge").innerHTML = badgeCount.length;
}
```
Events
=========
Change colour of icon on click
---------------------------------
```
 <span class="heart" style="position:absolute; top: 8px; right: 5px;"><a href="javascript:void(0);" style="cursor:default";><i class="far fa-heart fa-2x"></i></a></span>
```
```
// listen for when the heart icon is clickd
var favourite = document.getElementsByClassName("heart");
for (var j = 0; j < favourite.length; j++) { 
  favourite[j].onclick = function() {
    var heart = this.children[0];
    console.log(heart);
    heart.style = "color:green";
    }
}
```

Toggle colour of icon on click
-------------------------------
```
// FAVOURITES - listen for when the heart icon is clickd and change colour
var favourite = document.getElementsByClassName("heart");

for (var j = 0; j < favourite.length; j++) { 
  favourite[j].onclick = function() {
    var heart = this.children[0]; // acces the property that can change colour
   // console.log(heart);
  //  heart.style = "color:green";

  if(heart.style.color === 'black') {
    heart.style.color = 'green';
  } else {
    heart.style.color = 'black'
  }
    }
}
```
show and hide alert in specified time
--------------------------------------
```
  setTimeout(function () { alertMsg.style.display = "block"; }, 600);
            setTimeout(function () { alertMsg.style.display = "none"; }, 3000);
```

Remove from array if it exists
---------------------------------
```
    for (var i = 0; i < favourites.length; i++) { 
                if (favourites[i] === heartTitle) { 
favourites.splice(i, 1);
}
}
```
compare two arrays for common items
----------------------------------
```
if(array1){
    // Loop for array1
for (var i = 0; i < array1.length; i++) {
    // Loop for array2
    for (var j = 0; j < array2.length; j++) {

        // Compare the element of each and every element from both of the arrays
        if (array1[i] === array2[j].name) {

            // creates an array of objects
            savedFav.push(array2[j]);
            //  savedFav.push(array2[j].name + array2[j].price + array2[j].likes);
               }
    }
}
}
```
On hover (mouseover)
---------------------
```
document.getElementById("cart").addEventListener("mouseover", (e) => {
 e.target.setAttribute("alt", "hi there");
 alert("hovered");
});
```
on click of X (clear button) in search box reload page
```
// N.b. but error is it also fires for pressing enter 
if(searchBox){
searchBox.addEventListener('search', function (e) {
  window.location.reload();  
});
}
```

Star favourites rating
======================
```
for (var i = 0; i < products.product.length; i++) {
  // Create five stars with unique id for each product - product name+stars
 var stars =  '<li id="'+ name + 'stars"><span><i class="fa fa-star fa-w-18  checked"></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span></li>';
```
```
// STARS - loop through products and stars

 var liked = '';
for (var i = 0; i < products.product.length; i++) {
  // get the number of likes for each item
  liked = products.product[i].likes; 

  // get product name
  var named = products.product[i].name;
  
  // get a unique identifier for each product - product name + stars
 var mystar = document.getElementById(`${named}stars`);
 
   // loop over the five star icons 
  for (var j = 0; j <= liked -1; j++) {  
 // colour number of likes
mystar.children[j].style = "color:red";
  }
}
```

Reduce and increase quantity buttons
=============================
```
  <span class="minus"><a href="javascript:void(0);" style="cursor:default;"><i class="fa fa-minus"></i></a></span>
  <span><input type="text" class="prodQuantity" id="prodQuantity" name="prodQuantity" value="1" placeholder="1" style="width:50px;margin:20px" /></span>
  <span class="plus"><a href="javascript:void(0);" style="cursor:default";><i class="fa fa-plus"></i></a></span>
  
```
```

// listen for when the input field is changed and disable min/max

  var inptQuant = document.getElementsByClassName("prodQuantity");
  var btnMinus = document.getElementsByClassName("minus"); 
  var btnPlus = document.getElementsByClassName("plus"); 
// listen for when the input field is changed
  for (var j = 0; j < inptQuant; j++) { 
    inptQuant[j].addEventListener("change", (event) => {
      var myQuant = inptQuant[j].value;
     console.log(myQuant);

  });
}


// listen for when the plus button is clicked
for (var j = 0; j < btnPlus.length; j++) { 
btnPlus[j].onclick = function() {
//  event.preventDefault();
var more = this.previousSibling.children[0].value; // gets value of quantity input box

var increasedValue = (parseInt(more) + 1); // value plus one

var inc = this.previousSibling.children[0]; 

if(inc.value >= 5) {
  alert("you cannot add any more");
} else {
  alert("increase quantity?");
  inc.value = increasedValue;
}
}
}

// listen for when minus buttons clicked 
for (var i = 0; i < btnMinus.length; i++) {
  btnMinus[i].onclick = function() {
  //  e.preventDefault();
    
    var less = this.nextSibling.children[0].value; // gets value of quantity input box
    var reducedValue = less - 1; // value minus one

  var red = this.nextSibling.children[0];  

  if(red.value <= 1) {
    alert("you cannot reduce any more");
  } else {
    alert("reduce quantity?");
    red.value = reducedValue;
  }
    
   
  }
}
```

Add to cart
============
```
// ADD TO CART - listen for when purchase button clicked and get item info
var btnPurchase = document.querySelectorAll(".shop-item-button");
for (var i = 0; i < btnPurchase.length; i++) {
  btnPurchase[i].addEventListener("click", function (e) {
    this.innerHTML = "in cart"; //change text on button
    this.disabled = true;
    this.style.cursor = "not-allowed";

    var name = this.id;
    var price = this.dataset.price;
    var quantity = this.dataset.quantity;
    var summed = price * quantity;
  
    createItem (name, price, quantity, summed); // calls createItem function passing info as parameters. 


});
}
```
