const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const dotenv = require("dotenv");

dotenv.config();

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/Routes"));

app.listen(process.env.PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
