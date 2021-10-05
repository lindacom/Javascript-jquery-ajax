indexedDB
============

1. create a form with lables, inputs and a button
2. create a ul tag
3. in a javascript file crate database

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
