const Product = require('../models/product');
const APIFeatures = require('../utils/ApiFeatures')

//Create new product => /api/v1/product/new
exports.newProduct = async (req, res, next) =>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

//Get all products => api/v1/products?keyword=
exports.getProducts = async(req, res, next) =>{

    const resPerPage = 4;
    const productCount = await Product.countDocuments();

    const apiFeatures = new APIFeatures(Product.find(),  req.query)
    .search()
    .filter()
    .pagination(resPerPage)

    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        products
    })
}

//Get single products details => /api/v1/product/:id
exports.getSingleProduct = async(req, res, next) => {
    const product = await Product.findById(req.params.id);;

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}

//Update Product => /api/v1/product/:id
exports.updateProduct = async(req, res, next ) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success: true,
        product
    })
}

//Delete Product => /api/v1/admin/product/:id
exports.deleteProduct = async(req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.deleteOne({_id: req.params.id})

    res.status(200).json({
        success: true,
        message: "Product is deleted"
    })
}