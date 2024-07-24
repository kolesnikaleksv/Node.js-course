const getRootHandler = (req, res) => {
  console.log('First handler');
  res.send('Get root route');
};

module.exports = getRootHandler;
