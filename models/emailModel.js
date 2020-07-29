const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;