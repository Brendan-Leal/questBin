require('dotenv').config();

const { addReqDoc, listAllBins, getAllReqDocs_FromOneBin, findSingleReqDoc_FromOneBin, deleteAllReqDocs_FromOneBin } = require('./lib/javascripts/mongoQuery.js');
const parseRequest = require('./lib/javascripts/parseRequest');

const express = require('express');
const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const reqBinRouter = require("./controllers/reqBinRouter");
app.use("/api/req-bin", reqBinRouter);

// Naviate here to get all of the requests in the bin
// just use any parameter, such as "http://localhost:3000/12/view"
app.get('/:id/view', (req, res) => {
  getAllReqDocs_FromOneBin(req.params.id).then(
    response => {
      console.log(`There are ${response.length} records.`);
      res.json(response);// redirect to a display page
    }
  );
});

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

app.all("/:id", async (req, res) => {
  const binId = req.params.id;

  if (true) {
    await addReqDoc(parseRequest(req), binId);
    res.status(200);

  } else {
    res.send("invalid id"); // bin doesn't exist
  }
});


app.listen(port, () => console.log(`Listening on port ${port}`));
