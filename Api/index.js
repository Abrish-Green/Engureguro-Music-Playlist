const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const API = express.Router()
const port = process.env.PORT
const connectDB = require('./config/mongodb')

const user = require('./route/user')

app.use(express.json());
app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
app.use('/user',user)

connectDB()


app.use('/api/v1', API)

API.use('/auth',require('./auth/auth'))


app.listen(port, () => {
  console.log(`Development Port:${port}`)
})