Run a function when all elements have loaded
========================================
```
// update counter when page is loaded
document.addEventListener('DOMContentLoaded', function() {
 updateBadge();
}, false);
```

Mouseover and mouseout
==========================
```
  <div class="column">
                <button style="float: right;" type="button" class="button" onmouseover="mOver(this)"
                    onmouseout="mOut(this)">Mouseover banner ad</button>
                        </div>
```
```
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
```
