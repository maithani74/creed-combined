import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  // State to store latest products
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch latest products from backend
  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await axios.get(
          "https://creed-backend-vxes.onrender.com/api/v1/product/getLatest",
        );
        setLatestProducts(response.data.products); // Assuming response.data is an array of products
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching latest products");
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, md: 12 }}
        style={{ height: "100vh", padding: "10px" }}
      >
        {/* Left Sidebar - 3 Columns */}
        <Grid item xs={3}>
          <Paper style={{ padding: "20px", height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Admin Menu
            </Typography>
            {/* Sidebar buttons */}
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

        {/* Right Content - 9 Columns */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {/* Latest Products Section */}
            <Grid item xs={12}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h6" gutterBottom>
                  Latest Products
                </Typography>

                {loading ? (
                  <CircularProgress />
                ) : (
                  <Grid container spacing={2}>
                    {latestProducts.map((product) => (
                      <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            image={product?.images[0]} // Assuming product has an image URL
                            alt={product.name}
                          />
                          <CardContent>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {product.description}
                            </Typography>
                            <Typography variant="h6">
                              ${product.price}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Paper>
            </Grid>

            {/* You can add more sections like orders, etc. */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
