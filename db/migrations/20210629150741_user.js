
exports.up = function(knex) {
  return knex.schema.createTable('user', table=> {

    // Auto increment id (it will work without putting id inside)
    table.increments('id');

    // Email must be not null and unique
    table.string('email').notNullable().unique();

    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {

  // We just need to drop the 'user' table
  return knex.schema.dropTable('user');
};

