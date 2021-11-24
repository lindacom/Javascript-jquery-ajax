React is used for creating user interfaces. requires node.js 8 or higher and npm 5.6 or higher

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


tutorials
========
React shopping cart - https://www.youtube.com/watch?v=02ieJ1YXZM4

react documentation - https://reactjs.org
