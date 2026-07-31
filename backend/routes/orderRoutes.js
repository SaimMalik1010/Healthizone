const express = require("express");
const {admin} = require("../middleware/adminMiddleware");
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();
const {
  createOrder,
  getOrders,
  myOrders,
  getOrderById,
  updateOrderStatus,
  updateOrderAddress,
  cancelOrder,
} = require("../controllers/orderController");

// Admin: Get all orders | User: Create order
router.route("/")
  .post(protect, createOrder)
  .get(protect, admin, getOrders);

// User: Get logged-in user's orders
router.route("/myOrders").get(protect, myOrders);

// Operations on a single specific order
router.route("/:id")
  .get(protect, getOrderById) // User (owner) or Admin can view
  .put(protect, updateOrderAddress); // User updates shipping address (if allowed)

// User: Cancel an order (updates status to 'Cancelled')
router.route("/:id/cancel").put(protect, cancelOrder);

// Admin: Update order status (Processing, Shipped, Delivered, etc.)
router.route("/:id/status").put(protect, admin, updateOrderStatus);

module.exports = router;