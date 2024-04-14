//! creating Express Serever

const { log } = require("console");
const express = require("express");

const app = express();

const PORT = 3000;



// app.get('/' ,(req,res)=>{
//     res.send('HEllo john')
// })

// app.listen(PORT, (error) => {
//   console.log(`serever is working on ${PORT}`);
// });


//! create http serever 

const  http = require('http')

http.createServer((req,res)=>{
    res.write("this is http serever ")
    res.end()

}).listen(PORT,()=>{
    console.log('Http serever is working good');
})

// Read And Write the fs 