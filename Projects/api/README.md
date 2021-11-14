Create Node.js REST API with SQL Server Database
=================================================

Configure SQL server
====================
1. In windows type command compmgmt.msc to open the Computer Management window
2. select SQL Server Network Configuration and make sure TCP/IP option is enabled.
3. right-click on the TCP/IP and select properties. In the properties window make sure that port is set to 1433

Create database tables
===========================

Copy table from one database to another in MS Sql Server
----------------------------------------------------------
```
Select * into JavascriptDatabase.dbo.customers from 
PHPDatabase.dbo.tbl_customer 
```

Create an api project
=======================
1. create a blank folder, and change directory to that. 
2. In the directory run the command npm init -y to create a package.json file in that directory.  Edit the file (see attached)
3. on the command prompt run the command npm install. you will find the node_modules subfolder added to the project

Create files
----------------
1. Create a dbconfig.js file - contains configuration to connect to SQL Server
2. Create a class file - to represent the database table. The properties correspond to the table columns
3. create a file called dboperations.js - contains functions to perform database operations

Edit the dboperations.js file
------------------------------
1. import dbconfig and mssql modules.
2. write a function to fetch data from the database. The results are returned as an array.
3. export the functions as modules

Create the api
---------------
use Express to create the REST API

1. create a file called api.js
2.  import required modules such as express, CORS, body-parser. Besides them, we’re importing the dboperations module. Also, we are encoding the URL and configuring the API to use CORS.
3.  configure the API to listen to a particular port.

create api routes:
1. configure the middleware - you can put authentication, authorization, logging operations here
2. add a GET route to perform a GET operation - calls the method of dboperations module

Run the api
=============
 run the API using the command: nodemon api.js
 
Test the api
=============
Use a tool such as Postman.

Tutorials
==========
Create rest api for sql server database:
https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database

Resources:
https://www.npmjs.com/package/isomorphic-fetch
