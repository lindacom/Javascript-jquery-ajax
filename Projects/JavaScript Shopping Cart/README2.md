Cart functionality
===================

close cart
------------
```
   <div class="cart-row" id="whole-cart" style="position:relative">
                <hr />
                <h2>CART</h2>
                <span class="close-cart" id="close-cart"><a href="javascript:void(0);" style="cursor:default";><i class="fas fa-window-close"></i></a></span>
                </div>

                 
```
```
var closeCart = document.getElementById('close-cart');
closeCart.addEventListener("click", (e) => {

  if (wholeCart.className == 'sidecart') {
    wholeCart.className = wholeCart
  } else {
    wholeCart.style.display = 'none';
  }
});
```

Clear cart
===========
```
  <button class="button" id="btn-clear-cart" type="button" style="float: right;">Clear cart</button><br />
```
```
// clear cart - clears all items from local storage
btnClear.onclick = function clearItems() {
  localStorage.clear();
  location.reload(); //refresh the page
  updateBadge();
}
```

Add array of items to local storage
====================================
```
let allItems = [];

  var name = name;
  var price = price;
  var quantity = quantity;
  var summed = price * quantity;

let storageItem = {
    name: name,
    price: price,
    quantity: quantity,
    summed: summed
  };
  
  // add array of objects to local storage
  
  allItems.push(storageItem); // and object to allitems array
  localStorage.setItem("allItems", JSON.stringify(allItems)); 
  
```

Retrieve array of objects from local storage
=============================================
```
/ show object array of items from local storage
var arr = localStorage.getItem("allItems"); // get data as string
var array = JSON.parse(arr); // convert string to object
for (var i=0;i< array.length;i++) {
    var productItem = array[i].name;
   var productPrice= array[i].price;
  var productQuantity= array[i].quantity;
 //  var productSummed= array[i].summed;

   var summary = productItem + productPrice + productQuantity;
          
document.getElementById("productsarray").innerHTML += summary;
}
```

add local storage items to session storage 
============================================

add local storage items to session storage when pmt button clicked
```
document.getElementById("btn-pmt").addEventListener("click", function (e) {
  localStorage.getItem("allItems"); 
  sessionStorage.setItem("allItems", JSON.stringify(allItems));
});
```
Display sidecart
=================
```
// SIDECART cart icon in menu bar - click to display sidecart.

var badge = document.getElementById('cart');
var aside = document.getElementById('cartcontent');

var badgediv = JSON.parse(sessionStorage.getItem("allItems"));

aside.style.display = "none";

if(badge) {
badge.addEventListener("click", (e) => {

  aside.style.display = "block";

for(var i=0; i<badgediv.length; i++) {
  var ttitle = badgediv[i].name;
  var pprice = badgediv[i].price;
  var qquantity = badgediv[i].quantity;
  var ssummed = badgediv[i].summed;

  var badgediv2 = '<ol><li>'+ttitle + pprice + qquantity + ssummed+ '</li></ol>';

 aside.innerHTML += badgediv2 ;
}

 badge.addEventListener("click", (e) => { // when cart menu icon is clicked
    toggleCart();
});
}
```

Toggle sidecart
-----------------
```
var badge = document.getElementById('cart');
var aside = document.getElementById('cartcontent');

function toggleCart() {
  aside.toggleAttribute('hidden');

  if(aside.hidden == true) {
aside.style.display = "none";
} else {
  aside.style.display = "block"; // show sidecart
}

}
```

