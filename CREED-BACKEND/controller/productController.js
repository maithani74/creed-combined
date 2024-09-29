const fs = require("fs");
const { Product } = require("../model/productModel");
const slugify = require("slugify");
const { Category } = require("../model/categoryModel");
exports.createProduct = async (req, res) => {
  // try {
  //   const { name, description, price, category, quantity, slug } =
  //     req.fields;
  //   const { photo } = req.files;
  //   const product = new Product({ ...req.fields, slug: slugify(name) });
  //   console.log(product);
  //   if (photo) {
  //     product.photo.data = fs.readFileSync(photo.path);
  //     product.photo.contentType = photo.type;
  //   }
  //   await product.save();
  //   res.status(201).send({
  //     success: true,
  //     message: "Products Created Successfully",
  //     product,
  //   });
  // } catch (error) {
  //   res.status(500).send({
  //     success: false,
  //     message: "Error in Creating Product",
  //     error,
  //   });
  // }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error in getting products",
      error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).send({
      success: true,
      message: "Fetched SUCCESSFULLY",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Deleted SUCCESSFULLY",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting product",
      error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Hello");
    const { name, description, price, category, quantity } = req.fields;
    switch (true) {
      case !name: {
        return res.status(404).send({ message: "Enter Name" });
      }
      case !description: {
        return res.status(404).send({ message: "Enter description" });
      }
      case !price: {
        return res.status(404).send({ message: "Enter price" });
      }
      case !quantity: {
        return res.status(404).send({ message: "Enter quantity" });
      }
      case !category: {
        return res.status(404).send({ message: "Enter category" });
      }
    }
    const { photo } = req.files;
    console.log("Hello");
    const product = await Product.findByIdAndUpdate(
      id,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(201).send({
      success: true,
      message: "Updated Product Successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "ERROR IN UPDATING",
      error,
    });
  }
};

exports.getPhoto = async (req, res) => {
  try {
    const photo = await Product.findById(req.params.id).select("image");
    if (photo.photo.data) {
      res.set("Content-type", photo.photo.contentType);
      return res.status(200).send(photo.photo.data);
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting photo",
      error,
    });
  }
};

// exports.getFilteredProducts = async (req, res) => {
//   try {
//     const { category } = req.body;
//     const id = await Category.findOne({ name: category });
//     const products = await Product.find({ category: id });
//     res.status(200).send({
//       success: true,
//       message: "Products fetched successfully",
//       products,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: "Error in getting products",
//       error,
//     });
//   }
// };

exports.getFilteredProducts = async (req, res) => {
  try {
    const { category, size, priceRange } = req.body;
    let query = {};

    // Add category filter if provided
    if (category) {
      const categoryData = await Category.findOne({ name: category });
      if (categoryData) {
        query.category = categoryData._id;
      }
    }

    // Add size filter if provided
    if (size) {
      query.size = size;
    }

    // Fetch all products first
    let products = await Product.find(query);

    // If priceRange is provided, filter based on the calculated discounted price
    if (priceRange) {
      const { min, max } = JSON.parse(priceRange);
      console.log('Applying price range filter on discounted price:', min, max);

      // Filter products where the calculated discounted price falls within the range
      products = products.filter((product) => {
        const discountedPrice = product.price - (product.price * product.discount / 100);
        return discountedPrice >= min && discountedPrice <= max;
      });
    }

    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.error("Error in getting products:", error);
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error,
    });
  }
};





exports.getSizeFilter = async (req, res) => {
  try {
    const { size } = req.body;
    const products = await Product.find({ size:size });
    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error,
    });
  }
};

exports.getPricedProducts = async (req, res) => {
  try {
    const {price} = req.body;
    console.log(price);
    const products = await Product.find({
      price: { $lte: price,$gte:200},
    });
    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Getting Products",
      error,
    });
  }
};
