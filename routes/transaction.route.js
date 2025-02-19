const express = require("express");
const Transaction = require("../models/transaction.model");
const verifyToken = require("../middlewares/auth.middleware");

const router = express.Router();

// 🔹 Ajouter une transaction
router.post("/", verifyToken, async (req, res) => {
  try {
    const { desc, amount, type } = req.body;
    const transaction = new Transaction({ user: req.user.userId, desc, amount, type });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur lors de l'ajout de la transaction." });
  }
});

// 🔹 Récupérer les transactions de l'utilisateur connecté
router.get("/", verifyToken, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.userId });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur lors de la récupération des transactions." });
  }
});

module.exports = router;
