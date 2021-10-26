Search box transition on focus
==============================
```
.sbox {
  background-color: var(--indigo); 
    padding: 15px;
    margin-bottom: 15px;
    height: 150px;
}

#search_box {
/*width: 100%;*/
width: 6em;
height: 50px;
/*width:900px;*/
position:relative;
transition: all .3s;
}

#search_box:focus {
  width: 30em;
  background-color: #fff;
  border-color: #74abff;
  box-shadow: 0 0 10px rgba(109, 207, 246, .75);
}
```
```
           <div class="column form-group sbox" ">
                                   
                        <h3 style="text-align: center;">Quick search</h3>
                        <input type="search" name="search_box" id="search_box" class="form-control"
                        placeholder="Search by title, author or category" role="search" >
                         <span style="right:6px;position: absolute;color: red;"> <i class="fas fa-search"></i></span>
                    </div> 
 ```
