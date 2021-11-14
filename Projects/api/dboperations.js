var  config = require('./dbconfig');
const  sql = require('mssql');

async function getCustomers() {
    try {
        //connect to the database using dbconfig
      let  pool = await  sql.connect(config);
      // execute query
      let  people = await  pool.request().query("SELECT * from customers");
      // return recordset array
      return  people.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  module.exports = {
    getCustomers:  getCustomers}