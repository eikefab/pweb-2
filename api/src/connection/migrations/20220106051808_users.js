exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('email').primary();
    table.string('password');
    table.string('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
