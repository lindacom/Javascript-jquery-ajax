Two ajax calls on one web page - results will be displayed in two divs dynamic_content and dynamic_categories
===============================

<script>

  $(document).ready(function(){
load_data(1)
load_categorydata(1)
    });

    function load_data(page, query = '')
    {
      $.ajax({
        url:"fetchall.php",
        method:"POST",
        data:{page:page, query:query},
        success:function(data)
        {
          $('#dynamic_content').html(data);
        }
      });
    }

    
    $(document).on('click', '.page-link', function(){
      var page = $(this).data('page_number');
      var query = $('#search_box').val();
      load_data(page, query);
    });

    $('#search_box').keyup(function(){
      var query = $('#search_box').val();
      load_data(1, query);
    });

  

  function load_categorydata(page, query = '')
    {
      $.ajax({
        url:"fetchcategories.php",
        method:"POST",
        data:{page:page, query:query},
        success:function(data)
        {
          $('#dynamic_categories').html(data);
        }
      });
    }
    </script>
