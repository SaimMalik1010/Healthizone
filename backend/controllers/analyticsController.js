const Order = require("../model/order");
const User = require("../model/user");
const Product = require("../model/product");

const getAdminStats = async (req , res) => {
    try{
        const totalUsers = await User.countDocuments({role: 'user'});
        const totalOrders = await Order.countDocuments();
        const totalProducts = await Product.countDocuments();

        const orders = await Order.find();
        const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

        res.json({
            totalUsers,
            totalOrders,
            totalProducts,
            totalRevenue
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getAdminStats};