React Router
==============
Handles routing to get from page to page

In the terminal run npm install react-router@next react-router-dom@next

Create routes
--------------
Create a new file (e.g. pages.js) and add the routes using the link component and its properties.

```
import React from "react";
import {Link} from "react-router-dom";
import {Link, UseLocation} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
            <Link to="about">About</Link>
                         </nav>
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

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>{location.pathname}does not exist</h1>
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
N.b. you can add nested links within the route.  You sould remove the self closing tag and add a closing tag. Use the outlet module to list them as a sub
section.
Run the application
=====================
In the terminal run npm start

If you get the following error Module not found: Can't resolve 'history' then run npm install history

Training
========
reactrouter.com
reactjs.org
