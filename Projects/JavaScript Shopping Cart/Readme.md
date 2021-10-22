Reduce and increase buttons
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
