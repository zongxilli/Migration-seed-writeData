// dao actually is able to get touch to our database
const db = require('../db/db');

class UserDAO {
	async createUser(firstName, lastName, email) {

		// Insert the data we got into our "user" database
		const [id] = await db('user')
			.insert({
				email,
				first_name: firstName,
				last_name: lastName,
			})
			// Give id to above const [id]
			.returning('id');

		return id;
	}
}

module.exports = new UserDAO();
