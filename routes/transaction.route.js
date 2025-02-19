const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.post("/", async (req, res) => {
  const { desc, amount, type } = req.body;
  const transaction = new Transaction({ desc, amount, type });
  await transaction.save();
  res.json(transaction);
});

router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

module.exports = router;