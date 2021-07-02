exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('user')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('user').insert([
				{ first_name: 'Zongxi', last_name: 'Li', email: 'zongxi2014@gmail.com' },
				{ first_name: 'Yang', last_name: 'Tian', email: 'dxp9816@gmail.com' },
				{ first_name: 'Kennie', last_name: 'Li', email: '676773089@qq.com' },
			]);
		});
};
