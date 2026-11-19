const express = require('express');
const router = express.Router();
const promotion.Controller = require('../controllers/promotion.Controller');

router.get('/', promotion.Controller.getAll);
router.get('/:id', promotion.Controller.getById);
router.post('/', promotion.Controller.create);
router.put('/:id', promotion.Controller.update);
router.delete('/:id', promotion.Controller.delete);

module.exports = router;
