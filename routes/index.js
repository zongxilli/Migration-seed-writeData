const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

// router to get post req at localhost:8080/user
router.post('/user', userController.createUser);

module.exports = router;
