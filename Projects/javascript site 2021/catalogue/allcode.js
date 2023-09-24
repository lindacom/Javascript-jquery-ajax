/* PRODUCTS
#
#
*/
// price formatter
const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  });

// CREATE AN OBJECT: products object, product array of objects
const products = {
    product: [
      { name: "Mince", image: "/images/mince.jpg", price: 2.74, likes: 3, category: "meat" },
      { name: "Chocolate", image: "/images/chocolate.jpg", price: 2.00, likes: 5, category: "sweets" },
      { name: "Lemon", image: "/images/lemon.jpg", price: 0.30, likes: 4, category: "fruit" },
      { name: "Lemonade", image: "/images/lemonade.jpg", price: 0.90, likes: 5, category: "drinks" },
    ],
  }
  
  // append products object to the list div. How to change this to a function ??
  
  //function displayAllProducts() {
  for (var i = 0; i < products.product.length; i++) {
  
    var { name, image, price, likes, category } = products.product[i]; // sets all variables at once
  
    var productsList = document.getElementById("productsList");
  
    //use currency formatter
    currencyPrice = formatter.format(price);
  
    // set the initial value of the quantity input box to one
    var prodQuantity = 1;
  
    // unique id for each product - product name+stars
    var stars = '<li id="' + name + 'stars"><span><i class="fa fa-star fa-w-18  checked"></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span><span><i class="fa fa-star fa-w-18  checked" ></i></span></li>';
  
    // formatting products object as shop items html
    if (productsList) {
      var tr_str =
        '<div class="shop-item box" style="position:relative">' +
        '<span class="heart" style="position:absolute; top: 8px; right: 5px;"><a href="javascript:void(0);" style="cursor:default;color:black;";><i class="far fa-heart fa-2x"></i></a></span>' +
        '<span class="shop-item-title">' + name + '</span>' +
        '<img class="shop-item-image" src=" ' + image + ' " width="250px" alt="product">' +
  
        '<div class="shop-item-details">' +
        '<span class="shop-item-category" ">Category:' + category + '</span>' +
  
        '<ul>' +
        '<li style="text-decoration:none;"><span class="shop-item-price" style="font-size:20px;font-weight:400">Price:' + currencyPrice + '</span></li>' +
        '<li><span class="" id="likes">Likes:' + likes + '</span></li>' + stars + '<br /><br /><br /><br />' +
        '</ul>' +
        '<div id="incrementor" style="position:absolute; bottom: 60px; left: 55px">' +
        '<span class="minus"><a href="javascript:void(0);" style="cursor:default;"><i class="fa fa-minus"></i></a></span>' +
       '<span><input type="text" class="prodQuantity" id="prodQuantity" name="prodQuantity" value="' + prodQuantity + '" placeholder="1" style="width:50px;margin:20px" readonly/></span>' +
          //  '<span><input type="text" class="prodQuantity" id="prodQuantity" name="prodQuantity" value="0" placeholder="1" style="width:50px;margin:20px" /></span>' +
        
      '<span class="plus"><a href="javascript:void(0);" style="cursor:default";><i class="fa fa-plus"></i></a></span>' +
        '</div>' +
  
        '<br /><br /><br /><br />' +
        '<button id="' + name + '" data-price="' + currencyPrice + '" data-quantity="1" class="button shop-item-button" type="button" style="position:absolute; bottom: 8px; right: 5px;"><i class="fas fa-shopping-cart"></i>ADD TO CART</button>' +
        '</div>'
        ;
  
      productsList.innerHTML += tr_str;
      //}
    }
  } // END
  
  // STARS - loop through products and stars
  
  var liked = '';
  // loop over the products
  for (var i = 0; i < products.product.length; i++) {
    // get the number of likes for each item (passed to the nested loop)
    liked = products.product[i].likes;
  
    // get product name
    var named = products.product[i].name;
  
    // get a unique identifier for each product - product name + stars
    var mystar = document.getElementById(`${named}stars`);
  
    // loop over the five star icons 
    for (var j = 0; j <= liked - 1; j++) {
      // colour number of likes for this product
      if (mystar) {
        mystar.children[j].style = "color:red";
      }
    }
  }
  
  
  // CHANGE QUANTITY listen for when the input field is changed and disable min/max
  
  var inptQuant = document.getElementsByClassName("prodQuantity");
  var btnMinus = document.getElementsByClassName("minus");
  var btnPlus = document.getElementsByClassName("plus");
  
  
  var btnPurchase = document.querySelectorAll(".shop-item-button");
  
  // listen for when the input field is changed manually
  /*for (var j = 0; j < inptQuant; j++) {
    inptQuant[j].addEventListener("input", (event) => {
        var myQuant = event.target.value;
        console.log(myQuant);
        inptQuant[j].setAttribute("value", 8);     
    });
  }*/
  
  // listen for when the plus button is clicked
  for (var j = 0; j < btnPlus.length; j++) {
    btnPlus[j].onclick = function () {
      //  event.preventDefault();
      var more = this.previousSibling.children[0].value; // gets original value of quantity input box 
  
      var increasedValue = (parseInt(more) + 1); // value plus one
  
      var inc = this.previousSibling.children[0];
      inc.setAttribute("value", increasedValue);
  
      if (inc.value >= 5) {
        alert("you cannot add any more");
      } else {
        inc.value = increasedValue;
      }
    }
  }
  
  // listen for when minus buttons clicked 
  for (var i = 0; i < btnMinus.length; i++) {
    btnMinus[i].onclick = function () {
      //  e.preventDefault();
  
      var less = this.nextSibling.children[0].value; // gets value of quantity input box
      var reducedValue = (parseInt(less) - 1); // value minus one
  
      var red = this.nextSibling.children[0];
      red.setAttribute("value", reducedValue);
  
      if (red.value == 0) {
        alert("you cannot reduce any more");
  red.value = 1;
      } else {
        red.value = reducedValue;
      }
    }
  }
  
  // ADD TO CART - listen for when add to cart button clicked and get item info from the button
  
  for (var i = 0; i < btnPurchase.length; i++) {
    btnPurchase[i].addEventListener("click", function (e) {
      this.innerHTML = "in cart"; // change text on button
      this.disabled = true;
      this.style.cursor = "not-allowed";
  
      e.target.parentElement.children[2].style.display = "none"; // remove incrementors when add to cart button clicked
  
      // get id and price from the button
      var name = this.id;
      var price = this.dataset.price;
  
      // get quantity from the input box
  
      // var quantity = this.dataset.quantity;
  
      // get quantity value attribute (changed by incremetor buttons)
      var quantity = e.target.parentElement.children[2].children[1].children[0].getAttribute("value");
     
  
              // create cart item
      createItem(name, price, quantity); // calls createItem function.  See separate file cartstorage.js. 
  
  
    });
  } // END

/* FAVOURITES
#
#
*/ 
  
// button click go to favourites page
var shopFav = document.getElementById("shopFavourites");

if (shopFav) {
    shopFav.onclick = () => {
        window.location = "myfavourites.html";
    }
}

// display favourites from local storage (local storage used as it is always available)
function displayFavourites() {
    var myFav = localStorage.getItem("favouriteStore");

    if(myFav === null) {
        document.getElementById("storedfavourites").innerText = "You do not have any favourites";
    } else {
    document.getElementById("storedfavourites").innerHTML += JSON.parse(myFav);
  
    document.getElementById("favColl").innerHTML += '<i class="fas fa-tags" id="tag"></li>' ;
    }
}

//  listen for when the heart icon is clicked and change colour
var favourite = document.getElementsByClassName("heart");
let favourites = [];

var alertMsg = document.getElementById("alertMsg");

// loop through heart icons
for (var j = 0; j < favourite.length; j++) {
    favourite[j].onclick = function () {
        var heart = this.children[0]; // access the tag/property that can change the colour style (i.e. a href)
        var heartTitle = heart.parentElement.nextSibling.innerText; // get the title text of the product

        //toggle the colour (favourite and unfavourite) and display alert
        if (heart.style.color === 'black') {
            heart.style.color = 'green';

            setTimeout(function () { alertMsg.style.display = "block"; }, 600);
            setTimeout(function () { alertMsg.style.display = "none"; }, 3000);

            // add array of favourites to session storage
            favourites.push(heartTitle); // and title to array
            localStorage.setItem("favouriteStore", JSON.stringify(favourites));
        } else {
            heart.style.color = 'black';

            var splicedElement; // set variable

            for (var i = 0; i < favourites.length; i++) { //loop through favourites array
                if (favourites[i] === heartTitle) { // check if unfavourited title is in the favourites array
                    splicedElement = favourites.splice(i, 1); // remove from array and store in a variable

                    alertMsg.innerHTML = `removed ${splicedElement} from favourites`;
                    setTimeout(function () { alertMsg.style.display = "block"; }, 600);
                    setTimeout(function () { alertMsg.style.display = "none"; }, 3000);

                    var getFav = JSON.parse(localStorage.getItem("favouriteStore")); // get favourites from session storage
                    for (var j = 0; j < getFav.length - 1; j++) { //loop through favourites array
                        if (getFav[j] === heartTitle) { // check if unfavourited title is in the favourites array
                            var chopped = getFav.splice(j, 1); // remove unfavourited title from array 
                           // console.log(getFav); // returns the new array
                            // console.log(chopped); // returns the item that was removed
                            localStorage.setItem("favouriteStore", JSON.stringify(getFav)); // update the favourites in storage
                        }
                    }
                }
            }
        }

    }
} // END


// check if favourited item exists in products
// put product details in array (to be used by another piece of code)
var array1 = JSON.parse(localStorage.getItem("favouriteStore")); // array of favourites
var array2 = products.product; // products array of objects
var savedFav = [];

if (array1) {
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

// formatting the favourite products array of objects (above) as favourite shop items html
var favListDiv = document.getElementById("favouritesList");

if (favListDiv) {
    // loop through favourites array of products
    for (var i = 0; i < savedFav.length; i++) {

        var { name, image, price, likes, category } = savedFav[i]; // sets all variables at once   

        var tr_str =
            '<div class="shop-item" style="position:relative">' +
            '<span class="heart" style="position:absolute; top: 8px; right: 5px;"><a href="javascript:void(0);" style="cursor:default;color:black;";><i class="far fa-heart fa-2x"></i></a></span>' +
            '<span class="shop-item-title">' + name + '</span>' +
            '<img class="shop-item-image" src=" ' + image + ' " width="250px">' +

            '<div class="shop-item-details">' +
            '<span class="shop-item-category" ">Category:' + category + '</span>' +

            '<ul>' +
            '<li style="text-decoration:none;"><span class="shop-item-price" style="font-size:20px;font-weight:400">Price:' + currencyPrice + '</span></li>' +
            '<li><span class="" id="likes">Likes:' + likes + '</span></li>' + stars + '<br /><br /><br /><br />' +
            '</ul>' +
            '<div id="incrementor" style="position:absolute; bottom: 60px; left: 55px">' +
            '<span class="minus"><a href="javascript:void(0);" style="cursor:default;"><i class="fa fa-minus"></i></a></span>' +
            '<span><input type="text" class="prodQuantity" id="prodQuantity" name="prodQuantity" value="' + prodQuantity + '" placeholder="1" style="width:50px;margin:20px" /></span>' +
            '<span class="plus"><a href="javascript:void(0);" style="cursor:default";><i class="fa fa-plus"></i></a></span>' +
            '</div>' +

            '<br /><br /><br /><br />' +
            '<button id="' + name + '" data-price="' + currencyPrice + '" data-quantity="1" class="button shop-item-button" type="button" style="position:absolute; bottom: 8px; right: 5px;"><i class="fas fa-shopping-cart"></i>ADD TO CART</button>' +
            '</div>'
            ;

        favListDiv.innerHTML += tr_str;
    }
}// END

  
/* FILTER, SEARCH AND COUNT
#
#
*/  
  
// cart on hover display cart total
/*document.getElementById("cart").addEventListener("mouseover", (e) => {
 e.target.setAttribute("alt", "hi there");
 alert("hovered");
});*/

// search filters

const searchBox = document.getElementById('search_box');
var side = document.getElementById('sidebar2');
var filter = '';

// captures typed characters (event) in searchbox
if (searchBox) {
  searchBox.addEventListener('keyup', (e) => {
    filter = e.target.value;
    searchFilter(filter); // passes input to searchfilter function
  });

  searchBox.onfocus = function(){side.style.display = "none";}; // hide right sidebar when search box is in focus
}

// display products based on search
var names = document.getElementsByClassName('shop-item'); // get all the products

function searchFilter(filter) {
  var filter = filter.toUpperCase(); // search input in uppercase
  

  for (var i = 0; i < names.length; i++) {
    var span = names[i].getElementsByClassName("shop-item-title")[0];  // get title of this product
    txtValue = span.textContent || span.innerText || span.innerHTML;

    var span2 = names[i].getElementsByClassName("shop-item-category")[0]; // get category of this product
    txtValue2 = span2.textContent || span.innerText || span.innerHTML;

    //checks if search(filter) is contained in the title or category (>-1 means it does exist)
    var searchAlert = document.getElementById("search-alert");

    if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
      names[i].style.display = "";
      searchAlert.style.display = "none";
    } else {
      names[i].style.display = "none";
      searchAlert.style.display = "block";
      searchAlert.innerHTML = "There are no products matching this description"; // display message if no products are found
    }
  }
} // END 

// this function will be executed on click of X (clear button) reload page
// but error is it also fires for pressing enter ???
if (searchBox) {
  searchBox.addEventListener('search', function (e) {
    window.location.reload();
  });
}

// checkboxes - when clicked call function passing in value
var checkedCategory = document.getElementsByClassName("category");
var input = '';

for (var i = 0; i < checkedCategory.length; i++) {

  checkedCategory[i].onclick = function () {
    input = this.value;

    searchFilter(input);
  }
}

// dropdown - when select is changed call function
var dropFilter = document.getElementById("prodFilter");

if (dropFilter) {
dropFilter.onchange = function(){
 var filterValue = dropFilter.value;

 // CHANGE TO CASE STATEMENT
 if(filterValue == "top-rated") {
  toprated();
 } else if(filterValue == "a-z") {
   alphabetical();
 }
 else if(filterValue == "low-high") {
  filterPriceLow();
 }
};
}

// filter by top rated

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

// filter alphabetically
var alpha = [];

function alphabetical() {

  for (var i = 0; i < names.length; i++) {
    var bet = names[i].getElementsByClassName("shop-item-title")[0].innerText;  // get title of each product
    alpha.push(bet);
}

    var letters = alpha.sort(); // sort alphabetically
    console.log(letters);

    for (var k = 0; k < names.length; k++) {
  
      var span = names[k].getElementsByClassName("shop-item-title")[0];  // get title of all products
      txtValue = span.textContent || span.innerText || span.innerHTML;
      for (var l = 0; l < letters.length; l++) {
      if (txtValue.indexOf(letters[l]) > -1) {
        names[k].style.display = "";
      } else {
        names[k].style.display = "none";
      }
    }
    }



}

// filter by price

function filterPriceLow() {

var a = products.product;

for (var i=0; i<a.length; a++) {
var b = a[i].price;
console.log(b);
}
}



  /*  <option value="">Select...</option>
                        <option value="top-rated">Top rated</option>
                        <option value="a-z">A-Z</option>
                        <option value="low-high">Price low to high</option>
                        <option value="high-low">Price high to low</option>*/

// button click go to book a slot delivery page
// n.b. btn-slot has been used on another page in main.js file. could be reused?

var btnSlot = document.getElementById("btnSlot");

if (btnSlot) {
  btnSlot.onclick = () => {
    window.location = "delivery.html";
  }
}

//put the count of items from session storage in counter
// if empty put the count of items from local storage in the counter
//N.b. removed counter from homepage.  Need to check if this is working.  Only currently using the session storage part ???
function updateBadge() {

  var badgeCount = JSON.parse(sessionStorage.getItem("allItems"));

  if (!badgeCount) {
    badgeCount = JSON.parse(localStorage.getItem("allItems"));
  } else {
 var bbadge = document.getElementById("badge");
 if(bbadge) {
     bbadge.innerHTML = badgeCount.length;
 }
  }
}  

/* CART 
#
#
*/
let allItems = [];

function createItem(name, price, quantity) {

  var name = name;
  var price = price;
  var quantity = quantity;
  var priceConv = Number(price.replace(/[^0-9.-]+/g,"")); // convert to double for calculation removes all non dot / digits
  var sum = priceConv * quantity;
  var summed = formatter.format(sum); // convert back to currency for display

  // create cart item
  var item =
    '<tr>' +
    '<td>' + name + '</td>' +
    '<td>' + price + '</td>' +
    '<td>' + quantity + '</td>' +
   '<td>' + summed + '</td>' +
   '<td id="delClick"><a class="btn-remove" id="'+name+'" href="javascript:void(0)">Delete</a></td>' +
   // '<td><button class="button btn-remove" id="' + name + '" type="button" >Delete</button></td>' +
    '</tr>'
    ;

  // create cart object
  let storageItem = {
    name: name,
    price: price,
    quantity: quantity,
    summed: summed
  };

  // if a cart item is created:
  if (item) {
    // add items to cart (DOM)
    cartItems.innerHTML += item;

    //N.b. the element could not be clicked when th below click event is placed outside this code
    
    // get first click event
   /* var clicked = document.getElementById("delClick");
    clicked.onclick = function() { 
      var deleted = clicked.children[0].id; 
      deleteItem(deleted);
    }*/

    // listen for all click events
  /* for(var i=0; i < item.length; i++) {
     var clicked = document.getElementsByClassName("delClick"); //td tags containing anchor links
for(var j=0; j < clicked.length; j++) { // loop through td tags
 clicked[j].onclick = function() { 
  var deleted = clicked[j].children[0].id; // html collection containing a tag ERROR CHILDREN UNDEFINED

        deleteItem(deleted); // calls function in cartstorage.js file
    
  }
}
    }*/

    // add array of objects to local storage
    allItems.push(storageItem); // add object to allitems array
    localStorage.setItem("allItems", JSON.stringify(allItems)); // converts to string as local storage uses string
  }

  //display cart, total and payment button
  wholeCart.style.display = "block";
  cartTotalElement.style.display = "block";
  payment.style.display = "block";
  // btnPayment.style.display = "block";    
  // btnClear.style.display = "block";

  // call update cart total
  updateTotal(summed);

  // call update badge function
  updateBadge();
}

// calculate cart grand total  
var grand = [];
function updateTotal(summed) {
  var addedTotal = Number(summed.replace(/[^0-9.-]+/g,"")); // convert to number for calculation
   grand.push(addedTotal); // add to array

 var total = grand.reduce(myFunc); 

 // perform calculation
 function myFunc(a, b) {
  return a + b;
 }
 
 cartTotal.innerHTML = formatter.format(total); // convert back to currency for display
 
} // END

// add items to session storage and remove from local storage when pmt button clicked and go to page
var buttonPayment = document.getElementById("btn-pmt");

if (buttonPayment) {
  buttonPayment.addEventListener("click", function (e) {
    sessionStorage.setItem("allItems", JSON.stringify(allItems));
    localStorage.removeItem("allItems");
    window.location = buttonPayment.dataset.url;
  });
}

// show all items from session storage (used on payment page and confirmation page)
function displayItems() {

  // show object array of items from session storage in cart
  var arr = sessionStorage.getItem("allItems"); // get data as string
  var arrayProd = JSON.parse(arr); // convert string to object

  if(arr){
  for (var i = 0; i < arrayProd.length; i++) {
    var productItem = arrayProd[i].name;
    var productPrice = arrayProd[i].price;
    var productQuantity = arrayProd[i].quantity;
    var productSummed= arrayProd[i].summed;

    var summary =

      '<tr><td>' + productItem + '</td>' +
      '<td>' + productPrice + '</td>' +
      '<td>' + productQuantity + '</td>' +
      '<td>' + productSummed + '</td>' +
      '</tr>' +
      '<hr />';

    document.getElementById("productsarray").innerHTML += summary;
  
  
  }
displayAddress();
}
}

// show all items in cart
// check if this function repeated in main file ???
function displayAddress() {

  // show object array of items from session storage in cart
  var arr2 = sessionStorage.getItem("shippingaddress"); // get data as string
  var array2 = JSON.parse(arr2); // convert string to object

  if(arr2){
  for (var i = 0; i < array2.length; i++) {
    var firstname = array2[i].Name;
    var lastname = array2[i].Surname;
    var address = array2[i].Address;
    var town = array2[i].Town;

    var fulladdress =

      '<tr>' +
      '<td>Shipping address</td>' +
      '<td>' + firstname + '</td>' +
      '<td>' + lastname + '</td>' +
      '<td>' + address + '</td>' +
      '</tr>' +
      '<hr />';

    document.getElementById("addressarray").innerHTML += fulladdress;

  }

}
}

/* STORAGE
#
#
*/

// get add to cart elements

var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total-price");
var btnClear = document.getElementById("btn-clear-cart");

var wholeCart = document.getElementById("whole-cart");
var cartTotalElement = document.getElementById("cart-total");
var payment = document.getElementById("payment");

var total = 0;

// hide cart (when empty)
if (wholeCart) {
  wholeCart.style.display = "none";
}

if (cartTotalElement) {
  cartTotalElement.style.display = "none";
}

if (payment) {
  payment.style.display = "none";
}

// close cart when clicked close(hide) the cart
var closeCart = document.getElementById('close-cart');

if (closeCart) {
  closeCart.addEventListener("click", (e) => {
    wholeCart.style.display = 'none';
  });
}

/*
// toggle whole cart and sidecart
if(closeCart){
closeCart.addEventListener("click", (e) => {

  if (wholeCart.className == 'sidecart') {
    wholeCart.className = wholeCart
  } else {
    wholeCart.style.display = 'none';
  }
});
}*/

// clear cart - clears product items from local storage when button clicked
if (btnClear) {
  btnClear.onclick = function clearItems() {
      localStorage.removeItem("allItems");
   location.reload(); //refresh the page
  //  updateBadge();
  }
}

// remove selected item from local storage & cart
// still testing this unable to get click event???
var btnRemove = document.getElementsByClassName("btn-remove");
var table = document.getElementById("mytable");

function deleteItem(clicked) {
  alert(clicked);
  /*var hoo = clicked.children; // html collection of a tag
  
  for(var i=0; i< hoo.length; i++) {
    var haa = hoo[i].id;
  alert(haa); // id of the a tag
  }*/

}

/*for (var i = 0; i < btnRemove.length; i++) {
  //btnRemove[i].addEventListener("click", function (e) {
  btnRemove[i].onclick = function () {
    alert("clicked");
     var remove = this.id;
      alert(remove);
      location.reload(); //refresh the page
      updateBadge()
  }
  // });
} // END*/

// SIDECART cart icon in menu bar - click to display sidecart.

var badge = document.getElementById('cart');
var aside = document.getElementById('cartcontent');

// get order from session storage
var badgediv = JSON.parse(sessionStorage.getItem("allItems"));



if (badge) {
if(badgediv) {
  for (var i = 0; i < badgediv.length; i++) {
    var ttitle = badgediv[i].name;
    var pprice = badgediv[i].price;
    var qquantity = badgediv[i].quantity;
    var ssummed = badgediv[i].summed;

    var badgediv2 = '<ol><li>' + ttitle + pprice + qquantity + ssummed + '</li></ol>';

    aside.innerHTML += badgediv2;
  }

  badge.addEventListener("click", (e) => { // when cart menu icon is clicked
    toggleCart();
  });
}
}

// toggle sidecart display
function toggleCart() {
  aside.toggleAttribute('hidden');

  if(aside.hidden == true) {
aside.style.display = "none";
} else {
  aside.style.display = "block"; // show sidecart
}

}

// changed value input
var myInput = document.getElementsByClassName("inptQuantity");

// loop through input fields and set value, 
for (var i = 0; i < myInput.length; i++) {
  var input = myInput[i];
  input.addEventListener("change", quantityChanged); //when input changes call function
}

// listen for quantity change
function quantityChanged(event) {
  var changedInput = event.target;
  if (isNAN(changedInput.value) || changedInput.value <= 0) {
    changedInput.value = 1;
    var quantity = changedInput;
  }
  updateCartTotal(quantity)
}



/* DATE AND TIME
#
#
*/

document.addEventListener("DOMContentLoaded", function () {
    var currentTime = document.getElementById("current-time"),
        currentDate = document.getElementById("current-date");  

if(currentTime) {
    setInterval(function updateTime() {
        // get date (object)
        var d = new Date();

        var hours = d.getHours(),
            minutes = d.getMinutes(),
            month = formatMonth(d.getMonth()),
            date = d.getDate(),
            ampm = 'AM';

        // change 24 hour clock to standard time
        if (hours > 12) {
            hours -= 12;
            ampm = "PM";
        } else if (hours === 0) {
            hours = 12;
        }

        // put 0 in front of minutes that are less than 10
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // display hours and minutes using modulus operator %
        // 2 divided by 2 remainder 0 is even, 1 is odd
        // flashing every odd second 
        var sep = ":";
        if (d.getSeconds() % 2 === 1) sep = " ";
        currentTime.innerHTML = hours + sep + minutes + ' ' + ampm;
        currentDate.textContent = month + " " + date;
  
    }, 1000);
}

    // transform month into a number

    function formatMonth(m) {
        m = parseInt(m, 10); // this function parses a string and returns an integer

        if (m < 0) {
            m = 0;
        } else if (m > 11) {
            m = 11;
        }

        var monthNames = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];

        return monthNames[m];
    }


});

/* OTHER
#
#
*/



  
  // update counter when page is loaded
  document.addEventListener('DOMContentLoaded', function () {
    updateBadge();
  }, false);
  
  // mouseover and mouseout
  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
  
  // ORDER PAYMENT
  // check if any items have been ordered (used on payment page - your orders)
  var msg = document.getElementById("order-msg");
  var btnConfirm = document.getElementById("btn-confirm"); // confirm order button
  var frmFname = document.getElementById("fname");
  var frmLname = document.getElementById("lname");
  var frmAddress = document.getElementById("address");
  var frmTown = document.getElementById("town");
  var bookCheck = document.getElementById("book-check");
  
  // used on payment page to check if there are any orders. Displays items in your order div.
  function checkOrder() {
    if(msg){
    if (sessionStorage.getItem("allItems") === null) {
      msg.innerText = "There are no orders";
    } else {
      msg.innerText = '';
      displayItems();
      // keep form inputs in the form
      if(frmValues !== null) {
      frmFname = frmValues[0];
     }
  }
}
  
  if (sessionStorage.getItem("booking") !== null) {
      if (bookCheck) {
  bookCheck.innerHTML = 
    '<h2>Booking details</h2>' + JSON.parse(sessionStorage.getItem("booking"));
      }
  }
  }
  
  // (used on shipping page)
  if(msg){
  if (msg.innerText = "There are no orders") {
    if(btnConfirm) {
    btnConfirm.disabled = "true";
    }
  } else {
    displayItems();
  }
  }
  
  // DELIVERY BOOKING
  var btnBook = document.getElementsByClassName("btn-book");
  var change = document.getElementById("btn-change-book");
  var checkout = document.getElementById("btn-checkout");
  
  var booked = false;
  
  if(change) {
    change.addEventListener('click', function () {
      sessionStorage.removeItem("booking");  
      change.style.display = "none";
     checkout.style.display = "none";  
     for (var i = 0; i < btnBook.length; i++) {
      btnBook[i].disabled = false;
     }    
            });
  
    if (booked === true) {
      change.style.display = "block";
      checkout.style.display = "block";
    } 
    
    if(booked === false) {
      change.style.display = "none";
     checkout.style.display = "none";
    }
  }
  
  // checkout button (payment button used on delivery page)
  if (checkout) {
    checkout.onclick = function () {
      window.location = checkout.dataset.url;
    };
  }
  
  // check if a delivery has been booked (if it is in session storage)
  function checkDelivery() {
    if (sessionStorage.getItem("booking") === null) {
      btnBook.disabled = false;
      booked = false;
      editButtons(booked);
    } else {
      for (var i = 0; i < btnBook.length; i++) {
        btnBook[i].disabled = true;
        booked = true;
        editButtons(booked);
      }
    }
  }
  
  // if a delivery has been booked display edit booking button and payment button
  function editButtons(booked) {
   if(booked === true) {
      //if edit booking button is clicked activate book buttons and remove booking from session storage
      change.addEventListener('click', function () {
        sessionStorage.removeItem("booking");        
              });
    }
    } 
  
  
  
  // click book button to choose a delivery time (used on delivery page)
  for (var i = 0; i < btnBook.length; i++) {
    btnBook[i].onclick = function (e) {
      // get time and cost of clicked button  row
      var chosenTime = e.target.parentElement.parentElement.children[0].innerText;
      var delCost = e.target.parentElement.parentElement.children[1].innerText
      alert(`you have chosen time: ${chosenTime}. The delivery will cost ${delCost}`);
      // put booking time in local storage
      sessionStorage.setItem("booking", JSON.stringify([chosenTime, delCost]));
      //disable all book buttons
      for (var j = 0; j < btnBook.length; j++) {
        btnBook[j].disabled = true;
        booked = true;
      }
      // show change booking button and go to payment page button
      if (booked === true) {
        change.style.display = "block";
        checkout.style.display = "block";
      }
    }
  
  }
  
  // book delivery button (used on payment page)
  var buttonDelivery = document.getElementById("btn-delivery");
  var btnSlot = document.getElementById("btnSlot");
  
  // if a delivery slot has been booked do not show book button (change text to edit booking)
  if (buttonDelivery) {
    if (sessionStorage.getItem("booking") === null) {
      buttonDelivery.disabled = false;
    } else {
      buttonDelivery.className = "hollow-button";
      buttonDelivery.innerText = "Change booking";
      // btnSlot.innerHTML = "Change booking"; //this affected the confirm order button ??
  //  buttonDelivery.disabled = true; 
  
     
       // btnConfirm.disabled = false; 
      
       
    }
  }
  
  
  // Go to deliery page on button click
  if (buttonDelivery) {
    buttonDelivery.addEventListener("click", function (e) {
      window.location = buttonDelivery.dataset.url;
    });
  }
  
  // back button which uses browser history 
  var btnBack = document.getElementById("btnBack");
  
  if (btnBack) {
    btnBack.onclick = function () {
      window.history.back();
    };
  }
  
  // FORM EVENTS
  // character count for delivery instructions textarea
  var charcount = document.getElementById("charcount");
  var counter = document.getElementById("count");
  
  if (charcount) {
    charcount.addEventListener("keyup", e => {
      let count = charcount.value.length;
      counter.value = count;
    });
  }
  
  // activate confirm order button when form completed
  var form = document.getElementById("form-customer");
  
  var firstName = '';
  var lastName = '';
  var address = '';
  var town = '';
  
  // ORDER PAYMENT
  let allAreFilled = false;
  var frmValues = [];
  
  // enable confirm order button only when required fields are complete
  
  if (form) {
  
    form.addEventListener("change", e => {
      // for each required field get value and put unique value in array
      form.querySelectorAll("[required]").forEach(function (i) {
        
        if (i.value !== '') {
  
          if (frmValues.indexOf(i.id + ':' + i.value) === -1) { //if the id and value are unique add to array
            frmValues.push(i.id + ':' + i.value);
          }
  
          if (frmValues.length == 4) {
            btnConfirm.disabled = false;
          }
  
          if (frmValues.length == 4) { // if the 4 required fields are not empty enable button
            if (buttonDelivery.innerText == "Book a delivery") {
              alert("please book a slot");
            } else  {
          
             allAreFilled = true;
             // confirmOrder.disabled = false;
            //  btnConfirm.disabled = false;
           
            // saves form inputs from array index into variables
  
            firstName = frmValues[0];
            lastName = frmValues[1];
            address = frmValues[2];
            town = frmValues[3];
            submitOrder(); // pass values to submit order function
          }
        }
      }
      });
  
    });
  }
  
  
  // submit delivery form inputs to session storage
  var shipping = [];
  
  function submitOrder() {
    var shippingObj = {
      Name: firstName,
      Surname: lastName,
      Address: address,
      Town: town
    }
  
    if (btnConfirm) {
      btnConfirm.addEventListener("click", function (e) {
        shipping.push(shippingObj);
        sessionStorage.setItem("shippingaddress", JSON.stringify(shipping));
        window.location = btnConfirm.dataset.url;
      });
    }
  }
  
  // ORDER CONFIRMATION display order confirmation details (function run from body of confirmation page)
  var alertBookMsg = document.getElementById("alert-book-msg");
  var alertAddress = document.getElementById("alert-book-address");
  // var delcheck = [];
  
  function orderComplete() {
    
    if (sessionStorage.getItem("booking") === null) {
      alertBookMsg.innerHTML = '<p>please <a href="delivery.html">book a delivery slot</a></p>';
    } else {
      displayBooking();
      }
  
      if(orderAddress = sessionStorage.getItem("shippingaddress") === null) {
        alertAddress.innerHTML = '<p>please enter your<a href="payment.html">delivery address</a></p>';
      } else {
        displayAddress();
      }
     
    checkOrder(); // see line 27
    displayItems(); // see wholecart.js file
  
   /* if(!alertAddress && alertBookMsg){
   orderDone.style.display= "block";
    }*/
  // console.log(delcheck);
  }
  
  function displayBooking() {
    var bookingArray = document.getElementById("bookingarray");
  
    // get booking details from local storage
    bookingArray.innerHTML = JSON.parse(sessionStorage.getItem("booking"));
  
    // create and display a confirm order button
    let btnConfirmOrder = document.createElement("button");
    btnConfirmOrder.className = "button";
    btnConfirmOrder.innerHTML = "Confirm order";
    bookingArray.appendChild(btnConfirmOrder);
  
    // when confirm order clicked clear the session
  btnConfirmOrder.addEventListener("click", e => {
    sessionStorage.clear();
    window.location = "store.html";
  });
  
   // delcheck.push("a");
  }
  
  // displays used on confirmation page
  function displayAddress() {
   var addArr =  document.getElementById("addressarray");
   if(addArr) {
       addArr.innerHTML = sessionStorage.getItem("address");
   }
   //  delcheck.push("b");
  }
  
  // user clicks to confirm order. session is cleared
  var orderDone = document.getElementById("ordered");
  
  /*if(orderDone){
    orderDone.style.display = "none";
  
  }*/
  


