const express = require('express');
const {
  getCommentIdHandler,
  getCommentsHandler,
  postCommentsHandler,
  deleteCommentIdHandler,
} = require('../controllers/comments');

const router = express.Router();

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getCommentIdHandler);
router.delete('/:commentId', deleteCommentIdHandler);

module.exports = router;
