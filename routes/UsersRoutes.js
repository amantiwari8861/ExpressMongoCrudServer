const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/', userController.getAllUsers);//http://localhost:5000/api/v1/users
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.post('/insertmany', userController.insertMany);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

// MVC ->  model(data send/recieve) view(route) controller(logic)