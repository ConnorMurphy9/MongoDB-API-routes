const router = require('express').Router();

const {
    createNewThought,
    findAllThoughts,
    findSingleThought,
    createReaction,
    deleteReaction
    // updateSingleThought,
    // deleteSingleThought
  } = require('../../controllers/thoughtController.js');
  
  router.route('/').get(findAllThoughts).post(createNewThought);
  
  router.route('/:thoughtId').get(findSingleThought);
  
  router.route('/api/thoughts/:thoughtId/reactions').post(createReaction);

  // router.route('/api/thoughts/:thoughtId/reactions').delete(deleteReaction)
  module.exports = router;