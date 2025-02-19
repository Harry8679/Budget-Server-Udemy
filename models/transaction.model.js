const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"], // Seulement "income" ou "expense"
      required: true,
    },
    date: {
      type: Date,
      default: Date.now, // Ajoute automatiquement la date de transaction
    },
  },
  { timestamps: true } // Pour ajouter createdAt et updatedAt
);

module.exports = mongoose.model("Transaction", TransactionSchema);