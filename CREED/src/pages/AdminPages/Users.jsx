import React, { useEffect, useState } from "react";
import axios from "axios";
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
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllUsers = async () => {
    try {
      const u = await axios.get(
        "http://localhost:8080/api/v1/user/get-users"
      );
      setUsers(u.data.users);
    } catch (error) {
      toast.error("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Handler for editing user
  const handleEdit = (userId) => {
    // Add your edit logic here
    // Example: Navigate to an edit page, or open a modal with a form
  };

  // Handler for deleting user
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios
          .delete(
            `http://localhost:8080/api/v1/user/delete/${userId}`
          )
          .then(() => {
            toast.success("Deleted User Succesfully");
          });
        await fetchAllUsers(); // Update state to remove the deleted user
      } catch (error) {
        toast.error("Error deleting user");
      }
    }
  };

  if (loading) {
    return (
      <div className="loader-div">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
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
            {/* <Link to="/admin/orders">
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
            </Link> */}
          </Paper>
        </Grid>

        {/* Right Content - 7 Columns */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {/* Recent Orders Section */}
            <Grid item xs={12}>
              <Paper
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 12 }}
                style={{ padding: "20px" }}
              >
                <Typography variant="h6" gutterBottom>
                  All Users
                </Typography>
                {loading ? (
                  <Typography>Loading...</Typography>
                ) : (
                  <TableContainer container={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Customer Email</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users.map((u) => (
                          <TableRow key={u._id}>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDelete(u._id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Paper>
            </Grid>

            {/* Products Section (Placeholder) */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
