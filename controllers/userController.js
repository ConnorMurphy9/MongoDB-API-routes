const User = require('../models/User');

module.exports = {
  findAllUsers(req, res) {
    User.find()
      .then((usersData) => res.json(usersData))
      .catch((err) => res.status(500).json(err));
  },
  findSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No user with that ID!' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createNewUser(req, res) {
    User.create(req.body)
      .then((newUserData) => res.json(newUserData))
      .catch((err) => res.status(500).json(err));
  },
};