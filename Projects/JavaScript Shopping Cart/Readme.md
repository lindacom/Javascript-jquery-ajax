Products page functionality
===========================
get the value from a hash parameter
=====================================
```
var type = window.location.hash.split('#');
var newy = type[1];
console.log(newy);
```
Button click alert
===================
```
<button class="hollow-button" id="shopFavourites" data-url="favourites.html">shop from favourites</button>
```
```
document.getElementById("shopFavourites").onclick = () => {
  alert("hello");
}
```

Search filter
=============
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

Change colour of icon on click
================================
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
---------------------------------
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
