const { DatabaseError } = require("pg");
const knex = require("../db/knex");

const TABLE_NAME = "user";

module.exports = {
  TABLE_NAME,

  async addUser(userData) {
    return knex.insert(userData).into(TABLE_NAME);
  },
};
