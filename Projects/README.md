Arrays
======
Below are the different ways to remove array elements in JavaScript.
<ol>
<li>From the start of an array using shift() method.</li>
<li>From the end of an array by setting array length set or pop() method.</li>
<li>Removing a range of elements from anywhere using splice() method.</li>
<li>Removing elements by value using splice() and filter() method.</li>
<li>By using Lodash library. (This requires loadash library to be included in your script: https://lodash.com)</li>
  <li>Using delete operator.</li>
  </ol>
  
Get parent, child and sibling elements
==========================================
```
 btnBook[i].onclick = function (e) {
    // get time and cost of clicked button  row
    var chosenTime = e.target.parentElement.parentElement.children[0].innerText;
    var delCost = e.target.parentElement.parentElement.children[1].innerText
    alert(`you have chosen time: ${chosenTime}. The delivery will cost ${delCost}`);
    }
```
  
  Local storage
  =============
check if key exists in local storage:

```
if (localStorage.getItem("username") === null) {
  //...
}
```
Get item
----------
Get item:

```
sessionStorage.getItem("booking");
```
Get an array from local storage
```
JSON.parse(sessionStorage.getItem("booking"));
```
Set item
---------
Set item:
```
sessionStorage.setItem("booking");
```
store an array in local storage:
```
  sessionStorage.setItem("booking", JSON.stringify([chosenTime, delCost]));
```
Delete item:
```
sessionStorage.removeItem("booking");
```
Clear the whole cart:
```
localStorage.clear();
```
Currency formatter
====================
```
// price formatter
const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2
});
```
to use:
```
currencyPrice = formatter.format(price);
```

Calculate price * quantity
-----------------------------
```
 var price = price;
  var quantity = quantity;
  var priceConv = Number(price.replace(/[^0-9.-]+/g,"")); // convert price to double for calculation. regex removes all non dot / digits
  var sum = priceConv * quantity;
  var summed = formatter.format(sum); // convert back to currency for display
```
calculate grand total  
---------------------
```
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
 
}
```
BUTTONS
========
create and display a  button
----------------------------

```
  let btnConfirmOrder = document.createElement("button");
  btnConfirmOrder.innerHTML = "Confirm order";
  bookingArray.appendChild(btnConfirmOrder);
  ```
  
button click events
===================
click event listener
--------------------
```
if(buttonDelivery){
buttonDelivery.addEventListener("click", function (e) {
  window.location = buttonDelivery.dataset.url;
});
}
```
go to url on click
-------------------

```
if(checkout) {
checkout.onclick = function () {
  window.location = checkout.dataset.url;
};
```
go to previous page
--------------------
```
if (btnBack) {
  btnBack.onclick = function () {
    window.history.back();
  };
}
```
Input events
============
When characters entered in input box count length:
```
 if (charcount) {
charcount.addEventListener("keyup", e => {
    let count = charcount.value.length;
  counter.value = count;
});
  }
```

Select dropdown
================
get value of select:

```
var dropFilter = document.getElementById("prodFilter");

dropFilter.onchange = function(){
  alert(dropFilter.value)
};
```

Forms
======
For required fields store unique vaues in an array:

```
if(form){

  form.addEventListener("change", e => {
// for each required field get value and put unique value in array
  form.querySelectorAll("[required]").forEach(function(i) {
           if (i.value !== '') {
            if(frmValues.indexOf(i.id + ':' + i.value) === -1){ //if the id and value are unique add to array
         frmValues.push(i.id + ':' + i.value);
            }
            }
            }
            }
            }
```
change HTML
```
document.getElementById("addressarray").innerHTML = orderAddress;
```

CSS
===
Change style
-------------
```
if(checkout) {
checkout.style.display = "none";
}
```
change class
---------------
```
  buttonDelivery.className = "hollow-button";
```
Change text
-------------
```
  buttonDelivery.innerText = "Change booking";
```
disable button
--------------
```
btnBook.disabled = false;
```
Timeout and interval
=======================
```
  // set a delay of 2 seconds before running function
    setTimeout(updateTime, 2000);
    // update every second
    setInterval(updateTime, 1000);
```
N.b. if you wanted to be able to stop the time put the interval in a variable and then use clearInterval(variable)

Date and time
==============
```
 // get date (object)
        var d = new Date();
        
        // get readable time toDateString

         d.toTimeString();

        // get pieces of time using a date method
      d.  getHours, getMinutes, getDate, getDay
```
change 24 hour clock to standard time
----------------------------------------
```
        if (hours > 12) {
            hours -= 12;
            ampm = "PM";
        } else if (hours === 0) {
            hours = 12;
        }
```
put 0 in front of minutes that are less than 10
-----------------------------------------------
```
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
```
display hours minutes and seconds
-----------------------------------
```
          c.innerHTML = hours + ":" + d.getMinutes() + ":" + d.getSeconds();
          ```
          
 transform month into a number
 ------------------------------
 ```
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
  ```
        
Debugging
============
```
//use this to see what items you are clicking on in the dom
cartItems.addEventListener("click", event => {
  console.log(event.target);
})
```
