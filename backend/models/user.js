const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
}, { timestamps: true });

userSchema.index({ coordinates: "2dspehere" });
const User = mongoose.model("User", userSchema);
module.exports = User;