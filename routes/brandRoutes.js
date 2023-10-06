const express = require('express');
const router = express.Router();
const controller = require('../controllers/brandController');

router.get('/getallbrands',controller.getAllBrands);
router.get('/getallbrands/:id', controller.getAllBrandsById);
router.post('/addbrand', controller.createBrand);
router.put('/updatebrand/:id', controller.updateBrand);
router.delete('/deletebrand/:id', controller.deleteBrand);

module.exports = router;