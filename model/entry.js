const knex = require("../db/knex");

const TABLE_NAME = "entry";

module.exports = {
  TABLE_NAME,

  getAllUserEntries({ id }) {
    console.log("🐽🐽🐽🐽🐽🐽🐽");
    console.log(id);
    return knex
      .select("id", "title", "text", "date")
      .from(TABLE_NAME)
      .where({ user_id: id });
  },
};
