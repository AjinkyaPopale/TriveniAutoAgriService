// Routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productcontroller');

// Routes
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
