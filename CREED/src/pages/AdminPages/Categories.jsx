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
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(""); // State for new category input
  const [editCategory, setEditCategory] = useState(null); // State for editing category
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility

  // Fetch all categories from backend
  const getAllCategories = async () => {
    const c = await axios.get(
      "http://localhost:8080/api/v1/category/get-categories"
    );
    setCategories(c.data.category);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  // Add a new category
  const handleAddCategory = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/v1/category/create-category",
        {
          name: newCategory,
        }
      );
      setNewCategory("");
      getAllCategories(); // Refresh the list
    } catch (error) {
      toast.error("Error adding category");
    }
  };

  // Open the dialog for editing
  const handleEditCategory = (category) => {
    setEditCategory(category);
    setOpenDialog(true); // Open the modal
  };

  // Save the edited category
  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/v1/category/update-category/${editCategory._id}`,
        {
          name: editCategory.name,
        }
      );
      setOpenDialog(false);
      getAllCategories(); // Refresh the list
    } catch (error) {
      toast.error("Error updating category");
    }
  };

  // Delete a category
  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `http://localhost:8080/api/v1/category/delete-category/${id}`
        );
        getAllCategories(); // Refresh the list
      } catch (error) {
        toast.error("Error deleting category");
      }
    }
  };

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
            <Grid item xs={12}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h6" gutterBottom>
                  Categories
                </Typography>

                {/* Categories Table */}
                <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Category Name</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {categories.map((category) => (
                        <TableRow key={category._id}>
                          <TableCell>{category.name}</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ marginRight: "10px" }}
                              onClick={() => handleEditCategory(category)}
                            >
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Edit Category Dialog */}
      {editCategory && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Category Name"
              value={editCategory.name}
              onChange={(e) =>
                setEditCategory({ ...editCategory, name: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button
              onClick={handleSaveEdit}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Categories;
