const getUsersHandler = (req, res) => {
  res.send('Get Users handler');
};

const postUsersHandler = (req, res) => {
  res.send('Post Users handler');
};

const getSingleUserHandler = (req, res) => {
  res.send(`Get single user handler. User Id: ${req.params.userId}`);
};

module.exports = {
  getSingleUserHandler,
  postUsersHandler,
  getUsersHandler,
};
