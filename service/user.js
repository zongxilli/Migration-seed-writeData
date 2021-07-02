const userDAO = require('../dao/user');

class UserService {
	createUser(userDto) {
		const { firstName, lastName, email } = userDto;
		return userDAO.createUser(firstName, lastName, email);
	}
}

module.exports = new UserService();
