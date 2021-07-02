exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('post')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('post').insert([
				{ title: 'My Blog Post', content: 'What a wonderful day!!!' },
				{ title: 'Another Blog Post', content: 'OOOOOO, great!!!' },
			]);
		});
};
