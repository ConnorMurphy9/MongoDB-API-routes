const router = require('express').Router();

const {
    createNewUser,
    findAllUsers,
    findSingleUser,
  } = require('../../controllers/userController.js');
  
  router.route('/').get(findAllUsers).post(createNewUser);
  
  router.route('/:userId').get(findSingleUser);
  
  module.exports = router;