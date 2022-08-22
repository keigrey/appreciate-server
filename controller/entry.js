const entryModel = require("../model/entry");

module.exports = {
  async addEntry(req, res) {
    const entryData = await req.body;
    // await entryModel.addEntry(entryData);
    console.log(entryData);
    res.status(201).send("DEKITA");
  },

  async getAllEntries(req, res) {
    const list = [
      {
        id: 3,
        date: "2022-08-22",
        title: "Sping Water",
        text: "Gratitude turns what we have into enough.",
      },
      {
        id: 4,
        date: "2016-01-06",
        title: "Autumn Leaves",
        text: "Joy is the simplest form of gratitude.",
      },
      {
        id: 5,
        date: "2036-10-15",
        title: "Winter Wind",
        text: "Gratitude is not only the greatest of virtues but the parent of all others.",
      },
    ];

    res.status(200).json(list);
  },
};
