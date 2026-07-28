const express = require("express");
const {admin} = require("../middleware/adminMiddleware");
const {protect} = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {getProducts, createProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productController");

const router = express.Router();
router.route("/").get(getProducts).post(protect, admin, upload.single("image"), createProduct);
router.route("/:id").get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

module.exports = router;