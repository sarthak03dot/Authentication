const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const appRoute = require("./routes/auth");

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routr
app.use("/api/auth", appRoute);

// mongodb connection

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port :${PORT}`);
});
