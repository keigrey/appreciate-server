/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("entry", function (table) {
    table.increments("id").primary();
    table
      .integer("user_id", 32)
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE");
    table.string("title", 72).notNullable();
    table.string("text", 500).notNullable();
    table.date("date").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("entry");
};
