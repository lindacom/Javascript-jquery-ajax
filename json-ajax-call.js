<div id="name"></div>
  
  <script>
$.ajax({
            type: "GET", //rest Type
            dataType: 'json', //mispelled
            url: "jsonbooks.php",
            async: false,
            contentType: "application/json; charset=utf-8",
            success:function(data)
        {
          $('#name').html(data);
        }
 });
 </script>
