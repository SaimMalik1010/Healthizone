const Razorpay = require("razorpay");
const crypto = require("crypto");
dotenv = require("dotenv");

const createdOrderv = async (req, res) => {

    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, // amount in the smallest currency unit
            currency: "PKR",
            receipt: `receipt_order_${Math.random() * 1000}`,
        };

        const order = await instance.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error: error.message });
    }
};
