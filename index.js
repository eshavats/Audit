const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
require("./routes/authRoutes")(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
