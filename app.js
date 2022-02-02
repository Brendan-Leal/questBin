require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Hello World")
  //Homepage
})

app.post('/', (req, res) => {
  //Submit the form / requesting a new URL
})


app.get('/:id/view', (req, res) => {
  //Getting all of the requests in the bin
})

app.post('/:id', (req, res) => {
  //Sending a post request to a bin
  //Capture the entire request
})

app.put('/:id', (req, res) => {
  //Capture a put request to a bin
})

app.delete('/:id', (req, res) => {
  //Capture a delete request to a bin
})



app.listen(port, () => console.log(`Listening on port ${port}`))