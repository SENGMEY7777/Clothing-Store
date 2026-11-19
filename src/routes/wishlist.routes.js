const express = require('express');
const router = express.Router();
const wishlist.Controller = require('../controllers/wishlist.Controller');

router.get('/', wishlist.Controller.getAll);
router.get('/:id', wishlist.Controller.getById);
router.post('/', wishlist.Controller.create);
router.put('/:id', wishlist.Controller.update);
router.delete('/:id', wishlist.Controller.delete);

module.exports = router;
