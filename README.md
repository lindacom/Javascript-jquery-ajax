Return JSON response from AJAX using jQuery and PHP
======================================================
```
$( document ).ready(function() {
  var api_url = 'http://example.com/wordpress/wp-json/wp/v2/posts'
 $.ajax({
        url: api_url,
        contentType: "application/json",
        dataType: 'json',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var date = response[i].date;
                var slug = response[i].slug;
                var excerpt = response[i].excerpt.rendered;
                
                

                var tr_str = "<tr>" +
                    "<td align='center'>" + (i+1) + "</td>" +
                    "<td align='center'>" + date + "</td>" +
                    "<td align='center'>" + slug + "</td>" +
                    "<td align='center'>" + excerpt + "</td>" +
                    
                    
                    "</tr>";

                $("#results").append(tr_str);       
                
        }    
        } 
    });
 });
 
 ```
 
 Session storage
 ===============
 
The localStorage and sessionStorage properties allow you to save key/value pairs in a web browser. The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed). LocalStorage stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

Saving data to session storage - sessionStorage.setItem("key", "value");

Reading data from session storage - var lastname = sessionStorage.getItem("key");

Remove item from session storage - sessionStorage.removeItem("key");

Clear all data from session storage - sessionStorage.clear();
 


Tutorials
==========

https://www.youtube.com/watch?v=rDPU5EYYXmg

Local storage:
https://www.youtube.com/watch?v=W8SFylZ8Jh4

Introduction to AJAX and JSON
https://www.youtube.com/watch?v=vz7_6y6zW_M
