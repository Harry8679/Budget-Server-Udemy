const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connecté"))
  .catch(err => console.error(err));

const transactionRoutes = require("./routes/transactions");
app.use("/api/transactions", transactionRoutes);

const PORT = process.env.PORT || 4800;

app.listen(PORT, () => console.log("Serveur démarré sur le port 4400"));