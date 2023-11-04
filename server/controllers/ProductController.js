const Product = require("../models/ProductModel")

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allUsers) => {
            res.json(allUsers);
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((singleUser) => {
            res.json(singleUser);
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.crateProduct = (req, res) => {
    Product.create(req.body)
        .then((productCreated) => {
            res.json(productCreated)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then((updateProduct) => {
            res.json(updateProduct)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deleteProduct) => {
            res.json(deleteProduct)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}