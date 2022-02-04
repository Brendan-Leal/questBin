const reqBinRouter = require("express").Router();
const { createPgBin, generatePgKey } = require("../lib/javascripts/createPgBin");
const parseRequest = require("../lib/javascripts/parseRequest");



// Hitting this API end point will create a new bin in postgres and mongoDB
// and redirect user 
reqBinRouter.get('/create-bin', async (req, res) => {
  const key = await generatePgKey();
  console.log("Key generated successfully: ", key);
  await createPgBin(key);

  res.redirect(`/${key}/instructions`);
});

module.exports = reqBinRouter;