const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  //   console.log('This is param log: ', val);
  next();
});

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.checkUser, userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
