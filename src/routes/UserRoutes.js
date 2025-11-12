const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',UserController.getAll);
router.post('/',UserController.create);

//Private Routes
router.get('/:id',authMiddleware,UserController.getById);
router.put('/:id',authMiddleware,UserController.update);
router.delete('/:id',authMiddleware,UserController.delete);

module.exports=router