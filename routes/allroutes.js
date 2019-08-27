
const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

// NOTE: ORDER OF ROUTES IS IMPORTANT, LEAST TO MOST SPECIFICITY
router.get('/', controller.getHomePage);

router.get('/customers', controller.getCustomersPage); 

router.get('/customers/:customerId', controller.getCustomerDetail);

router.get('/add-customer', controller.getAddCustomerPage);

router.post('/add-customer', controller.postAddCustomer);

router.get('/add-product', controller.getAddProductPage);

router.post('/add-product', controller.postAddProduct);

router.get('/products', controller.getProductsPage);

router.get('/products/:productId', controller.getProductDetail);

router.get('/cart', controller.getCart);

router.post('/cart', controller.postToCart);

router.get('/contact-info', controller.getContactInfo);

module.exports = router;