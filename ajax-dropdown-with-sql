//connect to and query database

<?php  
$connect = mysqli_connect("host", "user", "password", "database");
 $query = "SELECT category FROM books GROUP BY category";
$result =  mysqli_query($connect, $query);
?>

<!-- category dropdown -->

<div class="row">
    <div class="col-md-4">
    <h2>Filter by category</h2>
     <select name="category_list" id="category_list" class="form-control">
      <option value="">Select Category</option>
      <?php 
      while($row = mysqli_fetch_array($result))
      {
       echo '<option value="'.$row["category"].'">'.$row["category"].'</option>';
      }
      ?>
     </select>
    </div>
    
   </div>
   
   <!-- dynamic list of books -->
   <div class="table-responsive" id="dynamic_content"></div>
   
    <!-- FILTER ON CHANGE SCRIPT SEND VALUE AS QUERY TO ANOTHER AJAX CALL CALLED LOAD_DATA -->

    <script>

     $('#category_list').change(function(){
          var query = $(this).val();
load_data(1, query);
    });
    
    </script>
    
// Scripts to run when page loads
    
     $(document).ready(function(){
load_data(1)
});

// Displays list of books in div with id dynamic_content

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
