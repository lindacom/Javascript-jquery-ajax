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
