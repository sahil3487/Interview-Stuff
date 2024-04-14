const express = require('express')
const http = require('http')
const app = express()



app.get('/', (req, res) => {

    res.send("Express serever is working fine")

}).listen(5000, () => {
    console.log("Server is Connected ready to go")
})






http.createServer((req, res) => {

    res.write("Serever is working fine ")
    res.end()


}).listen(3000)