// SEND AJAX REQUEST TO THE API - JQUERY

// $('#demo').load('http://localhost:8090/api/customers');

// returns an array of objects
/*$.getJSON('http://localhost:8090/api/customers', function(data) {
//console.log(data);

// loop through data (key value pairs)
var output = '<ul>';
$.each(data, function(key, val) {
    output += '<li>' + val.CustomerName + '</li>';
});
output += '</ul>';
$('#demo').html(output);
});*/

// LIVE SEARCH

// bind using jquery keyup event

$('#search').keyup(function() { 
  var searchField = $('#search').val();
  // case insensitive regular expression
  var myExp = new RegExp(searchField, "i");
$.getJSON('http://localhost:8090/api/customers', function(data) {
  //  console.log(data);
var output = '<ul class="searchresults">';
$.each(data, function(key, val) {
  if (val.CustomerName.search(myExp) != -1) {
    output += '<li>';
    output += '<h2>' + val.CustomerName + '</h2>';
    output += '<img src="images/avatar.jpg" alt="' + val.CustomerName + '" style="width:250px"/>';
    output += '<p>' + val.town + '</p>';
    output += '</li>';
  }
});
output += '</ul>';
$('#demo').html(output);
});
});
