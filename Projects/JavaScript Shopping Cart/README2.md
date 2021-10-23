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
