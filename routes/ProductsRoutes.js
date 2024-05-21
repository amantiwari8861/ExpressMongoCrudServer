const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/', productController.getAllProducts);//http://localhost:5000/api/v1/products
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.post('/insertmany', productController.insertMany);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

// MVC ->  model(data send/recieve) view(route) controller(logic)