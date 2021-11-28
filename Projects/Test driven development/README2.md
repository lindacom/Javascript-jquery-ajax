Code quality with ESLint in visual studio code
===============================================
ESLint is a package that enforces a coding style guide in your project to maintain a consstent style.

1. open project folder in visual studio code
2. click extensions tab and install ESLint
3. Install ESLint package in the project -  install eslint-cli gloablly npm -g i eslint-cli 
4. initialise eslint in the project - in the terminal write npm i eslint --save-dev. 
5. To set up a configuration file  run eslint --init
6. You will then see questions to configure ESLint. How would you like to use ESLint - To check syntax, find problems, and enforce code style, what 
modules does your project use, what framework does your framework use, does your project use typescript, where does your code run, how would you like to define a 
style - use popular style guide, which style guide - air BnB, what format do you want your config file - json
7. dependencies will now be installed. go to package.json file to view them
8. a new file has been created. .eslintrc.json which contains all the rules. N.b. if your project does no follow these rules then errors will be displayed
in the proeblems tab of the terminal

To be able to run eslint from the terminal
--------------------------------------------
in the package.json file add the following script to check the whole project:
"Lint": "eslint ./"

then in the terminal write npm run lint
