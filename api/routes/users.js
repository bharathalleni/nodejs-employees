const express = require('express');
const router = express.Router();
const user = require('./middleware/users.middleware');

router.get('/', user.fetchUsers);

router.get('/:userId', user.getUserById);
router.post('/register', user.registerUser);

module.exports = router;