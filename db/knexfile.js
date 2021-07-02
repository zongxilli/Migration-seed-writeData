// Update with your config settings.

module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			database: 'knex-to-postgreSQL_Database',
			user: 'postgres',
			password: 'li1104859021xi',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
