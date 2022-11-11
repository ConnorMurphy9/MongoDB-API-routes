const router = require('express').Router();

const {
    createNewUser,
    findAllUsers,
    findSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriends
  } = require('../../controllers/userController.js');
  
  router.route('/').get(findAllUsers).post(createNewUser);
  
  router.route('/:userId').get(findSingleUser);
  
  router.route('/updateUser/:userId').get(findSingleUser).put(updateUser);

  router.route('/deleteUser/:userId').get(findSingleUser).delete(deleteUser);

  router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriends);

  module.exports = router;