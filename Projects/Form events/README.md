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
 
 Show password on check
 =======================
 ```
 document.getElementById("showpass").addEventListener("change", evt => {
 let passfield = document.getElementById("pass");
 passfield.type = evt.srcElement.checked ? "text" : "password";
 });
 ```
 Datalist
============
gives users list of options to add in text box or type their own option

```
    <label for="field4">Town: <input type="text" id="field4" list="towns"></label>
            <datalist id="towns">
                <option value="London"></option>
                <option value="Edinburgh"></option>
                <option value="Swansea"></option>
            </datalist>
 ```
 
character count 
=================
```
  <div class="row">
            <label for="txtfield">Delivery instructions </label>
            <textarea name="txtfield" id="charcount" cols="50" rows="10" maxlength="100"></textarea>
            Count: <output name="count" id="count" for="charcount">0</output>
            </div>
```
```
var charcount = document.getElementById("charcount");
var counter = document.getElementById("count");

charcount.addEventListener("keyup", e => {
    let count = charcount.value.length;
    counter.value = count;
});
```

Enable button only when certain number of required form fields are complete
=======================================================================
```
var frmValues = [];

if(form){

  form.addEventListener("change", e => {

  form.querySelectorAll("[required]").forEach(function(i) {
           if (i.value !== '') {
            if(frmValues.indexOf(i.value) === -1){
         frmValues.push(i.value);
            }
            if(frmValues.length == 4) {
              allAreFilled = true;
            confirmOrder.disabled = false; 
               }
        }
      });

    });
   
    console.log(frmValues);
}
```
