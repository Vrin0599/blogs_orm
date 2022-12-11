require("dotenv").config();

const express = require("express");

const routes = require("./routes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});
