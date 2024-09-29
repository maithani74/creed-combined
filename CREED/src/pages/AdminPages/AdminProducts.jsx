import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  CardActions,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [imagePreview, setImagePreview] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // Store selected category
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]); // Store uploaded images
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [categories, setCategories] = useState([]); // Categories from backend
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const sizes = ["500ML", "1L", "5L"];
  const [size, setSize] = useState("");
  // Fetch products

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "https://creed-backend-vxes.onrender.com/api/v1/product/product-count"
        );
      setTotal(data?.total);
    } catch (error) {
      toast.error(error);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://creed-backend-vxes.onrender.com/api/v1/product/productList/${page}`
      );
    setLoading(false);
    setProducts(res.data.products);
  };

  useEffect(() => {
    if (page == 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://creed-backend-vxes.onrender.com/api/v1/product/productList/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      setLoading(false);
    }
  };

  // Fetch categories from backend
  const getAllCategories = async () => {
    const c = await axios.get(
      "https://creed-backend-vxes.onrender.com/api/v1/category/get-categories"
    );
    setCategories(c.data.category);
  };

  useEffect(() => {
    getAllCategories();
    getProducts();
    getTotal();
  }, []);

  // Open form modal for adding a new product
  const handleClickOpen = () => {
    setIsEditing(false);
    setName("");
    setDescription("");
    setPrice("");
    setDiscount("");
    setSize("");
    setStock("");
    setCategory(""); // Reset category
    setImages([]); // Reset image array
    setImagePreview([]); // Reset preview
    setOpen(true);
  };

  // Open form modal for editing a product
  const handleEditClickOpen = async (id) => {
    setIsEditing(true);
    setSelectedProductId(id);

    // Fetch product details by ID
    const res = await axios.get(
      `https://creed-backend-vxes.onrender.com/api/v1/product/getProduct/${id}`
    );
    const product = res.data.product;

    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setDiscount(product.discount);
    setStock(product.stock);
    setCategory(product.category); // Set existing category
    setImages(product.images);
    setSize(product?.size);
    setImagePreview(product.images.map((img) => img)); // Show existing images as preview
    setOpen(true);
  };

  // Close the form modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handle image change and preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...files]);
    setImagePreview((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  // Handle form submission (add or edit product)
  const handleSubmit = async () => {
    setUploading(true);
    const formData = new FormData();

    // Append form data
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("category", category); // Append selected category

    // Append up to 3 images
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      if (isEditing) {
        // If editing, update the existing product
        await axios.put(
          `https://creed-backend-vxes.onrender.com/api/v1/product/update/${selectedProductId}`,
          formData
        );
        getProducts();
      } else {
        // If adding a new product
        await axios.post(
          "https://creed-backend-vxes.onrender.com/api/v1/product/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        toast.success("Product created successfully");
        setPage(1);
        getProducts();
      }
      setOpen(false);
    } catch (error) {
      toast.error("Error submitting product");
    } finally {
      setUploading(false);
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://creed-backend-vxes.onrender.com/api/v1/product/delete/${id}`);
      getProducts();
    } catch (error) {
      toast.error("Error in deleting product");
    }
  };

  return (
    <>
      <Header />
      <Grid container spacing={2} style={{ height: "100vh", padding: "10px" }}>
        <Grid item xs={3}>
          <Paper style={{ padding: "20px", height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Admin Menu
            </Typography>
            <Link to="/admin/products">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "80%",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
                }}
              >
                Products
              </Button>
            </Link>
            <Link to="/admin/users">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "80%",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
                }}
              >
                Users
              </Button>
            </Link>
            <Link to="/admin/categories">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "80%",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
                }}
              >
                Categories
              </Button>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Box sx={{ padding: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: "20px" }}
              onClick={handleClickOpen}
            >
              Add Product
            </Button>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="100"
                      image={product?.images[0]}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: ₹{product.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEditClickOpen(product._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => setPage(page + 1)}
              sx={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
                maxWidth: "200px", // Limit the button width
                display: "block", // Center the button
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {loading ? "Loading..." : "Load More Products"}
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Add/Edit Product Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {isEditing ? "Edit Product" : "Add New Product"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Product Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Product Price"
            type="number"
            fullWidth
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Discount"
            type="number"
            fullWidth
            variant="outlined"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Stock"
            type="number"
            fullWidth
            variant="outlined"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          {/* Category Select Dropdown */}
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel>Select Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Select Category"
            >
              {categories.map((cat) => (
                <MenuItem key={cat._id} value={cat._id}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* sizes Select Dropdown */}
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel>Select Size</InputLabel>
            <Select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              label="Select Size"
            >
              {sizes.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              component="span"
              color="primary"
              sx={{ marginTop: "15px" }}
            >
              Upload Images (Max 3)
            </Button>
          </label>

          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            {imagePreview.map((url, index) => (
              <Card key={index} sx={{ maxWidth: 120 }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={url}
                  alt={`Image ${index + 1}`}
                />
              </Card>
            ))}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={uploading}
            variant="contained"
          >
            {uploading ? (
              <CircularProgress size={24} color="inherit" />
            ) : isEditing ? (
              "Update Product"
            ) : (
              "Add Product"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminProducts;
