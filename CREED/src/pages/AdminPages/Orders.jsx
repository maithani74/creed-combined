import React, { useEffect, useState } from "react";
import Header from "../Header";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const response = await axios.get(
        "https://creed-backend-vxes.onrender.com/api/v1/order/getAllOrders",
      );
      setOrders(response.data.orders);
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // Filter orders where quantity is greater than 50
  const filteredOrders = orders.filter((order) => order.quantity > 50);

  return (
    <>
      <Grid container spacing={2} style={{ height: "100vh", padding: "10px" }}>
        {/* Left Sidebar - 3 Columns */}
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
            <Link to="/admin/orders">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "80%",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
                }}
              >
                Orders
              </Button>
            </Link>
          </Paper>
        </Grid>

        {/* Right Content - 7 Columns */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h6" gutterBottom>
                  Orders with Quantity {">"} 50
                </Typography>

                {/* Orders Table */}
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Order Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                          <TableRow key={order._id}>
                            <TableCell>{order._id}</TableCell>
                            <TableCell>{order.productName}</TableCell>
                            <TableCell>{order.quantity}</TableCell>
                            <TableCell>{order.customerName}</TableCell>
                            <TableCell>
                              {new Date(order.orderDate).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} align="center">
                            No orders found with quantity greater than 50.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Orders;
