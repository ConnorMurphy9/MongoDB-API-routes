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
    .then((newThoughtData) => res.json(newThoughtData))
    // .then((newThoughtData) => newThoughtData._id.)
    .catch((err) => res.status(500).json(err));
  },

  createReaction(req, res) {
    Thought.create(req.body)
  .then((reaction) => {
    return Thought.findOneAndUpdate(
      { _id: req.body.thoughtId },
      { $addToSet: { reactions: reaction._id} },
      { new: true }
    );
  })
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

// deleteReaction(req, res) {
//   Thought.findOneAndDelete(
//     { name: req.params.thoughtId },
//     (err, result) => {
//       if (result) {
//         res.status(200).json(result);
//         console.log(`Deleted: ${result}`);
//       } else {
//         console.log('Oh no! Something went wrong!');
//         res.status(500).json({ error: 'Something went wrong!' });
//       }
//     }
//   );
// }

};


