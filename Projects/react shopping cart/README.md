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
in the src > app.js file write the application code. Nb. the html code for the page is contained in the return block.

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
