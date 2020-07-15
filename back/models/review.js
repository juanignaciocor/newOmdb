const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const ReviewSchema = mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    comments: { type: Array, required: true, default: [] },
    public: { type: String, default: "page" }
})



const Model = mongoose.model('review', ReviewSchema)

module.exports = Model

