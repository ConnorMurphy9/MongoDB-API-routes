const Thought = require('../models/Thought');

module.exports = {
  findAllThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
  findSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: 'No thought with that ID!' })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createNewThought(req, res) {
    Thought.create(req.body)
      .then((newThoughtData) => res.json(newThoughtData))
      .catch((err) => res.status(500).json(err));
  },
};