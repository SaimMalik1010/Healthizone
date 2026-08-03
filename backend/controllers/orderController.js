const Order = require("../model/order");

//@desc     Create a new order
const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, shippingAddress, paymentId } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }
    const order = await Order.create({
      user: req.user.id,
      items,
      totalPrice,
      shippingAddress,
      paymentId,
      status: "Pending", // Default status
    });

    res.status(201).json(order);
  
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all orders (admin only)
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'id name email');
        res.json(orders);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get orders for the logged-in user
const myOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('items.productId', 'name price');
        res.json(orders);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get a single order by ID (admin only)
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user', 'id name email');
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    const updatedOrder = await order.save();

    res.json({ message: "Order status updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error: error.message });
  }
};

// @desc    Update shipping address (User)
// @route   PUT /api/orders/:id
// @access  Private
const updateOrderAddress = async (req, res) => {
  try {
    const { shippingAddress } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Authorization check
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Threshold Check: Address can only be changed before shipping
    if (order.status === "Shipped" || order.status === "Delivered" || order.status === "Cancelled") {
      return res.status(400).json({
        message: `Cannot update address. Order status is already ${order.status}`,
      });
    }

    order.shippingAddress = shippingAddress || order.shippingAddress;
    const updatedOrder = await order.save();

    res.json({ message: "Shipping address updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Cancel an order (User)
// @route   PUT /api/orders/:id/cancel
// @access  Private
// ELEGANT BACKEND APPROACH
const cancelOrder = async (req, res) => {
  try {
    // Find the order ONLY if it matches both the Order ID AND the Logged-in User ID
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user.id // Enforces ownership automatically
    });

    if (!order) {
      // Return 404 so potential attackers can't even probe whether the ID exists
      return res.status(404).json({ message: "Order not found" });
    }

    if (["Shipped", "Delivered", "Cancelled"].includes(order.status)) {
      return res.status(400).json({ message: `Cannot cancel an order that is ${order.status}` });
    }

    order.status = "Cancelled";
    await order.save();

    res.json({ message: "Order cancelled successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  myOrders,
  getOrderById,
  updateOrderStatus,
  updateOrderAddress,
  cancelOrder
};