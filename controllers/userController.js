const User = require('../models/User');

module.exports = {
  findAllUsers(req, res) {
    User.find()
      .then((usersData) => res.json(usersData))
      .catch((err) => res.status(500).json(err))
  },
  findSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No user with that ID!' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err))
  },
  // create a new user
  createNewUser(req, res) {
    User.create(req.body)
      .then((newUserData) => res.json(newUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  deleteUser(req, res) {
  User.findOneAndDelete(
    { name: req.params.userId },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
}};