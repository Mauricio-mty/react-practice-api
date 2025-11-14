const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',UserController.getAll);
router.post('/',UserController.create);
router.patch('/:id',UserController.changePass);

//Private Routes
router.get('/:id',authMiddleware,UserController.getById);
router.put('/:id',authMiddleware,UserController.update);
router.delete('/:id',authMiddleware,UserController.delete);
router.patch('/changePass/:id',authMiddleware,UserController.changePass);


module.exports=router;