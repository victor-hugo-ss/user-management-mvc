require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT;

// Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
