const Product = require('../models/ProductModel');

exports.getAllProducts = async (req, res) => {
    console.log("giving all products");
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getProductById = async (req, res) => {
    console.log("giving product having id "+req.params.id);
    try {
        const product = await Product.find({"prid":req.params.id});
        if (!product) return res.status(404).send("Product not found");
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createProduct = async (req, res) => {
    console.log("adding product : "+JSON.stringify(req.body));
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
exports.insertMany = async (req, res) => {
    console.log("adding products having data :"+JSON.stringify(req.body));

    try {
        const products = req.body;
        const insertedProducts = await Product.insertMany(products);
        res.status(201).json(insertedProducts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateProduct = async (req, res) => {
    console.log("updating product having id "+req.params.id+" with data :"+JSON.stringify(req.body));
    try {
        const updatedProduct = await Product.findOneAndUpdate({"prid":req.params.id}, req.body, { new: true });
        if (!updatedProduct) return res.status(404).send("Product not found");
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteProduct = async (req, res) => {
    console.log("deleting product having id "+req.params.id);

    try {
        const deletedProduct = await Product.findOneAndDelete({"prid":req.params.id})
        if (!deletedProduct) return res.status(404).send("Product not found");
        res.json(deletedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
