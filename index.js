//import express, body parsera
const express = require("express");
const bodyParser = require("body-Parser");
const BankModel = require("./model");
const {
  listBankController,
  createBankController,
  updateBankController,
  deleteBankController,
} = require("./controllers");
//create express server instance
const server = express();
const mongoose = require("mongoose");

//midddlewares
server.use(bodyParser.json());

//routes
//view banks - get method
server.get("/bank/:id?", listBankController);

//create bank - post method
server.post("/bank", createBankController);

//update bank - put method
server.put("/bank", updateBankController);

// //delete bank - delete method
server.delete("/bank", deleteBankController);

//connect to databse and start server
mongoose
  .connect(
    "mongodb+srv://codetrainUser:WMHLKnZOj8YhWOQA@cluster0.d9gm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    server.listen(3002, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));
