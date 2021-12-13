JavaScript OOP shopping cart
=============================
1. Create an index file which contains a script that calls the main.js file as a module
2. Create a main.js file to import all the functions from js files
3. create various js files and export the functions

Products javascript file
-------------------------
create a products array

```
let productArray = [];
```

Classes
=======
1. Create a product class

```
export default class Product {

constructor (id, name, image, price, likes, category) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.price = price;
  this.likes = likes;
this.category = category;
}
}
```

2. Create a cart class

```
export default class Cart {
    constructor() {
        this.item = [];
        this.total = 0;
    }
}
```

Functions
============
displayProducts:
1. sends a fetch api request to the api, loops through the data and creates a new product object for each item, pushes the 
product object to the products array.
2. creates a table from the projects array and displays it in the index page

```
fetch('http://localhost:8090/api/products')
  .then(response => response.json())
 .then(data => { 
  for(let i=0; i<data.length; i++) {
     products = new Product(data[i].productID, data[i].productName, data[i].productUrl, data[i].price, data[i].likes, data[i].category)
    productArray.push(products); 
    }
   // console.log(productArray); 
    });
 ```
