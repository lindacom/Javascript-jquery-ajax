// search filters

const searchBox = document.getElementById("search_box");
const side = document.getElementById("sidebar2");
let filter = "";

// display products based on search
const names = document.getElementsByClassName("shop-item"); // get all the products

function searchFilter(filter) {
  filter = filter.toUpperCase(); // search input in uppercase

  for (let i = 0; i < names.length; i++) {
    const span = names[i].getElementsByClassName("shop-item-title")[0]; // get title of this product
    const txtValue = span.textContent || span.innerText || span.innerHTML;

    const span2 = names[i].getElementsByClassName("shop-item-category")[0]; // get category of this product
    const txtValue2 = span2.textContent || span.innerText || span.innerHTML;

    // checks if search(filter) is contained in the title or category
    // (>-1 means it does exist)
    const searchAlert = document.getElementById("search-alert");

    if (txtValue.toUpperCase().indexOf(filter) > -1
    || txtValue2.toUpperCase().indexOf(filter) > -1) {
      names[i].style.display = "";
      searchAlert.style.display = "none";
    } else {
      names[i].style.display = "none";
      searchAlert.style.display = "block";
      searchAlert.innerHTML = "There are no products matching this description"; // display message if no products are found
    }
  }
} // END

// captures typed characters (event) in searchbox
if (searchBox) {
  searchBox.addEventListener("keyup", (e) => {
    filter = e.target.value;
    searchFilter(filter); // passes input to searchfilter function
  });

  searchBox.onfocus = function () { side.style.display = "none"; }; // hide right sidebar when search box is in focus
}

// this function will be executed on click of X (clear button) reload page
// but error is it also fires for pressing enter ???
if (searchBox) {
  searchBox.addEventListener("search", () => {
    window.location.reload();
  });
}

// checkboxes - when clicked call function passing in value
const checkedCategory = document.getElementsByClassName("category");
let input = "";

for (let i = 0; i < checkedCategory.length; i++) {
  checkedCategory[i].onclick = function () {
    input = this.value;

    searchFilter(input);
  };
}

// filter by top rated

const topy = []; // array of each likes
let best = 0;

const match = []; // array of highest rated products (names)
let countz = 0;

function toprated() {
  for (let i = 0; i < products.product.length; i++) {
    // loop through products object and get the number of likes for each item
    const liker = products.product[i].likes;

    topy.push(liker);
    topy.sort().reverse(); // put all likes in an array and sort array of likes in descending order
    //  best = topy[0]; // get the highest rated number from the sorted array
    // using array destructuring
    [best] = topy;
  }

  for (let j = 0; j < products.product.length; j++) {
    if (products.product[j].likes === best) { // find all products that have the highest rating
      const good = products.product[j].name; // get title
      match.push(good);
      match.sort(); // add highest rated names to array and sort alphabetically
    }
  }

  for (let l = 0; l < names.length; l++) {
    const span = names[l].getElementsByClassName("shop-item-title")[0]; // get title of all products in the store
    const txtValue = span.textContent || span.innerText || span.innerHTML;

    for (let m = 0; m < match.length; m++) { // loop through the highest rated product names
      // if array is empty don't display the remaining products
      if (match == "") {
        names[l].style.display = "none";
      }
      // if the counter of highest rated names looped has already been set increment it
      if (countz) {
        countz += 1;
      }

      // if the current highest rated product name matches the current product name display it
      if (match[m] === txtValue) {
        names[l].style.display = "block";
        if (match.length > 1) {
          const pointer = match.indexOf(match[m]);
          // if matched find the name position in the array and
          // remove it (so it is no longer in the loop)
          match.splice(pointer, 1);
        }
      } else {
        if (countz == match.length || match.length == 1) {
          // if not matched and no more to loop through don't display
          names[l].style.display = "none";
          countz = 0;
        } else {
          if (!countz) {
            // or if not matched and there is no counter set it to one (as the loop will continue)
            countz = 1;
          }
        }
      }
    }
  }
}

// filter alphabetically

function getProductLabel(div) {
  let span = div.getElementsByClassName("shop-item-title")[0]; // get title of all products in the store
  return span.textContent || span.innerText || span.innerHTML;
}

function alphabetical() {
//  window.location.reload();
  let switching = true;
  /* Make a loop that will continue until no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    // Loop through products div collection:
    for (let l = 0; l < names.length; l++) {
      // start by saying there should be no switching:
      const a = getProductLabel(names[l]);

      const b = getProductLabel(names[l + 1]);

      if (a > b) {
        names[l].parentNode.insertBefore(names[l + 1], names[l]);
        switching = true;
      }
    }
  }
}

// filter by price - low to high - using bubble sort

function getProductPrice(divs) {
  const span = divs.getElementsByClassName("shop-item-price")[0]; // get title of all products in the store
  return span.textContent || span.innerText || span.innerHTML;
}

function filterPriceLow() {
  let switching = true;
  /* Make a loop that will continue until no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;

    // Loop through products div collection:
    for (let l = 0; l < names.length; l++) {
      const a = getProductPrice(names[l]);

      const b = getProductPrice(names[l + 1]);
      if (a > b) {
        names[l].parentNode.insertBefore(names[l + 1], names[l]);
        switching = true;
      }
    }
  }
}

// filter by price - high to low - using merge sort

function filterPriceHigh() {

  let a = getProductPrice(names);

// merge the arrays
  const _mergeArrays = (a, b) => {
    const c = []
  // while there are two halves push them into the array lowest first
    while (a.length && b.length) {
      c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
  
    //if we still have values, let's add them at the end of `c`
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
  
    return c
  }

  // sort the arrays
  const mergeSort = (a) => {
    if (a.length < 2) return a // if there are only two or less items return them no need to divide
    const middle = Math.floor(a.length / 2); // divide collection in two
    const a_l = a.slice(0, middle) // left side
    const a_r = a.slice(middle, a.length) // right side (from middle to end)
    // divide the halves again until there are two single items
    const sorted_l = mergeSort(a_l) 
    const sorted_r = mergeSort(a_r)
    // merg the two halves
     return _mergeArrays(sorted_l, sorted_r)
  }
}

// dropdown - when select is changed call function
const dropFilter = document.getElementById("prodFilter");

if (dropFilter) {
  dropFilter.onchange = function () {
    const filterValue = dropFilter.value;

    // CHANGE TO CASE STATEMENT
    if (filterValue == "top-rated") {
      toprated();
    } else if (filterValue == "a-z") {
    // window.location.reload();
      alphabetical(); }
    else if (filterValue == "low-high") {
      filterPriceLow();
    }
    else if (filterValue == "high-low") {
      filterPriceHigh();
    }
  };
}

// button click go to book a slot delivery page
// n.b. btn-slot has been used on another page in main.js file. could be reused?

const btnSlot = document.getElementById("btnSlot");

if (btnSlot) {
  btnSlot.onclick = () => {
    window.location = "delivery.html";
  };
}

// put the count of items from session storage in counter
// if empty put the count of items from local storage in the counter
// N.b. removed counter from homepage.  Need to check if this is working.  
// Only currently using the session storage part ???
function updateBadge() {
  let badgeCount = JSON.parse(sessionStorage.getItem("allItems"));

  if (!badgeCount) {
    badgeCount = JSON.parse(localStorage.getItem("allItems"));
  } else {
    const bbadge = document.getElementById("badge");
    if (bbadge) {
      bbadge.innerHTML = badgeCount.length;
    }
  }
}

// update counter when page is loaded
document.addEventListener("DOMContentLoaded", () => {
  updateBadge();
}, false);
