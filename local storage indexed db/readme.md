Local storage
===============
Add key and multiple values to local storage

```
localStorage.setItem(name, [price, quantity]);
```

Clear all items in local storage
```
localStorage.clear();
```

indexedDB
============

1. in the html file create a form with lables, inputs and a button. create a ul tag
3. in a javascript file create database
4. in the browser go to application > indexedDB. Nb. may need to delete database and refresh page.
5. define indes and schema in the javascript 
6. Add new items to indexedDB
7. Get items from indexedDB
8. Delete items from indexedDB
9. In the form on the html pag enter name and subit
10. refresh the console to see input in indexedDB

Create a database
=================
let db;
get elements;
window.onload = () -> {
let request = window.indexedDB.open('contacts', 1);

request.onerror = function () {
console.log('db failed');
}

request.onsuccess = function () {
console.log('db opened');
db = request.result;
}

}
