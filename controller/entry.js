const entryModel = require("../model/entry");
const jwt = require("jsonwebtoken");

module.exports = {
  authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === null) {
      return res.status(401).send();
    }

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (error, decodedToken) => {
        if (error) {
          return res.status(403).send("BAD TOKEN K");
        }
        req.body.user_id = decodedToken.id;

        next();
      }
    );
  },

  async addEntry(req, res) {
    const entryData = await req.body;

    try {
      await entryModel.addEntry(entryData);
      res.status(201).send(`Added successfully`);
    } catch {
      res.status(500).send();
    }
  },

  async getAllEntries(req, res) {
    const entryData = await req.body;

    const userEntries = await entryModel.getAllUserEntries(entryData);

    res.status(200).json(userEntries);

    // const list = [
    //   {
    //     id: 3,
    //     date: "2022-08-22",
    //     title: "Sping Water",
    //     text: "Gratitude turns what we have into enough.",
    //   },
    //   {
    //     id: 4,
    //     date: "2016-01-06",
    //     title: "Autumn Leaves",
    //     text: "Joy is the simplest form of gratitude.",
    //   },
    //   {
    //     id: 5,
    //     date: "2036-10-15",
    //     title: "Winter Wind",
    //     text: "Gratitude is not only the greatest of virtues but the parent of all others.",
    //   },
    // ];
  },
};
