
exports.up = function (knex) {
	return knex.schema.createTable('post', (table) => {
		// Auto increment
		table.increments();

		table.text('title').notNullable();
    table.text('content').notNullable();

    // default set to 0
		table.integer('likes').notNullable().defaultsTo(0);

		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	
	return knex.schema.dropTable('post');
};
