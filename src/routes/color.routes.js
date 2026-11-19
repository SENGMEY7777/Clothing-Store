const express = require('express');
const router = express.Router();
const color.Controller = require('../controllers/color.Controller');

router.get('/', color.Controller.getAll);
router.get('/:id', color.Controller.getById);
router.post('/', color.Controller.create);
router.put('/:id', color.Controller.update);
router.delete('/:id', color.Controller.delete);

module.exports = router;
