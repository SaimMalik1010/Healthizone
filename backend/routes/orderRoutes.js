const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {admin} = require("../middleware/adminMiddleware");
const router = express.Router();

const {createOrder, getOrders, myOrders, getOrderById, updateOrder, deleteOrder} = require("../controllers/orderController");

router.route("/").post(protect, createOrder).get(protect, admin, getOrders);
router.route("/myOrders").get(protect, myOrders).put(protect, updateOrder).delete(protect, deleteOrder);
router.route("/:id").get(protect, admin, getOrderById);
router.route("/:id/status").put(protect, admin, updateOrder);


module.exports = router;