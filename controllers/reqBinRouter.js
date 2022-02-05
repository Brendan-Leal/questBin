const reqBinRouter = require("express").Router();
const { createPgBin, generatePgKey } = require("../lib/javascripts/createPgBin");



// Hitting this API end point will create a new bin in postgres and mongoDB
// and redirect user 
reqBinRouter.get('/create-bin', async (req, res) => {
  const key = await generatePgKey();
  await createPgBin(key);

  res.redirect(`/${key}/instructions`);
});

module.exports = reqBinRouter;