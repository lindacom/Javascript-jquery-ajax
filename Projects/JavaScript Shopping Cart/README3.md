Book a delivery slot
======================

```
 <div style="background-color:var(--white);border:1px;padding:10px;margin:0 auto;;width:600px;border-radius:25px;">

       <h2 style="background-color:var(--grey); padding:20px;">Book a delivery</h2>
<p>Choose a delivery time. </p>

<div id="clock" class="row calendar">
    <div class="label">Now</div>
    <div id="current-date" class="month"></div>
    <div id="current-time" class="time"></div>
</div>

<table style="width:100%">
    <tr>
        <td style="width:33.33%">BETWEEN <BR />10:00AM TO 11:AM</td>
    <td style="width:33.33%">£3.50</td>
    <td style="width:33.33%"><button class="button btn-book">Book</button></td>
</tr>
      <tr><td style="width:33.33%">BETWEEN <BR />11:00AM TO 12:PM</td>
        <td style="width:33.33%">£4.50</td>
        <td style="width:33.33%"><button class="button btn-book">Book</button></td>
    </tr>
        <tr><td style="width:33.33%">BETWEEN <BR />12:00PM TO 1:PM</td>
            <td style="width:33.33%">£5.50</td>
            <td style="width:33.33%"><button class="button btn-book">Book</button></td>
        </tr>
            <tr><td style="width:33.33%">BETWEEN <BR />1:00PM TO 2:PM</td>
                <td style="width:33.33%">£6.50</td>
                <td style="width:33.33%"><button class="button btn-book">Book</button></td></tr>
</table>


</div>
```
```
 <script>

        // click book button to choose a delivery time
        var btnBook = document.getElementsByClassName("btn-book");
        for(var i=0; i < btnBook.length; i++) {
            btnBook[i].onclick = function(e) {
                               var chosenTime = e.target.parentElement.parentElement.children[0].innerText;
                var delCost = e.target.parentElement.parentElement.children[1].innerText
               alert(`you have chosen time: ${chosenTime}. The delivery will cost ${delCost}`);
                   }
                }

    </script>
 ```
