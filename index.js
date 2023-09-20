const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const port = 3006
const shiprouter=require('./router/shipp-router')
const dotenv = require("dotenv").config();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/ship',shiprouter)

app.listen(port,()=>{
    console.log(`DSmanagement is running on ${port}`)
})