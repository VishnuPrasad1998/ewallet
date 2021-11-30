const Double = require('@mongoosejs/double');
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        description: String,
        amount: Double,
        walletId: String,
        balance: Double,
        type: String,
        transactionId: String,
        date: { type: Date, default: Date.now }
      }
    );
  
    schema.method("toJSON", function() {
      const {_id, ...object } = this.toObject();
      object.id = _id;
      delete object.__v;
      return object;
    });
  
    const Transactions = mongoose.model("transactions", schema);
    return Transactions;
  };