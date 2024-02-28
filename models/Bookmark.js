const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const bookmarkSchema = new Schema({
    site: { type: String },
    // url: { type: String },
    url: { 
        type: String, 
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    category: { type: String},
});

const bookmark = mongoose.model('bookmark', bookmarkSchema)

module.exports = bookmark