const userService = require('../service/user');

// Controller is something to handle HTTP request

class UserController {
	async createUser(req, res) {

		// Use try here, because the function below returns a promise
		try {
			const id = await userService.createUser(req.body);
			
			// Return id
			res.status(201).json(id);
		} catch (err) {
			console.error(err);

			// Console log out "something went wrong"
			res.status(500).json('something went wrong');
		}
	}
}

module.exports = new UserController();
