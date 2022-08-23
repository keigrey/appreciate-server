const userModel = require("../model/user");
const bcrypt = require("bcrypt");

module.exports = {
  async addUser(req, res) {
    const userData = req.body;

    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const userDataToStore = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: hashedPassword,
      };

      try {
        await userModel.addUser(userDataToStore);
        res.status(200).send("User Successfully Added");
      } catch (error) {
        res.status(409).send();
      }
    } catch {
      res.status(500).send();
    }
  },

  async loginUser(req, res) {
    const receivedData = req.body;

    const [userData] = await userModel.getUserByEmail(receivedData);

    if (!userData) {
      return res.status(404).send("Cannot find user");
    }
    try {
      if (await bcrypt.compare(receivedData.password, userData.password)) {
        res.send("SUCCESS");
      } else {
        res.send("NOT ALLOWED");
      }
    } catch {
      res.status(500).send();
    }
  },
};
