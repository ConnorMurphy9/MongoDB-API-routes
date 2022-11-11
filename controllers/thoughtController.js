const Thought = require('../models/Thought');
const User = require('../models/User');
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
  // create a new thought
  createNewThought(req, res) {
    Thought.create(req.body)
    .then((newThoughtData) => {
     return User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: newThoughtData._id } },
        { new: true }
      );
    })
    .then((user) =>
    !user
      ? res.status(404).json({
          message: 'Thought created, but found no user with that ID',
        })
      : res.json('Created the thought!')
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  },

  createReaction(req, res) {
  // const newReaction = 
     Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body} },
      { new: true }
    )
  .then((reaction) =>
    !reaction
      ? res
          .status(404)
          .json({ message: 'Reaction created, but found no thought with that ID' })
      : res.json('Created the reaction!')
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

deleteReaction(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { reactionId: req.body.reactionId } } },
    { runValidators: true, new: true }
  )
    .then((data) =>
      !data
        ? res.status(404).json({ message: 'No reaction with this id!' })
        : res.json(data)
    )
    .catch((err) => res.status(500).json(err));
},

updateSingleThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json(thought)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

deleteSingleThought(req, res) {
  Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              // .json({ message: 'Thought created but no user with this id!' })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
}
};


