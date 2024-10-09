const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
    user_id: { type: String },
    movie_id: { type: Number },
    is_active: { type: Boolean }
}, { timestamps: true });

favSchema.index({ coordinates: "2dspehere" });
const Fav = mongoose.model("Fav", favSchema);
module.exports = Fav;