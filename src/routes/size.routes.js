const express = require('express');
const router = express.Router();
const size.Controller = require('../controllers/size.Controller');

router.get('/', size.Controller.getAll);
router.get('/:id', size.Controller.getById);
router.post('/', size.Controller.create);
router.put('/:id', size.Controller.update);
router.delete('/:id', size.Controller.delete);

module.exports = router;
