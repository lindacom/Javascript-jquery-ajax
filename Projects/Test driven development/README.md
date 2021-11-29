Test Driven Development (TDD)
============================
Basic TDD cycle
---------------
1. RED - write a failing test
2. GREEN - refactor the code you wrote (to make it pass)
3. REFACTOR - write production code to mae the test pass

Types of testing
-----------------
1. Unit test - low level functionality
2. Integration test - pieces work together (app, database, api)
3. End to end test - app is working from viewpoint of the user

Unit testing
============
This type of testing tests that function work as expected.
Mocha js is a testing framework 
chai can be used as an assertion library

writing and running tests
==========================

Create a project
-----------------
1. In your project create a new folder called src
2. In the terminal use the cd command to navigate to this folder
3. enter npm init -y to create a package.json file in this folder
4. enter npm install --save-dev mocha chai to install Mocha and Chai
5. create a new sub folder which will contain javascript production and test code
6. enter npm install --save -dev @babel/core @babel/preset env @babel/register to install Babel
7. create a .babelrc resource file in the root of the folder which contains one object:

```
{"presets": ["@babel/preset-env"]}
```
this ensures ES6 code is compiled correctly

Writing test files
--------------------
1. Create a production file containing a function 
2. Create a test file and import a function from the production file e.g.

```
import {expect} from 'chai';
import Allproducts, {getProduct} from './Allproducts';
```
3. Enter the test script. Use the describe keyword to group similar tests together. Use the it keyword to describe individual tests/functionality to be 
tested which includes a description of the functionality. Use the assert keyword. This uses the chai library

```
describe('getProduct - basic functionality', () => {
    it('returns objects when passed', () => {
        let chocolate = new Allproducts ("Chocolate", "/images/chocolate.jpg", 2.00,  3,  "sweets" );
        const expected = {name:"Chocolate", image:"/images/chocolate.jpg", price:2.00,  likes:3,  category:"sweets"};
        const actual = getProduct(chocolate);
        expect(actual).to.deep.equal(expected);
    });
});
```
Running test scripts
---------------------
in the console enter: 
```
npx mocha "src/**/*.test.js" --recursive --require @babel/register
```
This will run all tests in the src folder and show passing and failing tests.

Alternatively ope the ackage.json file and add the above code to the tests key. N.b use backslash to escape the speechmark. Then to run the tests 
in the terminal enter npm run test.

Async/Await
=================
To use async await in Mocha you need to download regenerator runtime.

1. in the terminal enter npm install --save-dev regenerator-runtime
2. In the test folder create a new file e.g. called mocha-setup.js and import regenerator. enter:

```
import 'regenerator-runtime/runtime';
```
3. In the package.json file change the mocha test details so that regenerator is run first before any tests

```
npx mocha "src/**/*.test.js" --recursive --require @babel/register --file sr/mocha-setup.js
```



