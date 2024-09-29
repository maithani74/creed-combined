import React, { useState, useEffect, useRef } from "react";
import ProductsDisplay from "../components/main/Products/ProductsDisplay";
import axios from "axios";
import {
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Divider,
} from "@mui/material";
import Header from "./Header";
import HeaderTest from "./HeaderPhone";
import toast from "react-hot-toast";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import arrow icon
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // Import arrow icon

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const textField = useRef();
  const [filterData, setFilterData] = useState({
    size: "",
    priceRange: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterHeight, setFilterHeight] = useState("0px"); // For smooth animation

  const fetchFilteredProducts = async (filters = {}) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/product/getFilteredProducts",
        filters
      );
      setProducts(res.data.products);
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    fetchFilteredProducts(filterData);
  };

  const resetFilters = () => {
    setFilterData({
      size: "",
      priceRange: "",
    });
    textField.current.value = "";
    fetchFilteredProducts();
  };

  const priceRanges = [
    { label: "0 - 500", value: { min: 0, max: 500 } },
    { label: "501 - 1000", value: { min: 501, max: 1000 } },
    { label: "1001 - 1500", value: { min: 1001, max: 1500 } },
    { label: "1501 - 2000", value: { min: 1501, max: 2000 } },
    { label: "2001 - 2500", value: { min: 2001, max: 2500 } },
    { label: "2501 - 3000", value: { min: 2501, max: 3000 } },
    { label: "3001 - 3500", value: { min: 3001, max: 3500 } },
    { label: "3501 - 4000", value: { min: 3501, max: 4000 } },
  ];

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
    setFilterHeight(isFilterOpen ? "0px" : "200px"); // Set to the content height
  };

  const viewPortWidth = window.innerWidth <= 480;

  return (
    <div>
      <div style={{ marginTop: viewPortWidth ? "40px" : "0px" }}>
        {viewPortWidth ? <HeaderTest /> : <Header />}
      </div>
      <Grid container spacing={3} sx={{ padding: "20px" }}>
        {/* Filter Section */}
        <Grid item xs={12} sm={3}>
          <Paper
            sx={{
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
              transition: "max-height 0.3s ease-in-out",
              overflow: "hidden",
            }}
          >
            <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={toggleFilter}>
              <Typography variant="h5" sx={{ fontWeight: "600", flexGrow: 1 }}>
                Filters
              </Typography>
              {isFilterOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Toggle icon */}
            </Box>
            <Divider sx={{ margin: "10px 0" }} />

            {/* Filter Content with Animation */}
            <Box
              sx={{
                maxHeight: filterHeight,
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              {isFilterOpen && (
                <>
                  {/* Filter by Size */}
                  <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <InputLabel>Filter by Size</InputLabel>
                    <Select
                      name="size"
                      value={filterData.size}
                      onChange={handleFilterChange}
                      sx={{ borderRadius: "8px" }}
                    >
                      <MenuItem value="500ML">500ML</MenuItem>
                      <MenuItem value="1L">1L</MenuItem>
                      <MenuItem value="5L">5L</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Filter by Price Range */}
                  <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <InputLabel>Filter by Price Range</InputLabel>
                    <Select
                      name="priceRange"
                      value={filterData.priceRange}
                      onChange={handleFilterChange}
                      sx={{ borderRadius: "8px" }}
                    >
                      {priceRanges.map((range, index) => (
                        <MenuItem key={index} value={JSON.stringify(range.value)}>
                          {range.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Filter Buttons */}
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#0288d1",
                        "&:hover": { backgroundColor: "#0277bd" },
                      }}
                      onClick={applyFilters}
                    >
                      Apply Filters
                    </Button>
                    <Button variant="outlined" onClick={resetFilters}>
                      Reset
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Paper>
        </Grid>

        {/* Products Section */}
        <Grid item xs={12} sm={9}>
          <ProductsDisplay products={products} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsPage;
