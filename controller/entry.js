const entryModel = require("../model/entry");

module.exports = {
  async addEntry(req, res) {
    const entryData = await req.body;
    // await entryModel.addEntry(entryData);
    console.log(entryData);
    res.status(201).send("DEKITA");
  },
};
