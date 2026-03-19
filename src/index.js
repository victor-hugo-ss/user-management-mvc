require("dotenv").config();
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const conn = require("./config/db");
const PORT = process.env.PORT;

// Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "public")));

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
