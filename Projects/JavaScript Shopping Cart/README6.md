Draft code for item already exists in basket
----------------------------------------------
var allItems = [];
function createItem (name, price, quantity, summed) {
  var name = name;
  var price = price;
  var quantity = quantity;
  var summed = summed;

  if(cartItems.innerText.indexOf("name") !== -1) {
  
  
  // create cart item
  var item =
  '<div class="cart-item-each" style="position:relative">' +
  '<span style="width:55%">' + name + '</span>' +
  '<span style="width:55%">' + price + '</span>' +
  '<span style="width:55%">' + quantity + '</span>' +
  '<td><input type="number" class="inptQuantity" name="quantity" value="' + quantity + '" placeholder="1" min="1" max="10" style="width:50px" /></td>' +
  '<span style="width:55%">' + summed + '</span>' +
  '<button class="button btn-remove" id="' + name + '" type="button" style="position:absolute;bottom:8px;right:8px;" >Delete</button>' +
       
  '</div>' 
  ; } else {
    alert("item already exists");
  }

// if a cart item is created:
if (item) {
  // add items to cart (DOM)
  cartItems.innerHTML += item;
  allItems.push(item);
  // add items to local storage
  localStorage.setItem(name, [price, quantity]);
  // localStorage.setItem("basket", JSON.stringify(arrayItem));
}
  // add array of items to local storage
  /*var panel = [name, price, quantity];
  var carted = [];
      carted = [...carted, panel];
  
      localStorage.setItem("shop", [...panel]);*/

      //display cart, total and payment button
wholeCart.style.display = "block";
cartTotalElement.style.display = "block";
payment.style.display = "block";
// btnPayment.style.display = "block";    
// btnClear.style.display = "block";

// update cart total
updateTotal(quantity);

  // run update badge function
  updateBadge();

/* else {
  wholeCart.style.display = "block";
   wholeCart.innerHTML = '<p>there are no items in the cart</p>';
 }*/

}






