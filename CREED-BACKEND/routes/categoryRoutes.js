const express = require('express');
// const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createCategoryController, updateCategoryController, categoryController, getCategoryController, deleteCategoryController } = require('../controller/categoryController');

const router = express.Router();
router.post("/create-category",createCategoryController)
.put("/update-category/:id",updateCategoryController)
.get("/get-categories",categoryController)
.get("/get-category/:slug",getCategoryController)
.delete("/delete-category/:id",deleteCategoryController)
exports.router=router;