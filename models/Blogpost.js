const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const blogpostSchema = new Schema({
    title: { type: String },
    date: { type: String },
    category: { type: String },
    post: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
});

const blogpost = mongoose.model('blogpost', blogpostSchema)

module.exports = blogpost