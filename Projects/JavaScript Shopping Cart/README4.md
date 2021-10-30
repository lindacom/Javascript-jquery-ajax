Confirm order
==============
 submit form inputs to session storage
 --------------------------------------
 
 ```
  var shipping = [];

  var buttonConfirm = document.getElementById("btn-confirm");

  function submitOrder() {
  var shippingObj = {
    Name: firstName,
  Surname: lastName,
  Address: address,
  Town: town
}

if(buttonConfirm) {
  buttonConfirm.addEventListener("click", function (e) {
    shipping.push(shippingObj);
  sessionStorage.setItem("shippingaddress", JSON.stringify(shipping));
  window.location = buttonConfirm.dataset.url;
});
}
  }
```
