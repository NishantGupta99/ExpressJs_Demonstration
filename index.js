const express = require('express') // to import express
const path = require('path') // importing path to attach complex html files to pathways 
const app = express() // created an object which has express module 
const port = 3000 // use this to assign port 

app.get('/', (req, res) => { // write the path inside the '/' where you want to send whatever the response is
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    //res.send('This is the about page')
   //res.sendFile(path.join(__dirname,'index.html'));
    res.json("Nishant", 21, "male", "Student") // res.json is what we use ot send json files 
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})