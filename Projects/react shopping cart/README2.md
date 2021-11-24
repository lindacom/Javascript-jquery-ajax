React Router
==============
Handles routing to get from page to page

In the terminal run npm install react-router@next react-router-dom@next

Create routes
--------------
Create a new file (e.g. pages.js) and add the routes

```
import React from "react";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}
```

Reference routes
---------------
in the index.js file:

```
imort {BrowserRouter as Router } from "react-router-dom";
```
Wrap the app inside the router so that it can get all the properties of the router:

```
ReactDOM.render (
<Router>
<App />
</Router>,
document.getElementById("root")
);
```

in the app.js file:

```
import {Routes, Route } from "react-router-dom";
import { Home, About} from "./pages";
```

Create a routes component with a route for each individual component:

```
<div>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/" element={<About />} />
</Routes>
</div>
```

Run the application
=====================
In the terminal run npm start

Training
========
reactrouter.com
