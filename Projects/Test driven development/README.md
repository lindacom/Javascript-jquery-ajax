Test Driven Development
=======================
The project contain two folders - api and tdd-es6.

Integration tests (api)
========================
1. Navigate to the api folder
2. In a terminal run nodemon api.js
3. You can view the api at http://localhost:8090/api/products

running test scripts using Chai
-----------------------------------
The tdd-es6 folder contains a subfolder called storetests.
The storetests folder contains the test file Allproductsapi.test.js

1. Open another terminal and navigate to the tdd-es6 folder.
2. run the command npm run test
3. view passing and failing tests

running tests in Postman
---------------------------
You can test the API in postman.

1. Open Postman application

GET - http://localhost:8090/api/products
1. get all products
2. not get all products - incorrect url

GET - http://localhost:8090/api/products/item
replace item with product name in the url

1. get product by name
2. not get product by name - product does not exist

POST - http://localhost:8090/api/products
add product json details to body of request, send application/json request.

1. post a product
2. not post a product - incorrect json property

PUT - http://localhost:8090/api/products/id
add product json details to body of request, send application/json request.

1. update and replace a product
2. not update and replace a product - incorrect id

PATCH - http://localhost:8090/api/products/id
add product json details to body of request, send application/json request.

1. update a product
2. not update a product - incorrect id

DELETE - http://localhost:8090/api/products/id

1. delete a product
2. not delete a product - incorrect id

Functional tests
================
Search/filter
--------------
1. View all products
2. View products by name
3. Filter products by:
- category
- top rated (stars)
- A-Z (alphabetically)
- price: low to high
- price: high to low

Favourites
-------------
1. add a product to favourites
2. View all favourites
3. Unfacourite a product
4. Clear all favourites

Cart
----
1. View cart
2. add a product to the cart
3. increase quantity
4. decrease quantity
5. delete a product from the cart
6. display badge counter
7. update badge counter
8. Clear the cart

Order
----
1. Create an order
2. View an order
3. Add address to the order
4. Delete an order

Delivery
--------
1. Add a delivery time to an order
2. Update delivery time
3. View address, time and cart items (order confirmation)
