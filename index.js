const app = require("express")();
const consign = require("consign");
const db = require("./db");
const bodyParser = require("body-parser");

app.db = db;

app.use(bodyParser.json());

consign().include("./api/movies.js").then("./routes.js").into(app);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
