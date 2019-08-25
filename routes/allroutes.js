
const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

// NOTE: ORDER OF ROUTES IS IMPORTANT, MOST TO LEAST SPECIFICITY
router.get('/', controller.getHomePage);

router.get('/customers', controller.getCustomersPage); 

router.get('/add-customer', controller.getAddCustomerPage);

router.post('/add-customer', controller.postAddCustomer);

router.get('/add-product', controller.getAddProductPage);

router.post('/add-product', controller.postAddProduct);

router.get('/products', controller.getProductsPage);

router.get('/products/:productId', controller.getProductDetail);

router.get('/contact-info', controller.getContactInfo);

module.exports = router;