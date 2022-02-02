require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const parseRequest = require('./lib/javascripts/parseRequest');
const createBin = require('./lib/javascripts/createBin');

app.use(express.static('public'));

app.get('/api/create-bin', async (req, res) => {
  await createBin();
  res.render('inspect-bin');

  // TODO: Decide what view engine to use
  res.sendFile(__dirname + "/public/view.html");
});





// app.post('/:id', (req, res) => {
//   //Sending a post request to a bin
//   //Capture the entire request
// });

// app.put('/:id', (req, res) => {
//   //Capture a put request to a bin
// });

// app.delete('/:id', (req, res) => {
//   //Capture a delete request to a bin
// });



app.listen(port, () => console.log(`Listening on port ${port}`));