const express = require('express');
const router = express.Router();
const EscritoController = require('../controller/EscritoController');

router.get('/',EscritoController.getAll);
router.get('/:id',EscritoController.getById);

router.post('/',EscritoController.create);

router.put('/:id',EscritoController.update);

router.delete('/:id',EscritoController.delete);

module.exports=router