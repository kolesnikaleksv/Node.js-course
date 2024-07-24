const getCommentsHandler = (req, res) => {
  console.log('Comments handler');
  res.send('Hello from comment page');
};

const getCommentIdHandler = (req, res) => {
  console.log(req.params);
  res.send(`Get comment route! Comment id: ${req.params.commentId}`);
};

const postCommentsHandler = (req, res) => {
  res.send('Post comments handler');
};

const deleteCommentIdHandler = (req, res) => {
  res.send(
    `Delete comment handler. CommentId: ${req.params.commentId} was deleted`
  );
};

module.exports = {
  getCommentIdHandler,
  getCommentsHandler,
  postCommentsHandler,
  deleteCommentIdHandler,
};
