React is used for creating user interfaces. requires node.js 8 or higher and npm 5.6 or higher. React creates a single page app. JavaScript loads the information and changes
the UI. Use React router to handle routing.

Setting up a React Environment
================================
1. Run this command to create a React application - npx create-react-app my-react-app
2. Run this command to move to the my-react-app directory - cd my-react-app

N.b. alternatively you could type react.new in the browser to use a sandbox version of react.

Two folders you will work with are src and public. The public folder contains images

Src folder
-----------
1. app.css
2. app.js
3. index.js

Add styles
------------
In the src > app.css file enter the styles for the application

Import
-----
in the src > index.js file import 

```
import React from 'react';
import ReactDOM from "react-dom";
import App from './App.js';

```
and render the application

```
ReactDOM.render(<App />, document.getElementById("root"));
```

write application code
---------------------
in the src > app.js file write the application code. 

```
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
}
```

Nb. the html code for the page is contained in the return block.

Page layout
-------------

```
function App() {
// The first value is our current state.
// The second value is the fuction that is used to update our state.
// we set the initial state to an empty array: useState([])

  return (
    <div className="App">
<Header></Header>
<div className="main">
  <Main></Main>
    <Basket></Basket>
</div> 
 </div>
  )
     }
```
1. Create a components folder and create a file for header, main and aside.  
2. Export the functions and import them into the app.js file.
3. Display the sections of the page in the return statement using brackets

Components
--------------
In visual studio code go to extensions and install ES7 React/Redux/GraphQL/React-native snippets

Then in a components file you can type rfc and then tab to get a template for creating a function.

Rendering products
=====================
1. create a data.js file containing a data object with an array of product objects. export the data.
2. Create a product.js file in the components folder containing a function which returns product properties. export the function
3. Create a main.js file in the components folder which imports product function and maps over the products using id a key
4. In the app.js file import data, extracts products from the data object and renders it in the main section.

```
export default function Product(props) {
    const {product} = props;
    }
```

```
export default function Main (props) {
    // gets products from props
const {products } = props;
```

```
function App() {
const { products } = data;
  return (
        <div className="App">
<Header></Header>
<div className="main">
  <Main products={products}></Main>
    <Basket></Basket>
</div> 
 </div>
  )
     }
 ```
 
 Displaying empty cart
 =====================
 1. In the components folder create a Basket.js file
 2. in the app.js file import the basket function. Create a cartitems array using useState and render the component

```
import React from 'react';

export default function Basket (props) {
    const {cartItems} = props;
return (
<aside className="block col-1">
    <h2>Cart Items</h2>
    <div>{cartItems.length === 0 && <div>Cart is empty</div>}
    </div>
    </aside>
    )
}
```
```
function App() {
  const [cartItems, setCartItems] = useState([]);
 return (
        <div className="App">
<Header></Header>
<div className="main">
  <Main products={products}></Main>
      <Basket cartItems={cartItems} ></Basket>
</div> 
 </div>
  )
     }
```

Add to cart functionality
=========================
product:
1. in app.js file pass onAdd function to the returned main component
2. in the main.js component file pass onAdd to returned product component
3. In the product.js component file use the onAdd function in the button click

basket:
1. in app.js pass onAdd to the basket component
2. in the basket component use onAdd for the plus button

Cart functionality
======================
Add and remove products

1. In the Basket.js component file use functions as props, create button click events
2. In the app.js file import basket and put add and remove funtionlaity in the app function

```
export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;
return (
  <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">+</button>}
            <button onClick={() => onRemove(item)} className="remove">-</button>}
      
       </div>
       )}
  ```
  
  ```
    // when button clicked append product to array
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id)
  if(exist) {
  setCartItems(
    cartItems.map((x) =>
    x.id === product.id ? {...exist, qty: exist.qty +1 } : x
    )
);
  } else {
    setCartItems([...cartItems, {...product, qty:1}])
  }
};

  
  // when button clicked remove from cart
  const onRemove = (product) => {
    // search cart items where id equals product id
    const exist = cartItems.find((x) => x.id === product.id);
    // if qty 1 remove from cart
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
    setCartItems(
      cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty -1 } : x
      )
   
  );
}
  };
  return (
        <div className="App">
<Header></Header>
<div className="main">
  <Main onAdd={onAdd} products={products}></Main>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} ></Basket>
</div> 
 </div>
  )
 ```
 
 Cart calculations
 -------------------
 ```
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.20;
    const shippingPrice = itemsPrice > 20 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
 ```
 ```
 return (
   {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className="row">
            <div className="col-2">Items Price:</div>
            <div className="col-1 text-right">£{itemsPrice}</div>
        </div>
        <div className="row">
            <div className="col-2">Tax Price:</div>
            <div className="col-1 text-right">£{taxPrice}</div>
        </div>
        <div className="row">
            <div className="col-2">Shipping Price:</div>
            <div className="col-1 text-right">£{shippingPrice}</div>
        </div>
        <div className="row">
            <div className="col-2"><strong>Total Price:</strong></div>
            <div className="col-1 text-right">£{totalPrice}</div>
        </div>
        </>
        
    )}
 ```

Getting data from an api using hooks
====================================
```
// fetch data from an api 
const [data, setData] = useState([]);
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => response.json()) // convert response to json
  .then(setData);
}, []);

if(data) {
  return (
    <div className="products">
     {data.map((product, idx) => (
       <div className="product" key={idx}>
                 <h3>{product.title}</h3>
                 </div>
     ))}
                   </div>
   )
}

return <div>No products available</div>;
```

Toggle checkbox
===============
```
import {useReducer} from "react";
```

```
const [checked, toggle] = useReducer (
(checked) => !checked;
false
);

return(
<>
<input
type = "checkbox"
value = {checked}
onChange={toggle}
/>
<p>{checked ? "checked" : "not checked"}</p>
</>
);

```

on click alert
===============

```
       <button onClick={() => alert('implement Checkout')}>
Checkout
</button>
```
Handling errors
===============
```
const [error, setError] = useState(null);
```
```
 .catch(setError);
 ```
 ```
 if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
 ```


run the application
--------------------
In the terminal enter npm start.  The browser will open at http://localhost:3000/

Developer tools
=================
In the browser search chrome web store react developer tools and add the extesion to chrome.
Open dev tools and select components

Testing
===========
 JEST test suite is installed automatically when create react app is installed.
 create a .test.js file.
run using npm test


tutorials
========
React shopping cart - https://www.youtube.com/watch?v=02ieJ1YXZM4
https://www.youtube.com/watch?v=AmIdY1Eb8tY

react documentation - https://reactjs.org
