const express = require('express');
const router = express.Router();
const variant.Controller = require('../controllers/variant.Controller');

router.get('/', variant.Controller.getAll);
router.get('/:id', variant.Controller.getById);
router.post('/', variant.Controller.create);
router.put('/:id', variant.Controller.update);
router.delete('/:id', variant.Controller.delete);

module.exports = router;
