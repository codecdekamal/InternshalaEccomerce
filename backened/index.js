const express = require("express");
const app = express();
const fileUpload = require("express-fileupload")
const morgan = require("morgan");
require("dotenv").config();
const connect = require("./db/connect");
const cors = require("cors")
const productRouter = require("./router/Product")
const authRouter = require("./router/auth");
const orderRouter = require("./router/Order");
app.use(express.static("./public"))
app.use(fileUpload());
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/order", orderRouter);
app.use(morgan("tiny"));
const PORT = process.env.MY_PORT;
const start = async () => {
  await connect(process.env.MY_MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Your port has been started at ${PORT}....`);
  });
};
start();
