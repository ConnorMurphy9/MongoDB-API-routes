const router = require('express').Router();

const {
    createNewThought,
    findAllThoughts,
    findSingleThought,
  } = require('../../controllers/thoughtController.js');
  
  router.route('/').get(findAllThoughts).post(createNewThought);
  
  router.route('/:thoughtId').get(findSingleThought);
  
  module.exports = router;