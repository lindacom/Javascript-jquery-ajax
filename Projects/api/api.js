// import required modules and configure api to use cors
var  Db = require('./dboperations');
var  Order = require('./Customers');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//api to listen on port
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Customer API is runnning at ' + port);

// API ROUTES

// middleware
// this route will be called before any other routes, and you can put 
// authentication, authorization, logging operations here.
router.use((request, response, next) => {
    console.log('middleware');
    next();
  });

  // GET route
  // calls  getCustomers() method of dboperations module
  router.route('/customers').get((request, response) => {
    Db.getCustomers().then((data) => {
      response.json(data[0]);
    })
  })