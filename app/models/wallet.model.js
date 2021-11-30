const Double = require('@mongoosejs/double');
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        balance: Double,
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
  
    const Wallet = mongoose.model("wallet", schema);
    return Wallet;
  };