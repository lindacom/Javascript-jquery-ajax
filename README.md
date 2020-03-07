Isotope.js
===========
For information on how to use this library see isotope.metafizzy.co. 
Also refer to the ui section to see the code example and also see how to combin filters.

You will need two files
1. isotope.js (or link to the CDN version)
2. Create a javascript file e.g. isotope settings.js

Filtering
---------
1. Filterable content should be in a container eg. <section class="courses">
2. Set the container as isotope, choose a selector e.g. courses, apply masonry layout
3. Repoint layout once content reloaded
4. The ul part of the navigation list should have a class filter-list data-filter-group="anyname"
5. The filter list on the wepage shoud have a sort class name and a class data-sort-value="anyname"
6. Each individual list item should have a class data-filter="anyindividualname"

The settings file will: 
Have the jquery no onflict statement at the top of the file i.e. jQuery(document).ready(function ($) {
set a variable for the container
Set a variable for the dropdown with layout mode as masonry
Set a layout for the container images
code for when filter list anchors are clicked

How to sort based on url hash
----------------------------

1. Get a list of all checkboxes on a page and store them in an array
2. Get the value of a checked checkbox and push it into an empty filters array
3. Set url with hash parameter whe a checkbox is checked
4. Listen for when the url is changed
5.Get the hash value from the url
6. Combine has values in an array and convert to a string store in a variable and pass to an ajax function
