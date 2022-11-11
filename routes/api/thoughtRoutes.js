const router = require('express').Router();

const {
    createNewThought,
    findAllThoughts,
    findSingleThought,
    createReaction,
    deleteReaction,
    updateSingleThought,
    deleteSingleThought
  } = require('../../controllers/thoughtController.js');
  
  router.route('/').get(findAllThoughts)
  
  router.route('/').post(createNewThought);

  router.route('/:thoughtId').get(findSingleThought);
  
  router.route('/updateThought/:thoughtId').put(updateSingleThought);

  router.route('/deleteThought/:thoughtId').delete(deleteSingleThought)

  router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

  module.exports = router;