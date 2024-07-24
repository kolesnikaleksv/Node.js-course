const express = require('express');
const {
  getSingleUserHandler,
  postUsersHandler,
  getUsersHandler,
} = require('../controllers/users');

const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', postUsersHandler);
router.get('/:userId', getSingleUserHandler);

module.exports = router;
