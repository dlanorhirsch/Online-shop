const Product = require('../models/product');
const Customer = require('../models/customer');


exports.getHomePage = (req, res, next) => {
    res.render('homepage', {
        pageTitle: "Home Page"
        
    });
};

const customers = [];

//  CUSTOMERS PAGES  //
exports.getCustomersPage = (req, res, next) => {
        const customers = Customer.fetchAll();
    res.render ('customers', {
        custs: customers,
        pageTitle: "Customers",
        path: '/customers',
    });
}; 
exports.getAddCustomerPage = (req, res, next) => {
    res.render('add-customer', {
        pageTitle: "Add-Customer Page"
    });
};
exports.postAddCustomer = (req, res, next) => {
    const customer = new Customer(
        req.body.fName,
        req.body.lName,
        req.body.email  
    );
    customer.save();
    res.redirect('/');
};

//  PRODUCTS PAGES  //
exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add-Product Page"
    });
};
exports.postAddProduct= (req, res, next) => {
    const product = new Product(
        req.body.title,
        req.body.imageUrl,
        req.body.price,
        req.body.description
        );
    product.save();
    res.redirect('/');
};
exports.getProductsPage = (req, res, next) => {
    Product.fetchAll(products => {
        res.render ('products', {
            prods: products,
            pageTitle: "Products...",
            path: '/products',
            hasProducts: products.length > 0
        });
    
    }); 
};