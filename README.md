# ewallet
E wallet is an online wallet system which has the following features:
1. Setting Up multiple wallets
2. Listing Wallet Details
3. Transactions to a particular wallet(Debit and Credit)
4. Listing transactions with pagination and ordering.

# Libraries/Frameworks/Tools Used:
JavaScript(ES6), NodeJS, ExpressJS, Mongoose, MongoDB Atlas, Heroku, Jest Supertest.

## Steps for Installation and Running:
1. Clone the repo using ```
git clone <reponame> ```
2.```cd <reponame>``` 
3. Install Dependencies inside package.json by running
```
npm install
```
4. To Run the server
```
nodemon index.js
```
5. To test API use postman(Either use the API docs attached below/To test locally import api_collection.json on postman)
6. To run tests using Jest/Supertest run(Please make sure walled id's exist in db since test is run over orginal data) 
```
npm test
```

## Code Walkthrough
1. DB config is kept under config/ directory
2. Model Schema is kept under models/ directory. In which models for wallet and transactions are defined under seperate files
3. All the routes are kept under routes/ directory
4. The core service logic is kept under controllers/ directory
5. index.js is the main file also entry point.
6. Tests are written under __tests__ directory.


## API Docs
[API Docs](https://documenter.getpostman.com/view/11431269/UVJeEazj)
Click here to watch execution video [Here](https://drive.google.com/file/d/1tApjKn0bOPYAQkbMBRmNe71WjMpsebY3/view?usp=sharing)

## Improvements and Future Scope:
1. Extend Test coverage to all API's.
2. Implement Authentication and Authorization
3. Now Mongodb atlas url is exposed. It should be added to an environment variable in case of production.
