const { DatabaseError } = require("pg");
const knex = require("../db/knex");

const TABLE_NAME = "user";

module.exports = {
  TABLE_NAME,

  addUser(userData) {
    return knex.insert(userData).into(TABLE_NAME);
  },

  getUserByEmail(userData) {
    return knex
      .select("email", "password")
      .from(TABLE_NAME)
      .where({ email: userData.email });
  },
};
