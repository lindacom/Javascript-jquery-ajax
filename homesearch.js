<script> 
   // catch enter code in search form in front page, add url parameters and redirect to another page  

   $('#search').keyup(function (e) {
    var str = $('#search').val();
    var domain = "http://lindacom.infinityfreeapp.com/books/bookdetails.php";
    var url = domain+"?search=" + str;
    if (e.keyCode == 13) {
        location.href = url;
    }
});
 
  </script> 
