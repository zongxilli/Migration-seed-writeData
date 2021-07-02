
exports.up = function (knex) {
	return knex.schema.createTable('organization', (table) => {

		// use uuid to generate "organization_id"
		// enu means "type" must be one of the 4 types
		table
			.uuid('organization_id')
			.unique()
			.notNullable()
			.primary()
			.defaultTo(knex.raw('gen_random_uuid()'));
		table.string('name').notNullable();
		table
			.enu('type', ['commercial', 'educational', 'non_profit', 'government'])
			.notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('organization');
};
