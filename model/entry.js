const knex = require("../db/knex");

const TABLE_NAME = "entry";

module.exports = {
  TABLE_NAME,

  getAllUserEntries({ user_id }) {
    return knex
      .select("id", "title", "text", "date")
      .from(TABLE_NAME)
      .where({ user_id: user_id });
  },

  addEntry(entryData) {
    return knex.insert(entryData).into(TABLE_NAME);
  },
};
