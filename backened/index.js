const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const connect = require("./db/connect");
const cors = require("cors")
const authRouter = require("./router/auth");
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/auth", authRouter);
app.use(morgan("tiny"));
const PORT = process.env.MY_PORT;
const start = async () => {
  await connect(process.env.MY_MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Your port has been started at ${PORT}....`);
  });
};
start();
