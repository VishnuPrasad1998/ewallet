const { request } = require("express");
const db = require("../models");
const Wallet = db.wallet;
const Transactions = db.transactions;

// Setup a wallet
exports.create = (req, res) => {
    if (!req.body.name || !req.body.balance) {
      res.status(400).send({ message: "Name/Balance can not be empty" });
      return;
    }
    let tid = Math.floor(Math.random()*8999999999+1000000000);
    const wallet = new Wallet({
      name: req.body.name,
      balance: parseFloat(req.body.balance).toFixed(4),
      transactionId: tid
    });
  
    wallet
      .save(wallet)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to save"
        });
      });
  };

//Create Transaction
exports.createTransaction = (req, res) => {
    const transactionWalletId = req.params.walletId;
    if (!req.body.amount || !req.body.description) {
      res.status(400).send({ message: "Amount/Description are mandatory fields" });
      return;
    }
    let tid = Math.floor(Math.random()*8999999999+1000000000);

    // Wallet.findById(transactionWalletId)
    // .then(data => {
    //   var balance = data.balance.value;
    // })
    if (req.body.amount < 0){
      transactionType = "DEBIT"
    }else{
      transactionType = "CREDIT"
    }
    newBalance = 30.3435 + req.body.amount

    body = {
      'balance': newBalance
    }
    Wallet.findByIdAndUpdate(transactionWalletId, body,
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated");
    }
    });

    const transactions = new Transactions({
      description: req.body.description,
      amount: parseFloat(req.body.amount).toFixed(4),
      walletId: transactionWalletId,
      transactionId: tid,
      balance: newBalance,
      type: transactionType
    });

    transactions
      .save(transactions)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Unable to save"
        });
      });
  };

//Retrieve all Transactions for a particular wallet.
exports.findAllTransactions = (req, res) => {
    const wid = req.query.walletId;
    const transSkip = req.query.skip;
    const transLimit = req.query.limit;

    Transactions.find({ walletId: wid})
      .sort({ date: -1 })
      .limit(parseInt(transLimit) || 10)
      .skip(parseInt(transSkip) || 0)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No transactions on wallet with id:" + wid });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving transactions on Wallet with id=" + wid });
      });
  };

// Find Wallet Details with an id
exports.findOneWallet = (req, res) => {
    const id = req.params.id;
  
    Wallet.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found any wallet with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Wallet with id=" + id });
      });
  };

  