const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./helpers/headers")(app);
require("./routes")(app);
require("./helpers/error")(app);

require("./helpers/connection")(app);