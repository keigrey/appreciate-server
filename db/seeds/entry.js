/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("entry").del();
  await knex("entry").insert([
    { user_id: 1, title: "My day 1", text: "Text 1", date: "2019-09-02" },
    { user_id: 1, title: "My day 1", text: "Text 2", date: "2020-05-12" },
    { user_id: 1, title: "My day 1", text: "Text 3", date: "2022-03-16" },
  ]);
};
