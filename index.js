const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./Api/api");
const {config}= require("dotenv")
const cors = require("cors");

const PORT = process.env.PORT||5000;
config()


const app = express();
app.use(cors());
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("mongodb connected");
}

app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log("server running on" + PORT);
});
