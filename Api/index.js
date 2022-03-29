const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
const API = express.Router()
const port = 5000

const user = require('./route/user')

app.use(express.json());
app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
app.use('/user',user)

mongoose.connect(
    process.env.DATABASE_MONGODB_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);


  const db = mongoose.connection;
  db.on("error", function () {
    console.error.bind(console, "connection error: ")
  });
  db.once("open", function () {
    console.log("Remote Database Connected");
  });

app.use('/api/v1', API)

API.use('/auth',require('./auth/auth'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})