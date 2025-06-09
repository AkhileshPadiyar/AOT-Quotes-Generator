const express = require('express')
require('dotenv').config()

const server = express()

server.use(express.static('public'))

server.get('/quotes', async(req,res) => {
    const response = await fetch('https://aot-api.vercel.app/quote')
    const json = await response.json();
    console.log(json)
    res.send(json)
})

server.listen(process.env.PORT, () => {
    console.log("server started")
})