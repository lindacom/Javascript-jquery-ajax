API routes and queries
======================
Get product by name entered in the url parameter
======================================================

api.js
------
```
// calls  getProductName() method of dboperations module
  router.route('/products/:item').get((request, response) => {
    let item = request.params.item;
    Db.getProductName(item).then((data) => {
       response.json(data[0]);
       })
   })
```

dboperations.js
----------------
```
 async function getProductName(item) {
    var mine = item;
       try {
        //connect to the database using dbconfig
      let  pool = await  sql.connect(config);
      // execute query
      let  items = await  pool.request().query("SELECT * from products WHERE productName ='" + mine + "'" );
      // return recordset array
         return items.recordsets;
       // let one = items.recordsets;
        // convert array to th object
        // const obj = Object.assign({}, one);
    }
    catch (error) {
      console.log(error);
    }
  }
 ``
