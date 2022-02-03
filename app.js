require('dotenv').config();
const { addReqDoc, listAllBins, getAllReqDocs_FromOneBin, findSingleReqDoc_FromOneBin, deleteAllReqDocs_FromOneBin} = require('./lib/mongoQuery.js') 
const express = require('express');
const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));

SEED_REQ = {
  host: "github.com",
  method: "GET",
  status: 300
};

SEED_BIN = 'as324ljksfd';

// navigate here to add one seed req to the seed bin
app.get('/seed', (req, res) => {
  addReqDoc(SEED_REQ, SEED_BIN).then(
    response => {
      res.send(response);
    }
  )
})

// Naviate here to get all of the requests in the bin
// just use any parameter, such as "http://localhost:3000/12/view"
app.get('/:id/view', (req, res) => {
  getAllReqDocs_FromOneBin(SEED_BIN).then(
    response => {
      console.log(`There are ${response.length} records.`)
      res.json(response);
    }
  )
})

// navigate here to delete all reqs from seed bin
app.get('/delete-seed', (req, res) => {
  deleteAllReqDocs_FromOneBin(SEED_BIN).then(
    response => {
      console.log(response);
      res.send(response);
    }
  )
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:id', (req, res) => {
  res.render('bin');
})

app.get('/:id/query', (req, res) => {
  //call to dbs to get all documents in a collection
  //response needs to be passed to display view below instead of []
  res.render('display', {
    requests: []
  });
})

app.post('/', (req, res) => {
  //Submit the form / requesting a new URL
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