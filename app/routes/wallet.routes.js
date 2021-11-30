module.exports = app => {
    const wallet = require("../controllers/wallet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Wallet
    router.post("/setup", wallet.create);

    // Create a new Wallet
    router.post("/transact/:walletId", wallet.createTransaction);
  
    //Retrieve all transactions on a wallet
    router.get("/transactions", wallet.findAllTransactions);
  
    // Retrieve a single Wallet with id
    router.get("/wallet/:id", wallet.findOneWallet);
  
    app.use('/', router);
  };