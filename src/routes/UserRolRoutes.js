const express=require('express');
const router = express.Router();
const UserRol = require('../controller/UserRolController');
const authMiddleware = require('../middlewares/authMiddleware');

//midleware aplicado a cada ruta del modulo
router.use(authMiddleware);

router.post('/',UserRol.create);
router.get('/',UserRol.getAll);

module.exports=router;