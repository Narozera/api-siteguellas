const path = require("path");
const express = require("express");

const app = express();

app.use(require("cors")());
app.use(express.json());

app.get("/send", (req, res) => {
  res.status(200).send({ message: "api rodando" });
});

app.post("/send", (req, res, next) => {
  const fullName = req.body.fullName;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  require("./services/mailServices.cjs")(fullName, phone, email, message)
    .then((response) => res.json("Email enviado com sucesso!"))
    .catch((error) => res.status(500).json(error));
});

app.use(express.static(path.join(__dirname, "dist")));

app.listen(3000, () => {
  console.log("server start");
});
