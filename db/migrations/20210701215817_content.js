
exports.up = function (knex) {
	return knex.schema.createTable('content', (table) => {
		// Auto increment
		table.increments();

		// Create "user_id" Col
    // References "user_id" Col to "id" Col in "user" table
    // When this user is deleted from the "user" table
    // -> it will be deleted from this table
 		table
			.integer('user_id')
			.notNullable()
			.references('id')
			.inTable('user')
			.onDelete('CASCADE')
			.index();
		table
			.integer('post_id')
			.notNullable()
			.references('id')
			.inTable('post')
			.onDelete('CASCADE')
			.index();

		table.text('content');

		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('content');
};
