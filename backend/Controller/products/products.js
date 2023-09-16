const Products = require("../../model/products");

const GetAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find().exec();
    return res.status(200).json({
      status: "success",
      products: products
    });
  } catch (e) {
    const err = new Error("unable to fetch data");
    next(err);
  }
};

const GetProductById = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product != null) {
      return res.status(200).json({
        product: product,
        status: "success"
      });
    } else {
      const err = new Error("Invalid Id");
      err.status = "failure";
      err.statusCode = 404;
      next(err);
    }
  } catch (e) {
    const err = new Error(e.message);
    next(err);
  }
};

const SearchProductByName = async (req, res) => {
  try {
    const product = await Products.find({ name: req.params.name });
    return res.status(200).json({
      product: product,

      status: "success"
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "unable to fetch data"
    });
  }
};

const FilterProducts = async (req, res, next) => {
  try {
    const category = req.query.category;
    if (category == "All") {
      const products = await Products.find().exec();
      return res.status(200).json({
        products: products,
        status: "success"
      });
    } else {
      const products = await Products.find({ category: category }).exec();
      return res.status(200).json({
        products: products,
        status: "success"
      });
    }
  } catch (e) {
    const err = new Error(e.message);
    err.status = "failure";
    err.statusCode = 404;
    next(err);
  }
};

const AddProduct = async (req, res, next) => {
  try {
    const {
      title,
      price,
      description,
      image,
      hasDiscount,
      discountAmount,
      category,
      size
    } = req.body;

    const product = new Products({
      title: title,
      price: price,
      description: description,
      image: image,
      hasDiscount: hasDiscount,
      discountAmount: discountAmount,
      category: category,
      size: size
    });
    await product.save();
    return res.status(200).json({
      status: "success",
      message: "Product added successfully"
    });
  } catch (e) {
    const err = new Error(e.message);
    err.status = "failure";
    err.statusCode = 404;
    next(err);
  }
};

const GetCategories = async (req, res, next) => {
  try {
    const categories = await Products.distinct("category").exec();
    return res.status(200).json({
      categories: categories,
      status: "success"
    });
  } catch (e) {
    const err = new Error(e.message);
    err.status = "failure";
    err.statusCode = 404;
    next(err);
  }
};

const GetDiscountedProducts = async (req, res, next) => {
  try {
    const products = await Products.find({ hasDiscount: true });
    return res.status(200).json({
      products: products,
      status: "success"
    });
  } catch (e) {
    const err = new Error(e.message);
    err.status = "failure";
    err.statusCode = 404;
    next(err);
  }
};

module.exports = {
  GetAllProducts,
  FilterProducts,
  AddProduct,
  GetDiscountedProducts,
  GetCategories
};
